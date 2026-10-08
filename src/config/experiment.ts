// Single source of truth for the BTC Experiment landing page.
export type LaunchStatus = "prelaunch" | "live";

export const EXPERIMENT_CONFIG = {
  status: "prelaunch" as LaunchStatus,
  botUrl: "https://t.me/BTCExperimentBot",
  tokenAddress: "",
  copy: {
    prelaunch: {
      statusLabel: "LIVE BTC MEME FEED",
      headline: ["THE BTC MEME EXPERIMENT", "IS LOADING."],
      cta: "JOIN THE EXPERIMENT",
    },
    live: {
      statusLabel: "BTC REWARDS LIVE",
      headline: ["THE ONLY MEME EXPERIMENT", "THAT PAYS YOU IN BITCOIN."],
      cta: "ENTER THE BTC EXPERIMENT",
    },
  },
  tagline: "Make memes. Hold the token. Earn BTC.",
  microcopy: "The experiment begins with memes.",
  loop: ["MAKE", "SHARE", "HOLD", "EARN BTC"],
};
