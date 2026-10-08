// Modular feed: replace `items` with real memes later; layout stays the same.
export type MemeItem = {
  id: string;
  handle: string;
  top?: string;
  bottom?: string;
  kind: "text" | "chart-up" | "chart-down" | "ticker";
  image?: string;
};

export const PLACEHOLDER_MEMES: MemeItem[] = [
  { id: "1", handle: "@satoshi_fan", kind: "chart-up", top: "ME AFTER BUYING", bottom: "THE TOP. AGAIN." },
  { id: "2", handle: "@hodl.exe", kind: "text", top: "1 BTC = 1 BTC", bottom: "stop checking the chart" },
  { id: "3", handle: "@laser_eyes", kind: "chart-down", top: "\"IT'S A HEALTHY CORRECTION\"", bottom: "— me, down 60%" },
  { id: "4", handle: "@stacksats", kind: "ticker", top: "STACKING SATS", bottom: "since breakfast" },
  { id: "5", handle: "@wen_lambo", kind: "text", top: "WIFE: WHY ARE YOU AWAKE", bottom: "me: asia session" },
  { id: "6", handle: "@orange.pill", kind: "chart-up", top: "NUMBER GO UP", bottom: "technology" },
  { id: "7", handle: "@ngmi_bot", kind: "text", top: "HAVE FUN STAYING POOR", bottom: "(affectionate)" },
  { id: "8", handle: "@block_reward", kind: "ticker", top: "TICK TOCK", bottom: "next block" },
];

function Visual({ kind }: { kind: MemeItem["kind"] }) {
  if (kind === "chart-up" || kind === "chart-down") {
    const pts =
      kind === "chart-up"
        ? "0,70 15,62 28,66 42,48 55,52 70,30 85,34 100,8"
        : "0,10 15,18 28,14 42,36 55,30 70,55 85,50 100,74";
    return (
      <svg viewBox="0 0 100 80" className="h-24 w-full" preserveAspectRatio="none">
        <polyline points={pts} fill="none" className={kind === "chart-up" ? "stroke-btc" : "stroke-destructive"} strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
      </svg>
    );
  }
  if (kind === "ticker") {
    return <div className="font-mono text-3xl font-bold text-btc">₿ +0.00042</div>;
  }
  return <div className="text-5xl">₿</div>;
}

function Card({ m }: { m: MemeItem }) {
  return (
    <div className="meme-card">
      <div className="mb-2 flex items-center gap-2 text-[10px] text-muted-foreground">
        <span className="h-4 w-4 rounded-full bg-btc/70" />
        {m.handle}
      </div>
      <div className="meme-frame">
        <p className="meme-text">{m.top}</p>
        <div className="flex flex-1 items-center justify-center py-2">
          {m.image ? <img src={m.image} alt="" loading="lazy" className="max-h-28 rounded" /> : <Visual kind={m.kind} />}
        </div>
        <p className="meme-text">{m.bottom}</p>
      </div>
    </div>
  );
}

export function MemeFeed({ items = PLACEHOLDER_MEMES }: { items?: MemeItem[] }) {
  return (
    <div className="relative h-full overflow-hidden">
      <div className="feed-track">
        {[...items, ...items].map((m, i) => (
          <Card key={m.id + "-" + i} m={m} />
        ))}
      </div>
    </div>
  );
}
