#!/bin/bash

fail_learn=""
fail_practice=""
fail_premium=""

append_fail() {
  local current="$1"
  local message="$2"
  printf '%s%s\n' "$current" "$message"
}

for i in 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15; do
  LEARN_FILE=$(ls "${i}"_Learn_*.html 2>/dev/null | head -n 1)
  PRACTICE_FILE="${i}_practice.html"
  PREMIUM_FILE="${i}_premium.html"

  if [ -f "$LEARN_FILE" ]; then
    grep -q "skip-link" "$LEARN_FILE" || fail_learn=$(append_fail "$fail_learn" "$LEARN_FILE (skip-link)")
    grep -q "theme-color" "$LEARN_FILE" || fail_learn=$(append_fail "$fail_learn" "$LEARN_FILE (theme-color)")
    grep -q "starfield" "$LEARN_FILE" || fail_learn=$(append_fail "$fail_learn" "$LEARN_FILE (starfield)")
    grep "tool-feedback" "$LEARN_FILE" | grep -q "aria-live" || fail_learn=$(append_fail "$fail_learn" "$LEARN_FILE (tool-feedback aria-live)")
    grep -q "href=\"${i}_practice.html\"" "$LEARN_FILE" || fail_learn=$(append_fail "$fail_learn" "$LEARN_FILE (practice-banner mismatch)")
  else
    fail_learn=$(append_fail "$fail_learn" "Unit $i Learn page NOT FOUND")
  fi

  if [ -f "$PRACTICE_FILE" ]; then
    grep -q "theme-color" "$PRACTICE_FILE" || fail_practice=$(append_fail "$fail_practice" "$PRACTICE_FILE (theme-color)")
    grep -q "practice-teaser.css?v=" "$PRACTICE_FILE" || fail_practice=$(append_fail "$fail_practice" "$PRACTICE_FILE (practice-teaser.css version)")
    grep -q "practice-teaser.js" "$PRACTICE_FILE" || fail_practice=$(append_fail "$fail_practice" "$PRACTICE_FILE (practice-teaser.js)")
    grep -q "practice-premium.js" "$PRACTICE_FILE" || fail_practice=$(append_fail "$fail_practice" "$PRACTICE_FILE (practice-premium.js)")
    grep -q "startCheckout('monthly', '${i}')" "$PRACTICE_FILE" || fail_practice=$(append_fail "$fail_practice" "$PRACTICE_FILE (monthly checkout mismatch)")
    grep -q "startCheckout('yearly', '${i}')" "$PRACTICE_FILE" || fail_practice=$(append_fail "$fail_practice" "$PRACTICE_FILE (yearly checkout mismatch)")
  else
    fail_practice=$(append_fail "$fail_practice" "Unit $i Practice page NOT FOUND")
  fi

  if [ -f "$PREMIUM_FILE" ]; then
    grep -q "skip-link" "$PREMIUM_FILE" || fail_premium=$(append_fail "$fail_premium" "$PREMIUM_FILE (skip-link)")
    grep -q "theme-color" "$PREMIUM_FILE" || fail_premium=$(append_fail "$fail_premium" "$PREMIUM_FILE (theme-color)")
    grep -q "premium.html?unit=${i}" "$PREMIUM_FILE" || fail_premium=$(append_fail "$fail_premium" "$PREMIUM_FILE (redirect mismatch)")
  else
    fail_premium=$(append_fail "$fail_premium" "Unit $i Premium page NOT FOUND")
  fi
done

echo "--- Learn Pages ---"
if [ -z "$fail_learn" ]; then
  echo "All passed"
else
  printf "%s" "$fail_learn"
fi

echo ""
echo "--- Practice Pages ---"
if [ -z "$fail_practice" ]; then
  echo "All passed"
else
  printf "%s" "$fail_practice"
fi

echo ""
echo "--- Premium Pages ---"
if [ -z "$fail_premium" ]; then
  echo "All passed"
else
  printf "%s" "$fail_premium"
fi
