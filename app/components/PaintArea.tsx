import React from "react";
import Cell from "./Cell";

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
  return (

      <div className=" w-[1035] flex p-1 mt-2 rounded-md border-2 ">
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
            {[...Array(365)].map((_, index) => (
              <Cell key={index} />
            ))}
          </div>
        </div>
      </div>
  );
};

export default PaintArea;
