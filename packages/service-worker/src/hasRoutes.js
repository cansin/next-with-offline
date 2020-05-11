import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";

export default function hasRoutes() {
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
