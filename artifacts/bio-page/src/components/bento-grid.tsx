import { type ReactNode } from "react";

export interface BentoCell {
  colSpan: number;
  rowSpan: number;
  key: string | number;
  children: ReactNode;
}

export interface BentoGridProps {
  columns: number;
  gap?: string;
  className?: string;
  cells: BentoCell[];
}

export default function BentoGrid({
  columns,
  gap = "0.75rem",
  className = "",
  cells,
}: BentoGridProps) {
  return (
    <div
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridAutoRows: "minmax(0, auto)",
        gap,
      }}
    >
      {cells.map((cell) => (
        <div
          key={cell.key}
          style={{
            gridColumn: `span ${cell.colSpan}`,
            gridRow: `span ${cell.rowSpan}`,
            minWidth: 0,
          }}
        >
          {cell.children}
        </div>
      ))}
    </div>
  );
}

export function useBentoCells<T extends { size?: { colSpan: number; rowSpan: number } }>(
  items: T[],
  render: (item: T, index: number) => ReactNode
): BentoCell[] {
  return items.map((item, index) => ({
    colSpan: item.size?.colSpan ?? 1,
    rowSpan: item.size?.rowSpan ?? 1,
    key: index,
    children: render(item, index),
  }));
}
