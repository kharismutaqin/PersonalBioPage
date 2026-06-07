import { useSiteState } from "@/context/site-state";
import BentoGrid, { useBentoCells } from "@/components/bento-grid";
import LinkCard from "@/components/link-card";
import siteConfig from "@/content/site-config";

export default function BentoLinks() {
  const { links: editableLinks } = useSiteState();
  const links = editableLinks;
  const gridColumns = siteConfig.links.gridColumns;
  const sectionTitle = siteConfig.links.sectionTitle;

  const cells = useBentoCells(links, (card, index) => (
    <LinkCard card={card} index={index} />
  ));

  return (
    <section data-testid="section-links" className="py-8">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
        {sectionTitle}
      </h2>
      {/* Mobile: simple vertical stack */}
      <div className="md:hidden flex flex-col gap-3">
        {links.map((card, index) => (
          <LinkCard key={index} card={card} index={index} />
        ))}
      </div>
      {/* Desktop: Bento Grid */}
      <div className="hidden md:block">
        <BentoGrid columns={gridColumns} gap="0.75rem" cells={cells} />
      </div>
    </section>
  );
}
