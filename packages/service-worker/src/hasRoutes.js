import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";

export default function hasRoutes({
  cacheFonts,
  cacheImages,
  cacheJavascript,
  cacheStyles,
  cacheData,
}) {
  if (cacheFonts) {
    registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: true,
          }),
        ],
      }),
      "GET"
    );
  }

  if (cacheImages) {
    registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: true,
          }),
        ],
      }),
      "GET"
    );
  }

  if (cacheJavascript) {
    registerRoute(
      /\.(?:js)$/i,
      new StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: true,
          }),
        ],
      }),
      "GET"
    );
  }

  if (cacheStyles) {
    registerRoute(
      /\.(?:css|less)$/i,
      new StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: true,
          }),
        ],
      }),
      "GET"
    );
  }

  if (cacheData) {
    registerRoute(
      /\.(?:json|xml|csv)$/i,
      new StaleWhileRevalidate({
        cacheName: "static-data-assets",
        plugins: [
          new ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: true,
          }),
        ],
      }),
      "GET"
    );
  }
}
