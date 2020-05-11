import hasOffline from "./hasOffline";
import hasShowSkipWaiting from "./hasShowSkipWaiting";
import hasRoutes from "./hasRoutes";

export default function hasWorkbox({
  offlinePath: path = "/offline",
  showSkipWaitingPrompt = false,
} = {}) {
  if (path) {
    hasOffline({ path });
  }
  if (showSkipWaitingPrompt) {
    hasShowSkipWaiting();
  }
  hasRoutes();
}
