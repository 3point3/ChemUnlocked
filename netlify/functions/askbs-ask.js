// netlify/functions/ask.js
//
// Serverless endpoint for AskBS. Keeps the Anthropic API key server-side
// (never shipped to the browser), applies basic rate limiting, and asks
// Claude to answer the question with total confidence and zero accuracy,
// in a strict JSON shape the frontend can render directly.

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = "claude-haiku-4-5-20251001"; // fast + cheap — good fit for high-volume joke traffic

// ---------------------------------------------------------------------
// Very lightweight, best-effort rate limiting, kept in memory.
//
// IMPORTANT: serverless functions can spin up a fresh instance at any
// time (a "cold start"), which resets these counters to zero. That means
// this is NOT a hard, guaranteed limit — a burst of traffic hitting
// several cold instances at once could briefly exceed these numbers.
// What it DOES do cheaply and reliably: stop a single visitor from
// hammering the endpoint, and cap runaway cost during normal traffic.
//
// If you outgrow this (the site gets genuinely popular, or you want a
// hard cost ceiling), swap this out for Netlify Blobs or a small
// database-backed counter instead.
// ---------------------------------------------------------------------
const MIN_GAP_MS = 3000;        // one question per visitor every 3 seconds
const PER_IP_DAILY_CAP = 60;    // requests per visitor per rolling 24h
const GLOBAL_DAILY_CAP = 1500;  // total requests across all visitors per rolling 24h
const DAY_MS = 24 * 60 * 60 * 1000;

const lastRequestByIp = new Map();  // ip -> timestamp of last request
const dailyCountByIp = new Map();   // ip -> { count, windowStart }
let globalDaily = { count: 0, windowStart: Date.now() };

function checkRateLimit(ip) {
  const now = Date.now();

  if (now - globalDaily.windowStart > DAY_MS) {
    globalDaily = { count: 0, windowStart: now };
  }
  if (globalDaily.count >= GLOBAL_DAILY_CAP) {
    return { ok: false, reason: "AskBS has run out of confidence for today. Try again tomorrow." };
  }

  const last = lastRequestByIp.get(ip) || 0;
  if (now - last < MIN_GAP_MS) {
    return { ok: false, reason: "Slow down — even AskBS needs a second to make something up." };
  }

  let entry = dailyCountByIp.get(ip);
  if (!entry || now - entry.windowStart > DAY_MS) {
    entry = { count: 0, windowStart: now };
  }
  if (entry.count >= PER_IP_DAILY_CAP) {
    return { ok: false, reason: "You've hit today's limit of wrong answers. Come back tomorrow." };
  }

  lastRequestByIp.set(ip, now);
  entry.count += 1;
  dailyCountByIp.set(ip, entry);
  globalDaily.count += 1;

  return { ok: true };
}

const SYSTEM_PROMPT = `You are AskBS, a comedy chatbot on a joke website. Your entire personality is answering questions with total, unearned confidence while being completely wrong — like a friend who never says "I don't know" and instead just makes something up on the spot.

Rules:
- Never give the real, correct answer. Always be confidently, obviously, absurdly wrong.
- Keep it short: 1-2 sentences for the main answer, 1 sentence of "supporting evidence."
- Invent fake specifics — fake years, fake institutions, fake experts, fake statistics — for comic effect.
- Never be mean-spirited, never target real people, never touch anything genuinely sensitive (health, tragedy, hate, violence, self-harm, illegal activity). If the question veers into any of that, deflect into something silly and unrelated instead of answering it.
- Keep it appropriate for a general audience, including teenagers.
- Respond ONLY with a single JSON object, no other text, no markdown fences, matching exactly this shape:
{"headline": "the confident wrong answer, 1-2 sentences", "subtext": "one sentence of fake supporting evidence", "confidence": <integer 60-100>, "verdict": "a short 1-3 word badge like Confirmed / Debunked / Under Review / Legally Distinct", "sources": ["fake source 1", "fake source 2", "fake source 3"]}`;

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  if (!ANTHROPIC_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server isn't configured with an API key yet." })
    };
  }

  const ip =
    event.headers["x-nf-client-connection-ip"] ||
    event.headers["client-ip"] ||
    "unknown";

  const rate = checkRateLimit(ip);
  if (!rate.ok) {
    return { statusCode: 429, body: JSON.stringify({ error: rate.reason }) };
  }

  let question;
  try {
    const parsedBody = JSON.parse(event.body || "{}");
    question = (parsedBody.question || "").trim();
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Bad request." }) };
  }

  if (!question) {
    return { statusCode: 400, body: JSON.stringify({ error: "Ask something first." }) };
  }
  if (question.length > 300) {
    return { statusCode: 400, body: JSON.stringify({ error: "Keep it under 300 characters." }) };
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: question }]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic API error:", response.status, errText);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "AskBS short-circuited. Try again in a moment." })
      };
    }

    const data = await response.json();
    const raw = (data.content || []).map((b) => b.text || "").join("").trim();

    let parsed;
    try {
      const cleaned = raw.replace(/^```json\s*|\s*```$/g, "");
      parsed = JSON.parse(cleaned);
    } catch {
      // Model didn't return clean JSON — fall back to a generic wrapper
      // rather than showing the visitor a broken response.
      parsed = {
        headline: raw || "Yes. Definitely. Next question.",
        subtext: "AskBS is very sure about this, for reasons it can't quite articulate.",
        confidence: 88,
        verdict: "Confirmed",
        sources: ["Trust Me Bro, Journal of Vibes-Based Science"]
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed)
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something broke. Even AskBS doesn't have an excuse for this one." })
    };
  }
};
