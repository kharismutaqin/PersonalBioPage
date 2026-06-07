interface LinkCard {
  id: number;
  label: string;
  url: string;
  description: string;
}

const PLACEHOLDER_LINKS: LinkCard[] = [
  { id: 1, label: "GitHub", url: "#", description: "My open source projects" },
  { id: 2, label: "Twitter / X", url: "#", description: "Thoughts and updates" },
  { id: 3, label: "LinkedIn", url: "#", description: "Professional profile" },
  { id: 4, label: "Blog", url: "#", description: "Long-form writing" },
  { id: 5, label: "Portfolio", url: "#", description: "Selected work" },
  { id: 6, label: "Email", url: "#", description: "Get in touch" },
];

function LinkCard({ card }: { card: LinkCard }) {
  return (
    <a
      data-testid={`link-card-${card.id}`}
      href={card.url}
      className="group block rounded-lg border border-border bg-card p-4 hover:border-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <p className="text-sm font-medium text-foreground mb-1">{card.label}</p>
      <p className="text-xs text-muted-foreground">{card.description}</p>
    </a>
  );
}

export default function LinksSection() {
  return (
    <section data-testid="section-links" className="py-8">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
        Links
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {PLACEHOLDER_LINKS.map((card) => (
          <LinkCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
