import useOffline from "./useOffline";
import useShowSkipWaitingPrompt from "./useShowSkipWaitingPrompt";
import useRegisterWorkbox from "./useRegisterWorkbox";
import useCreateWorkbox from "./useCreateWorkbox";

export default function useWorkbox({
  offlinePath: path = "/offline",
  registerOptions = {},
  scriptURL = "sw.js",
  showSkipWaitingPrompt = false,
} = {}) {
  useCreateWorkbox({
    registerOptions,
    scriptURL,
  });
  useOffline({ path });
  useShowSkipWaitingPrompt({ showSkipWaitingPrompt });
  useRegisterWorkbox();

  return null;
}
