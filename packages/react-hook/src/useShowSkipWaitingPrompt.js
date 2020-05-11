import { useEffect } from "react";

export default function useShowSkipWaitingPrompt({ showSkipWaitingPrompt }) {
  useEffect(() => {
    if (!window.workbox || !showSkipWaitingPrompt) {
      return;
    }

    window.workbox.addEventListener("controlling", async () => {
      window.location.reload();
    });

    const onConfirm = () => {
      window.workbox.messageSW({ type: "SKIP_WAITING" });
    };
    const onCancel = () => {};
    const prompt = () => showSkipWaitingPrompt(onConfirm, onCancel);

    window.workbox.addEventListener("waiting", prompt);
    window.workbox.addEventListener("externalwaiting", prompt);
  }, [showSkipWaitingPrompt]);

  return null;
}
