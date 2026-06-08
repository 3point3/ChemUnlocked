# ChemUnlocked Workflow

## Source Of Truth

- Edit the root source files only.
- Do not manually edit anything inside `publish/`.
- Treat `publish/` as generated deploy output, similar to a `dist/` folder.

## Safe Editing Workflow

1. Make changes in root files such as `index.html`, `chem.css`, `chem.js`, and `netlify/functions/*`.
2. Review changes with `git status`.
3. Commit and push only the root source changes.

Example:

```bash
git status
git add index.html chem.css netlify.toml
git commit -m "Improve homepage hero spacing"
git push
```

## Netlify Deploy Workflow

- Netlify build command: `npm run publish:prep`
- Netlify publish directory: `publish`
- Netlify functions directory: `netlify/functions`

This means Netlify will:

1. Build a clean deploy copy into `publish/`
2. Serve only the generated `publish/` output
3. Keep functions sourced from `netlify/functions`

## Local Deploy Prep

If you want to inspect the generated deploy output locally:

```bash
npm run publish:prep
```

After that, `publish/` should be considered disposable. If a file differs between the root and `publish/`, the root file is the one you should edit.
