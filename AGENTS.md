# AGENTS.md

## Application overview

ActiveSo.org is the static website for ActiveSo, a Go package that provides an active record-like persistence layer for Go structs built on Turso. The site is a single-page artifact (`index.html`) with plain HTML and CSS — no JavaScript framework, no build step. It is deployed via GitHub Pages from the repository root.

## Site structure and assets

- `index.html` — the entire page: markup only, no inline `<style>` blocks, no remote dependencies.
- `assets/css/site.css` — all page styles. House design system lifted from section.co: BEM class names, CSS custom properties in OKLCH, 0.5px hairlines, 768px column, noise divider as an embedded data URI.
- `assets/css/fonts.css` — `@font-face` declarations for the self-hosted fonts. Family names (`Google Sans Flex`, `Oswald`) match section.co's usage and the `font-family` references in `site.css`.
- `assets/fonts/` — `GoogleSansFlex-subset.woff2` and `Oswald-VariableFont_wght.ttf`, copied from the section.co project. These are the only font sources; do not reintroduce Google Fonts links or any other remote assets.

When changing styles, edit `assets/css/site.css` — never add `<style>` blocks back into `index.html`. Keep the design tokens (colors, hairline widths, type ramp) consistent with section.co's tokens; when section.co's tokens change, update here deliberately.

## Project skills

Verified, load-bearing app knowledge lives in **`.skills/`** within the directory — read the relevant skill before touching the area it covers, and keep it current when behavior changes.

When you discover a new verified behavior in this repo (a deployment quirk, a font-hosting constraint, a Pages configuration detail), record it as a new SKILL.md under `.skills/` rather than leaving it in conversation history.

## Code documentation rules

Keep comments practical and current whenever behavior changes. In CSS, comment the intent of non-obvious rules (why, not what) — for example why an icon span uses `display: inline-block`. In HTML, prefer self-describing BEM class names over explanatory comments.

## Code formatting

Use tabs for indentation in all HTML, CSS, and any scripts. Do not use spaces for indentation. Match the existing indentation and attribute style of the file you are editing; do not reformat untouched regions.

## Deployment

The site publishes through GitHub Pages. Changes to `main` are made through pull requests — direct pushes to `main` are rejected by repository rules. The working branch for site changes is `site`; merge to `main` via PR, with Pages configured to deploy from `main` / root.

## Human approval requirement

Any change to `AGENTS.md` requires explicit human approval before the change is made. Read-only inspection is allowed when needed to understand the application.