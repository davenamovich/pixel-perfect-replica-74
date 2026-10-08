import { createFileRoute } from "@tanstack/react-router";
import { MemeFeed } from "@/components/MemeFeed";
import { EXPERIMENT_CONFIG as C } from "@/config/experiment";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BTC Experiment — Make memes. Earn Bitcoin." },
      { name: "description", content: "A live Bitcoin meme experiment. Make memes. Hold the token. Earn BTC." },
      { property: "og:title", content: "BTC Experiment" },
      { property: "og:description", content: "Make memes. Hold the token. Earn BTC." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const s = C.copy[C.status];
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-x-hidden px-6 py-10">
      <div className="ambient" aria-hidden />
      <p className="relative z-10 font-mono text-[11px] tracking-[0.4em] text-muted-foreground">BTC EXPERIMENT</p>

      <div className="phone-wrap relative z-10 mt-8">
        <div className="phone">
          <div className="phone-screen">
            <div className="phone-notch" />
            <div className="flex items-center justify-center gap-2 pb-2 pt-9 font-mono text-[10px] tracking-widest text-foreground">
              <span className="live-dot" /> {s.statusLabel}
            </div>
            <div className="h-[calc(100%-3.5rem)] px-3">
              <MemeFeed />
            </div>
            <div className="phone-glare" />
          </div>
        </div>
      </div>

      <h1 className="relative z-10 mt-12 text-center font-display text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
        {s.headline[0]}
        <br />
        <span className="text-btc">{s.headline[1]}</span>
      </h1>
      <p className="relative z-10 mt-3 text-sm text-muted-foreground">{C.tagline}</p>

      <a href={C.botUrl} target="_blank" rel="noopener noreferrer" className="btn-btc relative z-10 mt-8">
        {s.cta}
      </a>
      <p className="relative z-10 mt-4 text-xs text-muted-foreground/70">{C.microcopy}</p>
      <p className="relative z-10 mt-6 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/60">
        {C.loop.join("  →  ")}
      </p>
    </main>
  );
}
