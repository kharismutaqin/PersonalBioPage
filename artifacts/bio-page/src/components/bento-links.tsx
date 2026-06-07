import siteConfig from "@/content/site-config";
import BentoGrid, { useBentoCells } from "@/components/bento-grid";
import LinkCard from "@/components/link-card";

export default function BentoLinks() {
  const { links } = siteConfig;

  const cells = useBentoCells(links.items, (card, index) => (
    <LinkCard card={card} index={index} />
  ));

  return (
    <section data-testid="section-links" className="py-8">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
        {links.sectionTitle}
      </h2>
      {/* Mobile: simple vertical stack */}
      <div className="md:hidden flex flex-col gap-3">
        {links.items.map((card, index) => (
          <LinkCard key={index} card={card} index={index} />
        ))}
      </div>
      {/* Desktop: Bento Grid */}
      <div className="hidden md:block">
        <BentoGrid columns={links.gridColumns} gap="0.75rem" cells={cells} />
      </div>
    </section>
  );
}
