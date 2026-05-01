# Deployment Guide

## Option A: GitHub Pages

1. Create a new GitHub repository.
2. Upload these files:
   - `index.html`
   - `app.js`
   - `styles.css`
   - `assets/`
   - `.nojekyll`
   - `README.md`
3. Open repository `Settings`.
4. Go to `Pages`.
5. Set `Source` to `Deploy from a branch`.
6. Select branch `main` and folder `/root`.
7. Save.
8. Wait for GitHub Pages to publish the site.

The site URL will look like:

```text
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

## Option B: Cloudflare Pages

1. Open Cloudflare Dashboard.
2. Go to `Workers & Pages`.
3. Create a new Pages project.
4. Choose either GitHub import or direct upload.
5. If direct upload, upload:
   - `index.html`
   - `app.js`
   - `styles.css`
   - `assets/`
   - `.nojekyll`
6. Build command: leave empty.
7. Build output directory: `/` or leave default for direct upload.

## Option C: Netlify Drop

1. Open Netlify Drop.
2. Drag the project folder into the browser.
3. Make sure the live deploy includes:
   - `index.html`
   - `app.js`
   - `styles.css`
   - `assets/`

## Discord Activity Prep

Discord Activities require an HTTPS URL. Deploy the site first, then use the deployed URL in Discord Developer Portal.
