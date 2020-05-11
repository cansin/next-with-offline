import useOffline from "./useOffline";
import useShowReloadPrompt from "./useShowReloadPrompt";
import useRegisterWorkbox from "./useRegisterWorkbox";
import useCreateWorkbox from "./useCreateWorkbox";

export default function useWorkbox({
  offlinePath: path = "/offline",
  registerOptions = {},
  scriptURL = "sw.js",
  showReloadPrompt = false,
} = {}) {
  useCreateWorkbox({
    registerOptions,
    scriptURL,
  });
  useOffline({ path });
  useShowReloadPrompt({ showReloadPrompt });
  useRegisterWorkbox();

  return null;
}
