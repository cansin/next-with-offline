import { useEffect } from "react";

export default function useRegisterWorkbox() {
  useEffect(() => {
    if (!window.workbox) {
      return;
    }

    window.workbox.register();
  }, []);

  return null;
}
