"use client";

import type { Cell } from "@/lib/types";
import { useGridStore } from "../store/gridStore";
import { isFutureDate } from "@/lib/utils";
import { themes } from "../constants";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type CellProps = {
  cell: Cell;
};

const CellComponent = ({ cell }: CellProps) => {
  const setCellLevel = useGridStore((s) => s.setCellLevel);
  const isDrawing = useGridStore((s) => s.isDrawing);
  const setDrawing = useGridStore((s) => s.setDrawing);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isFuture = isFutureDate(cell.date);

  const paint = () => {
    if (isFuture) return;
    setCellLevel(cell.date);
  };

  const currentTheme = resolvedTheme === "light" ? themes.light : themes.dark;
  const backgroundColor = isFuture
    ? currentTheme.futureCell
    : currentTheme.cells[cell.level];

  if (!mounted) {
    return (
      <button
        className="w-4 h-4 rounded-[4px] m-[1.2px]"
        style={{ backgroundColor: "#3f3f46" }}
        disabled
      />
    );
  }

  return (
    <button
      disabled={isFuture}
      className="w-4 h-4 rounded-[4px] m-[1.2px] hover:scale-110 transition-all duration-75"
      style={{ backgroundColor }}
      onMouseDown={(e) => {
        if (isFuture) return;
        e.preventDefault();
        setDrawing(true);
        paint();
      }}
      onMouseEnter={() => {
        if (!isDrawing || isFuture) return;
        paint();
      }}
      aria-label={`Cell for ${cell.date}, level ${cell.level}`}
    />
  );
};

export default CellComponent;

