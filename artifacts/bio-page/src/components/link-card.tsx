import { type LinkItem } from "@/content/site-config";
import { IconSource } from "@/components/icon-source";

interface LinkCardProps {
  card: LinkItem;
  index: number;
}

export default function LinkCard({ card, index }: LinkCardProps) {
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
      className="group block p-4 hover:opacity-90 focus-visible:outline-none w-full h-full"
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
