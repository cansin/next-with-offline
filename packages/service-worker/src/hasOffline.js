import { NetworkOnly } from "workbox-strategies";
import { matchPrecache } from "workbox-precaching";
import { NavigationRoute, registerRoute } from "workbox-routing";

export default function hasOffline({ path = "/offline" } = {}) {
  const networkOnly = new NetworkOnly();
  const navigationHandler = async (params) => {
    try {
      // Attempt a network request.
      const actual = await networkOnly.handle(params);
      return actual;
    } catch (error) {
      // If it fails, return the cached HTML.
      const offline = await matchPrecache(path);
      return offline;
    }
  };

  registerRoute(new NavigationRoute(navigationHandler));
}
