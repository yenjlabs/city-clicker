# State City Click Challenge

A lightweight browser game where you see a US state outline and click where you think a target city is located. You score points based on how close your guess is.

## Can I play it on GitHub?
Yes — this repository is set up for **GitHub Pages** deployment.

After pushing to the `main` branch, GitHub Actions deploys the site automatically. Your live game URL will be:

- `https://<your-github-username>.github.io/<repo-name>/`

## Enabling GitHub Pages (one-time)
1. Go to **Settings → Pages** in your GitHub repository.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from **Actions**).

## Local development
Because this is static HTML/CSS/JS, you can run a local web server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.
