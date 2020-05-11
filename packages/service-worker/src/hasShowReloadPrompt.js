export default function hasShowReloadPrompt(value) {
  if (value) {
    self.addEventListener("install", () => self.skipWaiting());
    self.addEventListener("activate", () => self.clients.claim());
  } else {
    self.addEventListener("message", (event) => {
      if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
      }
    });
  }
}
