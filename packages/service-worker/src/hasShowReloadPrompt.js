export default function hasShowReloadPrompt(showReloadPrompt) {
  if (showReloadPrompt) {
    self.addEventListener("message", (event) => {
      if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
      }
    });
  } else {
    self.addEventListener("install", () => self.skipWaiting());
    self.addEventListener("activate", () => self.clients.claim());
  }
}
