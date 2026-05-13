import glob
import os
import re

units = [f"{i:02d}" for i in range(1, 16)]
fail_learn = []
fail_practice = []
fail_premium = []

for unit in units:
    learn_files = glob.glob(f"{unit}_Learn_*.html")
    if not learn_files:
        fail_learn.append(f"Unit {unit} Learn page NOT FOUND")
    else:
        learn_file = learn_files[0]
        with open(learn_file, "r", encoding="utf-8") as handle:
            data = handle.read()
        if "skip-link" not in data:
            fail_learn.append(f"{learn_file} (skip-link)")
        if "theme-color" not in data:
            fail_learn.append(f"{learn_file} (theme-color)")
        if "starfield" not in data:
            fail_learn.append(f"{learn_file} (starfield)")
        if not any("aria-live" in line for line in data.splitlines() if "tool-feedback" in line):
            fail_learn.append(f"{learn_file} (tool-feedback aria-live)")
        if f'href="{unit}_practice.html"' not in data:
            fail_learn.append(f"{learn_file} (practice-banner mismatch)")

    practice_file = f"{unit}_practice.html"
    if not os.path.exists(practice_file):
        fail_practice.append(f"Unit {unit} Practice page NOT FOUND")
    else:
        with open(practice_file, "r", encoding="utf-8") as handle:
            data = handle.read()
        if "theme-color" not in data:
            fail_practice.append(f"{practice_file} (theme-color)")
        if "practice-teaser.css?v=" not in data:
            fail_practice.append(f"{practice_file} (practice-teaser.css version)")
        if "practice-teaser.js" not in data:
            fail_practice.append(f"{practice_file} (practice-teaser.js)")
        if "practice-premium.js" not in data:
            fail_practice.append(f"{practice_file} (practice-premium.js)")
        if f"startCheckout('monthly', '{unit}')" not in data:
            fail_practice.append(f"{practice_file} (monthly checkout mismatch)")
        if f"startCheckout('yearly', '{unit}')" not in data:
            fail_practice.append(f"{practice_file} (yearly checkout mismatch)")

    premium_file = f"{unit}_premium.html"
    if not os.path.exists(premium_file):
        fail_premium.append(f"Unit {unit} Premium page NOT FOUND")
    else:
        with open(premium_file, "r", encoding="utf-8") as handle:
            data = handle.read()
        if "skip-link" not in data:
            fail_premium.append(f"{premium_file} (skip-link)")
        if "theme-color" not in data:
            fail_premium.append(f"{premium_file} (theme-color)")
        if f"premium.html?unit={unit}" not in data:
            fail_premium.append(f"{premium_file} (redirect mismatch)")

print("--- Learn Pages ---")
print("\n".join(fail_learn) if fail_learn else "All passed")
print("\n--- Practice Pages ---")
print("\n".join(fail_practice) if fail_practice else "All passed")
print("\n--- Premium Pages ---")
print("\n".join(fail_premium) if fail_premium else "All passed")
