# State City Click Challenge

A browser game where you see a real US state outline and click where you think the target city is located.

## Gameplay
- Uses **all 50 US states**.
- Uses real state geometry from the US Atlas state dataset (derived from Census shapefiles).
- Scoring is based on geographic distance in **miles** (great-circle distance via haversine formula).

## Can I play it on GitHub?
Yes — this repository is set up for **GitHub Pages** deployment.

After pushing to the `main` branch, GitHub Actions deploys the site automatically. Your live game URL will be:

- `https://<your-github-username>.github.io/<repo-name>/`

## Enabling GitHub Pages (one-time)
1. Go to **Settings → Pages** in your GitHub repository.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from **Actions**).

## Local development
Run a local static server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.
