interface NowItem {
  label: string;
  value: string;
}

const NOW_ITEMS: NowItem[] = [
  {
    label: "Currently Building",
    value: "Placeholder project description — what you are actively working on right now.",
  },
  {
    label: "Currently Learning",
    value: "Placeholder topic — a technology, framework, concept, or skill you are studying.",
  },
  {
    label: "Currently Listening",
    value: "Placeholder artist or album — music, podcast, or anything audio you are enjoying.",
  },
];

function NowItem({ item }: { item: NowItem }) {
  return (
    <div
      data-testid={`now-item-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
      className="flex flex-col gap-1 py-4 border-b border-border last:border-b-0"
    >
      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {item.label}
      </span>
      <p className="text-sm text-foreground leading-relaxed">{item.value}</p>
    </div>
  );
}

export default function NowSection() {
  return (
    <section data-testid="section-now" className="py-8">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
        Now
      </h2>
      <div className="rounded-lg border border-border bg-card divide-y divide-border overflow-hidden">
        {NOW_ITEMS.map((item) => (
          <div key={item.label} className="px-4">
            <NowItem item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
