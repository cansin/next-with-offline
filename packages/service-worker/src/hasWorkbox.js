import * as googleAnalytics from "workbox-google-analytics";
import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";

import hasOffline from "./hasOffline";
import hasShowReloadPrompt from "./hasShowReloadPrompt";
import hasRoutes from "./hasRoutes";

export default function hasWorkbox({
  cleanupOutdatedCaches: shouldCleanupOutdatedCaches = true,
  offlineGoogleAnalytics = false,
  offlinePath: path = "/offline",
  showReloadPrompt = false,
  cacheImages = true,
  cacheFonts = true,
  cacheJavascript = true,
  cacheStyles = true,
  cacheData = true,
} = {}) {
  precacheAndRoute(self.__WB_MANIFEST);

  if (shouldCleanupOutdatedCaches) {
    cleanupOutdatedCaches();
  }

  if (offlineGoogleAnalytics) {
    googleAnalytics.initialize(offlineGoogleAnalytics);
  }

  if (path) {
    hasOffline({ path });
  }

  hasShowReloadPrompt(showReloadPrompt);

  hasRoutes({
    cacheImages,
    cacheFonts,
    cacheJavascript,
    cacheStyles,
    cacheData,
  });
}
