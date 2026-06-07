import { type ReactNode } from "react";

export interface BentoCellPosition {
  column: number;
  row: number;
}

export interface BentoCell {
  colSpan: number;
  rowSpan: number;
  key: string | number;
  position?: BentoCellPosition;
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
  const hasExplicitPositions = cells.some((c) => c.position);

  return (
    <div
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridAutoRows: "minmax(0, auto)",
        gridAutoFlow: hasExplicitPositions ? "dense" : "row",
        gap,
      }}
    >
      {cells.map((cell) => {
        const gridColumn = cell.position
          ? `${cell.position.column} / span ${cell.colSpan}`
          : `span ${cell.colSpan}`;
        const gridRow = cell.position
          ? `${cell.position.row} / span ${cell.rowSpan}`
          : `span ${cell.rowSpan}`;

        return (
          <div
            key={cell.key}
            style={{
              gridColumn,
              gridRow,
              minWidth: 0,
            }}
          >
            {cell.children}
          </div>
        );
      })}
    </div>
  );
}

export function useBentoCells<T extends {
  size?: { colSpan: number; rowSpan: number };
  position?: { column: number; row: number };
}>(
  items: T[],
  render: (item: T, index: number) => ReactNode
): BentoCell[] {
  return items.map((item, index) => ({
    colSpan: item.size?.colSpan ?? 1,
    rowSpan: item.size?.rowSpan ?? 1,
    position: item.position,
    key: index,
    children: render(item, index),
  }));
}
