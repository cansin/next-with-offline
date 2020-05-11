import { useEffect } from "react";
import { Workbox } from "workbox-window";

export default function useCreateWorkbox({ scriptURL, registerOptions }) {
  useEffect(() => {
    if (
      process.env.NODE_ENV === "production" &&
      process.browser &&
      "serviceWorker" in navigator
    ) {
      window.workbox = new Workbox(scriptURL, {
        scope: "/",
        ...registerOptions,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
