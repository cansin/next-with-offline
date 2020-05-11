import { useEffect } from "react";

export default function useShowReloadPrompt({ showReloadPrompt }) {
  useEffect(() => {
    if (!window.workbox || !showReloadPrompt) {
      return;
    }

    window.workbox.addEventListener("controlling", async () => {
      window.location.reload();
    });

    const onConfirm = () => {
      window.workbox.messageSW({ type: "SKIP_WAITING" });
    };
    const onCancel = () => {};

    if (!(showReloadPrompt instanceof Function)) {
      showReloadPrompt = () => {
        return new Promise(function (resolve, reject) {
          let confirmed = window.confirm(
            "A new version is available, reload to use it immediately?"
          );

          return confirmed ? resolve(true) : reject(false);
        });
      };
    }

    const prompt = async () => {
      try {
        await showReloadPrompt();
        onConfirm();
      } catch (e) {
        onCancel();
      }
    };

    window.workbox.addEventListener("waiting", prompt);
    window.workbox.addEventListener("externalwaiting", prompt);
  }, [showReloadPrompt]);

  return null;
}
