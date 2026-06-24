(function () {
  "use strict";

  var BANK = window.NCLEX_QUESTIONS || [];
  var ROUND = 10;
  var LETTERS = ["A", "B", "C", "D", "E"];
  var app = document.getElementById("app");

  // ---------- persistent stats ----------
  var STORE = "nclex_rn_v1";
  function loadStore() {
    try { return JSON.parse(localStorage.getItem(STORE)) || {}; }
    catch (e) { return {}; }
  }
  function saveStore(s) {
    try { localStorage.setItem(STORE, JSON.stringify(s)); } catch (e) {}
  }
  var store = loadStore();
  if (!store.answered) store.answered = 0;
  if (!store.correct) store.correct = 0;
  if (!store.rounds) store.rounds = 0;
  if (!Array.isArray(store.seen)) store.seen = [];

  // ---------- pick a fresh set of questions ----------
  function pickRound() {
    var n = BANK.length;
    // Prefer questions not seen recently. If we've seen most of the bank, reset.
    if (store.seen.length > n - ROUND) store.seen = [];
    var seenSet = {};
    store.seen.forEach(function (i) { seenSet[i] = true; });

    var pool = [];
    for (var i = 0; i < n; i++) if (!seenSet[i]) pool.push(i);

    // Fisher–Yates partial shuffle, take ROUND
    var chosen = [];
    var count = Math.min(ROUND, pool.length);
    for (var k = 0; k < count; k++) {
      var r = k + Math.floor(Math.random() * (pool.length - k));
      var tmp = pool[k]; pool[k] = pool[r]; pool[r] = tmp;
      chosen.push(pool[k]);
    }
    chosen.forEach(function (i) { store.seen.push(i); });
    saveStore(store);
    return chosen;
  }

  // ---------- session state ----------
  var session = null;

  function startRound() {
    session = {
      items: pickRound(),
      pos: 0,
      score: 0,
      picked: null,     // index chosen for current question
      locked: false     // whether current question answered
    };
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- escape HTML ----------
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // bold the "Answer X is correct." lead of a rationale
  function fmtExpl(s) {
    s = esc(s);
    return s.replace(/^(Answer\s+[A-E]\s+is\s+correct\.)/i, "<b>$1</b>");
  }

  // ---------- screens ----------
  function renderStart() {
    session = null;
    var acc = store.answered ? Math.round((store.correct / store.answered) * 100) : 0;
    app.innerHTML =
      '<p class="lead">A bank of <strong>' + BANK.length +
      ' NCLEX-RN practice questions</strong>. Each round gives you 10 questions, ' +
      'one at a time. Pick an answer to see whether it’s right — and why — then move on. ' +
      'A score appears after every 10.</p>' +
      '<div class="stat-row">' +
        '<div class="stat"><b>' + store.rounds + '</b><span>Rounds done</span></div>' +
        '<div class="stat"><b>' + store.answered + '</b><span>Answered</span></div>' +
        '<div class="stat"><b>' + acc + '%</b><span>Lifetime accuracy</span></div>' +
      '</div>' +
      '<button class="btn" id="start">Start 10 questions</button>' +
      (store.answered ? '<button class="btn ghost" id="reset" style="margin-top:12px">Reset my stats</button>' : '');

    document.getElementById("start").addEventListener("click", startRound);
    var rb = document.getElementById("reset");
    if (rb) rb.addEventListener("click", function () {
      if (confirm("Clear your saved stats and question history?")) {
        store = { answered: 0, correct: 0, rounds: 0, seen: [] };
        saveStore(store);
        renderStart();
      }
    });
  }

  function renderQuestion() {
    var s = session;
    var qi = s.items[s.pos];
    var q = BANK[qi];
    s.picked = null;
    s.locked = false;

    var pct = (s.pos / ROUND) * 100;
    var html =
      '<div class="qbar">' +
        '<span class="meta">Question ' + (s.pos + 1) + ' of ' + ROUND + '</span>' +
        '<span class="scorepill">Score ' + s.score + ' / ' + s.pos + '</span>' +
      '</div>' +
      '<div class="progress"><i style="width:' + pct + '%"></i></div>' +
      '<div class="stem">' + esc(q.q) + '</div>' +
      '<div class="choices" id="choices">';

    for (var i = 0; i < q.c.length; i++) {
      html +=
        '<button class="choice" data-i="' + i + '">' +
          '<span class="key">' + LETTERS[i] + '</span>' +
          '<span class="txt">' + esc(q.c[i]) + '</span>' +
          '<span class="mark"></span>' +
        '</button>';
    }
    html += '</div>' +
      '<div class="feedback" id="feedback"></div>' +
      '<div class="actions">' +
        '<button class="btn" id="primary" disabled>Submit answer</button>' +
      '</div>';

    app.innerHTML = html;

    var choiceEls = Array.prototype.slice.call(app.querySelectorAll(".choice"));
    choiceEls.forEach(function (el) {
      el.addEventListener("click", function () {
        if (s.locked) return;
        choiceEls.forEach(function (c) { c.classList.remove("sel"); });
        el.classList.add("sel");
        s.picked = parseInt(el.getAttribute("data-i"), 10);
        document.getElementById("primary").disabled = false;
      });
    });

    document.getElementById("primary").addEventListener("click", onPrimary);
  }

  function onPrimary() {
    var s = session;
    if (!s.locked) {
      submitAnswer();
    } else {
      nextStep();
    }
  }

  function submitAnswer() {
    var s = session;
    if (s.picked === null) return;
    var qi = s.items[s.pos];
    var q = BANK[qi];
    var correctIdx = q.a;
    var isRight = s.picked === correctIdx;

    s.locked = true;
    s.score += isRight ? 1 : 0;
    store.answered += 1;
    store.correct += isRight ? 1 : 0;
    saveStore(store);

    var choiceEls = app.querySelectorAll(".choice");
    Array.prototype.forEach.call(choiceEls, function (el) {
      var i = parseInt(el.getAttribute("data-i"), 10);
      el.disabled = true;
      el.classList.remove("sel");
      if (i === correctIdx) {
        el.classList.add("correct");
        el.querySelector(".mark").textContent = "✓";
      } else if (i === s.picked) {
        el.classList.add("wrong");
        el.querySelector(".mark").textContent = "✗";
      }
    });

    var fb = document.getElementById("feedback");
    fb.className = "feedback show " + (isRight ? "ok" : "no");
    fb.innerHTML =
      '<div class="verdict">' + (isRight ? "✓ Correct" :
        "✗ Not quite — correct answer is " + LETTERS[correctIdx]) + '</div>' +
      '<div class="expl">' + fmtExpl(q.e) + '</div>';

    // update score pill
    var pill = app.querySelector(".scorepill");
    if (pill) pill.textContent = "Score " + s.score + " / " + (s.pos + 1);

    var primary = document.getElementById("primary");
    primary.textContent = (s.pos + 1 >= ROUND) ? "See results" : "Next question";
    primary.disabled = false;
    if (fb.scrollIntoView) fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function nextStep() {
    var s = session;
    s.pos += 1;
    if (s.pos >= ROUND) {
      finishRound();
    } else {
      renderQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function finishRound() {
    var s = session;
    store.rounds += 1;
    saveStore(store);

    var pct = Math.round((s.score / ROUND) * 100);
    var line, sub;
    if (s.score >= 9) { line = "Outstanding."; sub = "You’re testing at a strong, exam-ready level."; }
    else if (s.score >= 7) { line = "Solid work."; sub = "Comfortably in passing range — keep the streak going."; }
    else if (s.score >= 5) { line = "Getting there."; sub = "Review the rationales you missed and run another set."; }
    else { line = "Keep practicing."; sub = "Read each rationale carefully — repetition is how this sticks."; }

    app.innerHTML =
      '<div class="result-head">' +
        '<div class="ring" style="--p:' + pct + '">' +
          '<div class="inner"><b>' + s.score + '/' + ROUND + '</b><span>' + pct + '%</span></div>' +
        '</div>' +
      '</div>' +
      '<div class="verdict-line">' + line + '</div>' +
      '<div class="verdict-sub">' + sub + '</div>' +
      '<div class="actions">' +
        '<button class="btn ghost" id="home">Back to start</button>' +
        '<button class="btn" id="again">Try another 10</button>' +
      '</div>';

    document.getElementById("again").addEventListener("click", startRound);
    document.getElementById("home").addEventListener("click", renderStart);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- keyboard shortcuts ----------
  document.addEventListener("keydown", function (e) {
    if (!session) return;
    var key = e.key;
    if (!session.locked) {
      // 1-4 / A-D to select, Enter to submit
      var map = { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4,
                  "a": 0, "b": 1, "c": 2, "d": 3, "e": 4 };
      var idx = map[key.toLowerCase ? key.toLowerCase() : key];
      if (idx !== undefined) {
        var el = app.querySelector('.choice[data-i="' + idx + '"]');
        if (el) { el.click(); e.preventDefault(); }
      } else if (key === "Enter") {
        var p = document.getElementById("primary");
        if (p && !p.disabled) { p.click(); e.preventDefault(); }
      }
    } else if (key === "Enter") {
      var p2 = document.getElementById("primary");
      if (p2) { p2.click(); e.preventDefault(); }
    }
  });

  // ---------- boot ----------
  if (!BANK.length) {
    app.innerHTML = '<p class="lead">Question bank failed to load. Make sure ' +
      '<code>questions.js</code> is in the same folder as this page.</p>';
  } else {
    renderStart();
  }
})();
