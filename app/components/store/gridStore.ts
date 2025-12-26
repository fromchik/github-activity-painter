import { GridStore } from "@/lib/types";
import { initialCells, isFutureDate } from "@/lib/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useGridStore = create<GridStore>()(
  persist(
    (set) => ({
      year: new Date().getUTCFullYear(),
      cells: initialCells(new Date().getUTCFullYear()),
      currentLevel: 1,
      isDrawing: false,
      
      setDrawing: (v: boolean) => set({ isDrawing: v }),
      
      setCurrentLevel: (lvl) => set({ currentLevel: lvl }),
      
      setYear: (y) => set({ year: y, cells: initialCells(y) }),
      
      setCellLevel: (date, level) =>
        set((s) => {
          if (isFutureDate(date)) return s;
          return {
            cells: s.cells.map((c) =>
              c.date === date ? { ...c, level: level ?? s.currentLevel } : c
            ),
          };
        }),
      
      cycleCell: (date) =>
        set((s) => {
          if (isFutureDate(date)) return s;
          return {
            cells: s.cells.map((c) =>
              c.date === date ? { ...c, level: (c.level + 1) % 5 } : c
            ),
          };
        }),
      
      clear: () =>
        set((s) => ({
          cells: s.cells.map((c) =>
            isFutureDate(c.date) ? c : { ...c, level: 0 }
          ),
        })),
      
      importJson: (data) => {
        const filtered = data.map((c) =>
          isFutureDate(c.date) ? { ...c, level: 0 } : c
        );
        set({ cells: filtered });
      },
      
      paintCells: (dates) =>
        set((s) => {
          const valid = dates.filter((d) => !isFutureDate(d));
          return {
            cells: s.cells.map((c) =>
              valid.includes(c.date) ? { ...c, level: s.currentLevel } : c
            ),
          };
        }),
    }),
    { name: "github-activity-painter" }
  )
);