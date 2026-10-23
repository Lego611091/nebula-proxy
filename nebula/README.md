# Nebula

A nebula-themed web proxy browser. Default search engine is DuckDuckGo (changeable in Settings).
Built on Ultraviolet, bare-mux, Epoxy/Libcurl transports and a Wisp relay.

## Run locally
```
npm install
npm start
```
Open http://localhost:8080

## Deploy
GitHub Pages will NOT work: Nebula needs a Node server (for the Wisp relay).
Use Render, Railway, Fly.io, a VPS, etc.:
- Build command: `npm install`
- Start command: `npm start`
- Service workers need HTTPS (hosts above provide it automatically).

## Settings
- General: default search engine
- Appearance: Nebula / Aurora / Supernova
- Proxy: Epoxy or Libcurl transport, relay list, add your own `wss://` relay

## Layout
- `server.js` - static files + Wisp relay at `/wisp/`
- `public/index.html` - the browser UI
- `public/uv/` - Ultraviolet config and service worker
