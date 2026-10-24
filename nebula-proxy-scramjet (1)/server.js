import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import express from "express";
import { scramjetPath } from "@mercuryworkshop/scramjet/path";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { server as wisp } from "@mercuryworkshop/wisp-js/server";

const __dirname = dirname(fileURLToPath(import.meta.url));
const mods = join(__dirname, "node_modules", "@mercuryworkshop");
const app = express();

// our own files first (index.html, sw.js), then the library files
app.use(express.static(join(__dirname, "public")));
app.use("/scram/", express.static(scramjetPath));
app.use("/baremux/", express.static(baremuxPath));
app.use("/epoxy/", express.static(join(mods, "epoxy-transport", "dist")));
app.use("/libcurl/", express.static(join(mods, "libcurl-transport", "dist")));

const server = createServer(app);
server.on("upgrade", (req, socket, head) => {
  if (req.url && req.url.endsWith("/wisp/")) wisp.routeRequest(req, socket, head);
  else socket.end();
});

const port = parseInt(process.env.PORT || "8080", 10);
server.listen(port, () => console.log(`Nebula running on http://localhost:${port}`));
process.on("SIGTERM", () => server.close(() => process.exit(0)));
