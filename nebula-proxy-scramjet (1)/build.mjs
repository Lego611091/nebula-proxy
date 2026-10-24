// Builds a fully static site into ./dist for GitHub Pages.
import { cpSync, rmSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { scramjetPath } from "@mercuryworkshop/scramjet/path";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";

const mods = join("node_modules", "@mercuryworkshop");
rmSync("dist", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });
cpSync("public", "dist", { recursive: true });
cpSync(scramjetPath, join("dist", "scram"), { recursive: true, filter: (src) => !src.includes("types") });
cpSync(baremuxPath, join("dist", "baremux"), { recursive: true });
cpSync(join(mods, "epoxy-transport", "dist"), join("dist", "epoxy"), { recursive: true });
cpSync(join(mods, "libcurl-transport", "dist"), join("dist", "libcurl"), { recursive: true });
writeFileSync(join("dist", ".nojekyll"), "");
console.log("Built ./dist");
