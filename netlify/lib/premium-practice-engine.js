function shuffle(array) {
  const items = array.slice();
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

function normalizeType(type) {
  if (!type) return 'all';
  return String(type).trim().toLowerCase();
}

function filterProblems(problems, type = 'all') {
  const normalized = normalizeType(type);
  if (normalized === 'all') return problems.slice();
  return problems.filter(problem => normalizeType(problem.type) === normalized);
}

function chooseProblems(problems, count = 12) {
  return shuffle(problems).slice(0, count);
}

function sanitizeProblem(problem) {
  const base = {
    id: problem.id,
    type: problem.type,
    tag: problem.tag || '',
    q: problem.q,
    unit: problem.unit || '',
    isText: Boolean(problem.isText)
  };

  if (Array.isArray(problem.choices)) {
    base.choices = problem.choices;
  }

  if (problem.answer !== undefined) {
    base.answer = problem.answer;
  }

  if (problem.tolerance !== undefined) {
    base.tolerance = problem.tolerance;
  }

  if (problem.correct !== undefined) {
    base.correct = problem.correct;
  }

  if (problem.solution !== undefined) {
    base.solution = problem.solution;
  }

  return base;
}

function buildProblemSet({ problems, type = 'all', count = 12 }) {
  const pool = filterProblems(problems, type);
  const picked = chooseProblems(pool, count);
  return {
    requestedType: normalizeType(type),
    requestedCount: count,
    availableCount: pool.length,
    returnedCount: picked.length,
    problems: picked.map(sanitizeProblem)
  };
}

function isCorrect(problem, rawAnswer) {
  if (Array.isArray(problem.choices) && Number.isInteger(problem.correct)) {
    return Number(rawAnswer) === problem.correct;
  }

  if (problem.isText) {
    return String(rawAnswer).trim().toLowerCase() === String(problem.answer).trim().toLowerCase();
  }

  if (problem.answer !== undefined && problem.answer !== null) {
    const actual = Number(rawAnswer);
    const expected = Number(problem.answer);
    const tolerance = Number(problem.tolerance || 0);
    return Number.isFinite(actual) && Math.abs(actual - expected) <= tolerance;
  }

  return false;
}

function scoreSubmission({ problems, answers }) {
  let correct = 0;
  const results = problems.map(problem => {
    const submitted = answers ? answers[problem.id] : undefined;
    const ok = isCorrect(problem, submitted);
    if (ok) correct += 1;
    return {
      id: problem.id,
      correct: ok,
      submitted,
      solution: problem.solution || ''
    };
  });

  return {
    correct,
    total: problems.length,
    percent: problems.length ? Math.round((correct / problems.length) * 100) : 0,
    results
  };
}

module.exports = {
  buildProblemSet,
  filterProblems,
  chooseProblems,
  scoreSubmission,
  isCorrect
};
