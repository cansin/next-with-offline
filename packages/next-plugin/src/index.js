const { nanoid } = require("nanoid");
const withWorkbox = require("next-with-workbox");

function withOffline({ offline = {}, workbox = {}, ...nextConfig } = {}) {
  const { additionalManifestEntries = [], swSrc = "worker.js" } = workbox;
  const { offlinePath = "/offline" } = offline;

  return withWorkbox({
    ...nextConfig,
    workbox: {
      additionalManifestEntries: [
        ...(offlinePath ? [{ url: offlinePath, revision: nanoid() }] : []),
        ...additionalManifestEntries,
      ],
      swSrc,
      ...workbox,
    },
  });
}

module.exports = withOffline;
