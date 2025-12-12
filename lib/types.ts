export type Cell = {
  date: string;
  level: number;
};

export type GridStore = {
  year: number;                   
  cells: Cell[];                  
  currentLevel: number;           
  setCurrentLevel: (lvl: number) => void;

  isDrawing: boolean;            
  setDrawing: (v: boolean) => void;

  setYear: (y: number) => void;
  setCellLevel: (date: string, level: number) => void;
  cycleCell: (date: string) => void;
  clear: () => void;
  importJson: (data: Cell[]) => void;
  paintCells: (dates: string[]) => void;
};


export const GITHUB_PALETTE = [
  "#ebedf0",
  "#9be9a8",
  "#40c463",
  "#30a14e",
  "#216e39",
];
