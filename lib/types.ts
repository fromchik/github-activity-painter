export interface Cell {
  date: string;
  level: number;
}

export interface UserData {
  githubToken: string;
  username: string;
  email: string;
}

export interface GridStore {
  year: number;
  cells: Cell[];
  currentLevel: number;
  isDrawing: boolean;
  setDrawing: (v: boolean) => void;
  setCurrentLevel: (lvl: number) => void;
  setYear: (y: number) => void;
  setCellLevel: (date: string, level?: number) => void; 
  cycleCell: (date: string) => void;
  clear: () => void;
  importJson: (data: Cell[]) => void;
  paintCells: (dates: string[]) => void;
}

export const GITHUB_PALETTE = [
  "#ebedf0",
  "#9be9a8",
  "#40c463",
  "#30a14e",
  "#216e39",
];
