# ActiveSo.org

The website for [ActiveSo](https://github.com/SectionCo/activeso) — a small active record–like persistence layer for Go structs, built on Turso.

The site is live at [https://activeso.org](https://activeso.org).

## Structure

A static, single-page site. No build step, no framework, no remote dependencies.

```
activeso-org/
├── index.html                     # the entire page — markup only
├── CNAME                          # custom domain: activeso.org
├── assets/
│   ├── css/
│   │   ├── site.css               # all page styles (Section Co. design system)
│   │   └── fonts.css              # @font-face declarations
│   ├── fonts/
│   │   ├── GoogleSansFlex-subset.woff2
│   │   └── Oswald-VariableFont_wght.ttf
│   └── js/
│       └── copy-buttons.js        # clipboard behavior for the install-command chips
└── AGENTS.md                      # conventions for agents working in this repo
```

`index.html` contains markup only — no inline `<style>` or `<script>` blocks. Styles live in `assets/css/site.css`, behavior in `assets/js/`.

Fonts are self-hosted copies from the [section.co](https://section.co) project; the family names (`Google Sans Flex`, `Oswald`) must match the `font-family` references in `site.css`.

## Design system

The visual vocabulary is lifted from section.co's live CSS:

- **Type** — Google Sans Flex for body text, Oswald for headings (uppercase)
- **Color** — warm ink `oklch(0.0753 0.0168 66.15)`, rust accent `oklch(59.63% 0.163 41.1)`, off-white `oklch(0.9791 0 0)`
- **Texture** — full-bleed noise dividers (feTurbulence SVG, embedded as a data URI) alternating left/right overflow
- **Details** — 0.5px hairlines, BEM class names, 768px column, `prefers-reduced-motion` respected

## Local preview

Any static file server from the repository root works:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

(Opening `index.html` directly as a file also works; assets resolve relative to the root.)

## Deployment

GitHub Pages serves the site from `main` at the repository root.

- Pushes to `main` are made through pull requests — direct pushes are rejected by repository rules.
- The custom domain (`activeso.org`) is set in **Settings → Pages**, backed by the `CNAME` file at the repository root.
- DNS: apex A records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; `www` CNAME → `sectionco.github.io` (DNS only, not proxied).

## License

MIT — see [LICENSE](LICENSE). Site fonts are copied from section.co's assets.