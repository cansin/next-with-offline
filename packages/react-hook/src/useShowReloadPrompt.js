import { useEffect, useRef } from "react";

export default function useShowReloadPrompt({ showReloadPrompt }) {
  const showReloadPromptRef = useRef({ showReloadPrompt });

  useEffect(() => {
    if (!window.workbox || !showReloadPrompt || !showReloadPromptRef.current) {
      return;
    }

    window.workbox.addEventListener("controlling", async () => {
      window.location.reload();
    });

    const onConfirm = () => {
      window.workbox.messageSW({ type: "SKIP_WAITING" });
    };
    const onCancel = () => {};

    if (!(showReloadPromptRef.current instanceof Function)) {
      showReloadPromptRef.current = () => {
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
        await showReloadPromptRef.current();
        onConfirm();
      } catch (e) {
        onCancel();
      }
    };

    window.workbox.addEventListener("waiting", prompt);
    window.workbox.addEventListener("externalwaiting", prompt);
  }, []);

  return null;
}
