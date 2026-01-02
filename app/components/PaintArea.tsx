"use client";

import { useEffect } from "react";
import Cell from "./Cell";
import { useGridStore } from "../store/gridStore";

const dayOfWeek = ["Sun", "Tue", "Thu", "Sat"];
const month = [
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
];

const PaintArea = () => {
  const cells = useGridStore((s) => s.cells);

  const setDrawing = useGridStore((s) => s.setDrawing);

  useEffect(() => {
    const stop = () => setDrawing(false);
    window.addEventListener("mouseup", stop);
    return () => window.removeEventListener("mouseup", stop);
  }, [setDrawing]);

  return (
    <div className=" w-[1035px] flex p-1 mt-2 rounded-md border-2 ">
      <div className="flex flex-col gap-4 my-[26px] mr-2">
        {dayOfWeek.map((day) => (
          <p className="pr-1 text-xs text-foreground/80" key={day}>
            {day}
          </p>
        ))}
      </div>
      <div>
        <div className="flex ml-3 gap-15">
          {month.map((month) => (
            <p className="text-xs text-foreground/80" key={month}>
              {month}
            </p>
          ))}
        </div>
        <div className="grid grid-flow-col auto-cols-max my-1 grid-rows-7">
          {cells.map((cell) => (
            <Cell key={cell.date} cell={cell} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaintArea;
