const { nanoid } = require("nanoid");
const withWorkbox = require("next-with-workbox");

function withOffline({ offline = {}, workbox = {}, ...nextConfig } = {}) {
  const { additionalManifestEntries = {}, swSrc = "worker.js" } = workbox;
  const { path = "/offline" } = offline;

  return withWorkbox({
    ...nextConfig,
    workbox: {
      additionalManifestEntries: [
        ...(path ? [{ url: path, revision: nanoid() }] : []),
        ...additionalManifestEntries,
      ],
      swSrc,
      ...workbox,
    },
  });
}

module.exports = withOffline;
