import { useEffect } from "react";
import { useRouter } from "next/router";
import useNavigatorOnline from "use-navigator-online";

export default function useOffline({ path = "/offline" } = {}) {
  const { backOnline, isOffline } = useNavigatorOnline();
  const {
    asPath,
    pathname,
    push,
    query: { next },
  } = useRouter();

  useEffect(() => {
    if (path && isOffline && pathname !== path) {
      push({
        pathname: path,
        query: {
          next: asPath,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (path && backOnline) {
      if (next) {
        window.location.assign(next);
      } else {
        window.location.reload();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backOnline]);

  return null;
}
