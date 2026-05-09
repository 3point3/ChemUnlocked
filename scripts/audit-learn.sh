#!/usr/bin/env bash
# audit-learn.sh — ChemUnlocked Learn HTML drift audit
# Usage: ./scripts/audit-learn.sh [dir]   (defaults to repo root)

DIR="${1:-$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)}"
FILES=()
while IFS= read -r f; do FILES+=("$f"); done < <(find "$DIR" -maxdepth 1 -name "[0-9][0-9]_Learn_*.html" | sort)
[[ ${#FILES[@]} -eq 0 ]] && { echo "No Learn HTML files found in $DIR"; exit 1; }

# ── 1: Utility class overrides ────────────────────────────────────────────────
for f in "${FILES[@]}"; do
  fname=$(basename "$f")
  grep -nE "tool-action-row|tool-choice-row|tool-feedback|tool-reveal|tool-support" "$f" \
    | grep -E "margin-top-[0-9]|padding-top-[0-9]" \
    | while IFS=: read -r n _; do
        echo "[$fname:$n] UTILITY_OVERRIDE — semantic class combined with utility margin/padding"
      done
done

# ── 4: Orphaned tool-context-box — handled in python3 block below ─────────────

# ── 6: Reveal/Next buttons missing disabled ───────────────────────────────────
# Only match <button elements — excludes paragraph titles and JS template strings.
for f in "${FILES[@]}"; do
  fname=$(basename "$f")
  grep -n "<button" "$f" | grep -E "Reveal reasoning|Try another" | grep -v "disabled" \
    | while IFS=: read -r n line; do
        label=$(echo "$line" | grep -oE "Reveal reasoning|Try another" | head -1)
        echo "[$fname:$n] MISSING_DISABLED — \"$label\" missing disabled attribute"
      done
done

# ── 5: JS getElementById → HTML id mismatches ────────────────────────────────
for f in "${FILES[@]}"; do
  fname=$(basename "$f")
  unit="${fname:0:2}"
  jsfile="$DIR/${unit}_tools.js"
  [[ -f "$jsfile" ]] || continue

  grep -oE "getElementById\('[^']+'|getElementById\(\"[^\"]+\"" "$jsfile" \
    | grep -oE "'[^']+'|\"[^\"]+\"" | tr -d "'\"" | sort -u \
    | while IFS= read -r id; do
        grep -q "id=\"$id\"" "$f" && continue
        jsline=$(grep -n "getElementById" "$jsfile" | grep -m1 "'$id'\|\"$id\"" | cut -d: -f1)
        echo "[$fname:—] ID_MISMATCH — id=\"$id\" in ${unit}_tools.js:${jsline:-?} not found in HTML"
      done
done

# ── 2 & 3: DOM-level checks via python3 ──────────────────────────────────────
python3 - "${FILES[@]}" << 'PYTHON'
import sys, re

for path in sys.argv[1:]:
    fname = path.split('/')[-1]
    try:
        lines = open(path).readlines()
    except OSError:
        continue
    text = ''.join(lines)

    # ── 2: semantic elements nested inside tool-card instead of direct tool-flow children
    depth = 0
    in_tool_flow = False
    in_tool_card = False
    flow_depth = None
    card_depth = None

    for i, line in enumerate(lines, 1):
        opens  = line.count('<div')
        closes = line.count('</div>')

        if re.search(r'class="[^"]*\b(tool-flow|tool-output)\b', line) and '<div' in line:
            in_tool_flow = True
            flow_depth = depth

        if in_tool_flow and re.search(r'class="[^"]*\btool-card\b', line) and '<div' in line:
            in_tool_card = True
            card_depth = depth

        if in_tool_card:
            m = re.search(r'tool-action-row|tool-choice-row|tool-feedback|tool-reveal|tool-support', line)
            if m and '<div' in line:
                print(f'[{fname}:{i}] NESTING — {m.group()} inside tool-card, not a direct tool-flow child')

        depth += opens - closes

        if card_depth is not None and depth <= card_depth:
            in_tool_card = False
            card_depth = None
        if flow_depth is not None and depth <= flow_depth:
            in_tool_flow = False
            flow_depth = None

    # ── 3: tool-scenario-prompt missing required child classes
    REQUIRED = ['tool-focus-label', 'tool-scenario-title', 'tool-scenario-text']
    for m in re.finditer(r'class="[^"]*tool-scenario-prompt', text):
        line_num = text[:m.start()].count('\n') + 1
        chunk = text[m.start():m.start() + 800]
        for req in REQUIRED:
            if req not in chunk:
                print(f'[{fname}:{line_num}] PROMPT_STRUCTURE — tool-scenario-prompt missing class="{req}"')

    # ── 4: static steps.tool-context-box (no JS-populated ids inside)
    depth = 0
    in_box = False
    box_depth = None
    box_start = None
    box_lines = []

    for i, line in enumerate(lines, 1):
        opens  = line.count('<div')
        closes = line.count('</div>')

        if re.search(r'class="[^"]*\bsteps\b[^"]*\btool-context-box\b', line) and '<div' in line:
            in_box = True
            box_depth = depth
            box_start = i
            box_lines = [line]
        elif in_box:
            box_lines.append(line)

        depth += opens - closes

        if in_box and box_depth is not None and depth <= box_depth:
            block = ''.join(box_lines)
            if not re.search(r'\bid="[^"]+"', block):
                print(f'[{fname}:{box_start}] ORPHAN_CONTEXT_BOX — static steps.tool-context-box with no JS ids')
            in_box = False
            box_depth = None
            box_lines = []

PYTHON
