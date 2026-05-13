#!/bin/sh

# Consistency checks for unit learn pages (03-15)
# Exit code: 0 when all checks pass, 2 when any check fails.

FILES="$(ls [0-1][0-9]_Learn_*.html 2>/dev/null | grep -E '^(03|04|05|06|07|08|09|10|11|12|13|14|15)_Learn_')"
FAIL=0

print_header() {
  echo ""
  echo "=== $1 ==="
}

mark_fail() {
  FAIL=1
  echo "$1"
}

print_header "missing skip-link"
for f in $FILES; do
  grep -q '<a href="#main-content" class="skip-link">Skip to main content</a>' "$f" || mark_fail "$f"
done

print_header "missing theme-color"
for f in $FILES; do
  grep -q '<meta name="theme-color"' "$f" || mark_fail "$f"
done

print_header "chem.js loads after external _tools.js (wrong order)"
for f in $FILES; do
  JS_LINE=$(grep -n 'chem.js' "$f" | tail -1 | cut -d: -f1)
  TOOLS_LINE=$(grep -n '_tools.js' "$f" | head -1 | cut -d: -f1)
  if [ -n "$JS_LINE" ] && [ -n "$TOOLS_LINE" ] && [ "$JS_LINE" -gt "$TOOLS_LINE" ]; then
    mark_fail "$f (chem.js line=$JS_LINE, tools.js line=$TOOLS_LINE)"
  fi
done

print_header "inline executable script in <head> (excluding ld+json)"
for f in $FILES; do
  if awk '
    BEGIN { in_head=1; bad=0 }
    /<\/head>/ { in_head=0 }
    in_head && /<script/ {
      if ($0 !~ /application\/ld\+json/) bad=1
    }
    END { exit bad ? 0 : 1 }
  ' "$f"; then
    mark_fail "$f"
  fi
done

print_header "missing starfield div"
for f in $FILES; do
  grep -q '<div class="starfield"></div>' "$f" || mark_fail "$f"
done

print_header "tool-feedback lines missing aria-live"
for f in $FILES; do
  if awk '/<[^>]*tool-feedback/ && $0 !~ /aria-live=/{ bad=1 } END{ exit bad ? 0 : 1 }' "$f"; then
    mark_fail "$f"
  fi
done

print_header "missing versioned chem.css"
for f in $FILES; do
  grep -q 'chem.css?v=' "$f" || mark_fail "$f"
done

print_header "practice-banner href mismatch"
for f in $FILES; do
  UNIT=$(echo "$f" | cut -c1-2)
  EXPECTED="${UNIT}_practice.html"
  ACTUAL=$(grep -o 'href="[0-9][0-9]_practice\.html"' "$f" | head -1 | cut -d'"' -f2)
  if [ -z "$ACTUAL" ]; then
    mark_fail "$f (missing practice banner href)"
  elif [ "$ACTUAL" != "$EXPECTED" ]; then
    mark_fail "$f (expected $EXPECTED, got $ACTUAL)"
  fi
done

echo ""
if [ "$FAIL" -eq 0 ]; then
  echo "All checks passed."
  exit 0
fi

echo "One or more checks failed."
exit 2
