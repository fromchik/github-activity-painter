import type { Cell } from "@/lib/types";
import { useGridStore } from "./store/gridStore";
import { isFutureDate } from "@/lib/utils";
import { cellDarkThemePallete } from "../constants";

type CellProps = {
  cell: Cell;
};

const CellComponent = ({ cell }: CellProps) => {
  const setCellLevel = useGridStore((s) => s.setCellLevel);
  const isDrawing = useGridStore((s) => s.isDrawing);
  const setDrawing = useGridStore((s) => s.setDrawing);
  
  const isFuture = isFutureDate(cell.date);
  
  const paint = () => {
    if (isFuture) return;
    setCellLevel(cell.date); 
  };
  
  return (
    <button
      disabled={isFuture}
      className="w-4 h-4 rounded-[4px] m-[1.2px] hover:scale-110 transition-all duration-75"
      style={{
        backgroundColor: isFuture
          ? "#3f3f46"
          : cellDarkThemePallete[cell.level],
      }}
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
    />
  );
};

export default CellComponent;