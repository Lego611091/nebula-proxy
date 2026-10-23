// Builds a fully static site into ./dist for GitHub Pages.
import { cpSync, rmSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";

const mods = join("node_modules", "@mercuryworkshop");
rmSync("dist", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });
cpSync("public", "dist", { recursive: true });
cpSync(uvPath, join("dist", "uv"), { recursive: true, force: false }); // keeps our config/sw
cpSync(baremuxPath, join("dist", "baremux"), { recursive: true });
cpSync(join(mods, "epoxy-transport", "dist"), join("dist", "epoxy"), { recursive: true });
cpSync(join(mods, "libcurl-transport", "dist"), join("dist", "libcurl"), { recursive: true });
writeFileSync(join("dist", ".nojekyll"), "");
console.log("Built ./dist");
