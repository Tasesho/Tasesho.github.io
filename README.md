
**Project Overview**

- **Name**: Tase — personal portfolio site
- **Description**: Static website (portfolio + blog + personal page) showcasing projects, interests and contact information.
- **Tech**: HTML, CSS, JavaScript; lightweight static assets in `assets/` and styles/scripts in `static/`.

**Latest Changes**

- **Home** layout updated (improved sections and footer).
- **Personal page**: `me/index.html` added with interests, games, anime sections and `me-styles.css`.
- **Assets**: new images under `assets/anime/` and other asset folders.
- **Blog**: scaffold present at `blog/index.html` (empty placeholder ready for posts).

**Repo Structure**

- **`index.html`**: main landing page and portfolio.
- **`me/`**: personal/about page (`me/index.html`, `me-styles.css`).
- **`blog/`**: blog index (currently scaffolded).
- **`assets/`**: images and static media (e.g., `assets/anime/`, `assets/games/`).
- **`static/`**: styles and JS (e.g., `static/style.css`, `static/script.js`, `static/devicon.min.css`).

**Preview Locally**

Run a simple static file server from the project root:

```bash
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or use your editor's Live Server extension or any static hosting (GitHub Pages / Netlify / Vercel).

**How to Contribute / Edit**

- Edit HTML/CSS/JS files directly and preview locally.
- Add blog posts under `blog/` and link them from the blog index when ready.

**Contact**

- Owner: Benjamin "Tase" Vasquez — benjam.vsqz@gmail.com