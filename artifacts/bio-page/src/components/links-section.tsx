import siteConfig from "@/content/site-config";

function LinkCard({ card, index }: { card: typeof siteConfig.links.items[0]; index: number }) {
  return (
    <a
      data-testid={`link-card-${index + 1}`}
      href={card.url}
      className="group block border border-border bg-card p-4 hover:border-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      style={{ borderRadius: "var(--theme-card-radius)", "--tw-ring-color": "var(--theme-primary)" } as React.CSSProperties}
    >
      <p className="text-sm font-medium text-foreground mb-1">{card.title}</p>
      <p className="text-xs text-muted-foreground">{card.description}</p>
    </a>
  );
}

export default function LinksSection() {
  const { links } = siteConfig;

  return (
    <section data-testid="section-links" className="py-8">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
        {links.sectionTitle}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {links.items.map((card, index) => (
          <LinkCard key={index} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
