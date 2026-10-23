// Works on a normal site and on a GitHub Pages sub-path (/repo-name/).
(() => {
  const here = (typeof document !== "undefined" && document.currentScript)
    ? document.currentScript.src
    : self.location.href;
  const uv = new URL("./", here).pathname; // e.g. /nebula-proxy/uv/
  self.__uv$config = {
    prefix: uv + "service/",
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: uv + "uv.handler.js",
    client: uv + "uv.client.js",
    bundle: uv + "uv.bundle.js",
    config: uv + "uv.config.js",
    sw: uv + "uv.sw.js",
  };
})();
