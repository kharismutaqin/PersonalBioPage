import siteConfig from "@/content/site-config";
import { IconSource } from "@/components/icon-source";

function LinkCard({ card, index }: { card: typeof siteConfig.links.items[0]; index: number }) {
  const bg = card.backgroundColor ?? "var(--theme-bg)";
  const text = card.textColor ?? "var(--theme-fg)";
  const border = card.borderColor ?? "var(--theme-border)";
  const radius = card.radius ?? "var(--theme-card-radius)";

  const style: React.CSSProperties = {
    backgroundColor: bg,
    color: text,
    borderColor: border,
    borderRadius: radius,
    borderWidth: "1px",
    borderStyle: "solid",
  };

  return (
    <a
      data-testid={`link-card-${index + 1}`}
      href={card.url}
      className="group block p-4 hover:opacity-90 focus-visible:outline-none"
      style={style}
    >
      <div className="flex items-center gap-3 mb-1">
        <IconSource icon={card.icon} url={card.url} color={text} />
        <p className="text-sm font-medium">{card.title}</p>
      </div>
      <p className="text-xs opacity-60">{card.description}</p>
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
