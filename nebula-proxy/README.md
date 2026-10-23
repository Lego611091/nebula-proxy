# Nebula

Nebula-themed web proxy browser (Ultraviolet + bare-mux + Epoxy/Libcurl + Wisp).
Default search engine: DuckDuckGo (changeable in Settings).

## Two parts
1. **The site** (static) - hosted free on GitHub Pages.
2. **The relay** (`server.js`) - a tiny Node server that does the actual proxying.
   GitHub Pages cannot run it, so host it on Render / Railway / Fly.io / a VPS.

## Step 1 - Deploy the relay
On Render (free): New > Web Service > pick this repo.
Build command `npm install`, start command `npm start`.
Your relay address will be `wss://YOUR-APP.onrender.com/wisp/`.
(Free Render services sleep when idle; the first connection can take ~30s.)

## Step 2 - Put the relay in the site
Edit `public/config.js` and add your relay URL, commit it.
(Or each user can paste one in Settings > Proxy > Your own relay.)

## Step 3 - Turn on GitHub Pages
Repo > Settings > Pages > Source: **GitHub Actions**.
Every push to `main` rebuilds and deploys. Site: `https://USERNAME.github.io/REPO/`

## Run everything locally
```
npm install
npm start
```
Open http://localhost:8080
