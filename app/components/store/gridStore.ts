
import { GridStore } from "@/lib/types";
import { initialCells, isFutureDate } from "@/lib/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useGridStore = create<GridStore>()(
  persist(
    (set, get) => ({
      year: new Date().getUTCFullYear(),
      cells: initialCells(new Date().getUTCFullYear()),

      setYear: (y) => set({ year: y, cells: initialCells(y) }),

      setCellLevel: (date, level) => {
        if (isFutureDate(date)) return;
        set((s) => ({
          cells: s.cells.map((c) => (c.date === date ? { ...c, level } : c)),
        }));
      },
      cycleCell: (date) => {
        if (isFutureDate(date)) return;
        set((s) => ({
          cells: s.cells.map((c) =>
            c.date === date ? { ...c, level: (c.level + 1) % 5 } : c
          ),
        }));
      },

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

      paintCells: (dates, level) => {
        const filteredDates = dates.filter((d) => !isFutureDate(d));
        set((s) => ({
          cells: s.cells.map((c) =>
            filteredDates.includes(c.date) ? { ...c, level } : c
          ),
        }));
      },
    }),
    { name: "github-activity-painter" }
  )
);
