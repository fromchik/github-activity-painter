

export type Cell = {
  date: string;
  level: number;
};

export type GridStore = {
  year: number;
  cells: Cell[];
  setYear: (y: number) => void;
  setCellLevel: (date: string, level: number) => void;
  cycleCell: (date: string) => void;
  clear: () => void;
  importJson: (data: Cell[]) => void;
  paintCells: (dates: string[], level: number) => void;
};

export const GITHUB_PALETTE = ["#ebedf0","#9be9a8","#40c463","#30a14e","#216e39"];
