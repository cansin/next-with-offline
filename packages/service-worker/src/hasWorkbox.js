import * as googleAnalytics from "workbox-google-analytics";
import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";

import hasOffline from "./hasOffline";
import hasShowSkipWaiting from "./hasShowSkipWaiting";
import hasRoutes from "./hasRoutes";

export default function hasWorkbox({
  cleanupOutdatedCaches: shouldCleanupOutdatedCaches = true,
  offlineGoogleAnalytics = false,
  offlinePath: path = "/offline",
  showSkipWaitingPrompt = false,
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

  if (showSkipWaitingPrompt) {
    hasShowSkipWaiting();
  }

  hasRoutes();
}
