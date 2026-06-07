import siteConfig from "@/content/site-config";

interface NowItem {
  label: string;
  value: string;
}

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
  const { now } = siteConfig;

  const nowItems: NowItem[] = [
    { label: "Currently Building", value: now.currentlyBuilding },
    { label: "Currently Learning", value: now.currentlyLearning },
    { label: "Currently Listening", value: now.currentlyListening },
  ];

  return (
    <section data-testid="section-now" className="py-8">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
        {now.sectionTitle}
      </h2>
      <div
        className="border border-border bg-card divide-y divide-border overflow-hidden"
        style={{ borderRadius: "var(--theme-card-radius)" }}
      >
        {nowItems.map((item) => (
          <div key={item.label} className="px-4">
            <NowItem item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
