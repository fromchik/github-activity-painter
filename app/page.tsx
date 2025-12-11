"use client";

import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./components/ui/tooltip";
import { Input } from "./components/ui/input";
import { inputFields } from "./constants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import PaintArea from "./components/PaintArea";

export default function Home() {
  const [year, setYear] = useState();
  const [formData, setFormData] = useState({
    "github-token": "",
    username: "",
    email: "",
  });

  const handleInputChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="mt-10 text-center">
      <h2 className="text-3xl font-bold">Enter your details</h2>
      <p className="mt-1 dark:text-[#d4d4d4]">
        All data will be stored locally and no one but you will be able to
        access it.
      </p>

      <div className="flex flex-col gap-5 justify-center px-4 mx-auto mt-8 max-w-4xl sm:flex-row">
        {inputFields.map((field) => {
          const IconComponent = field.icon;
          return (
            <div key={field.id} className="flex-1">
              <div className="flex gap-2 items-center mb-2 text-sm font-semibold">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-flex gap-1 items-center cursor-help">
                      <IconComponent className="w-4 h-4" />
                      {field.label}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[200px]">
                    <p>{field.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.id as keyof typeof formData]}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                className="w-full"
              />
            </div>
          );
        })}
      </div>
      <div className="px-5 mx-auto mt-20 max-w-7xl">
        <h1 className="text-4xl font-semibold -5">Draw your Art</h1>
        <p className="mt-1 dark:text-[#d4d4d4]">
          Paint your idea and let the script bring it to life
        </p>
        <div className="flex flex-col items-center mt-20">
          <Select>
            <SelectTrigger className="w-full max-w-[1035px]">
              <SelectValue placeholder="select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Year</SelectLabel>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex justify-center w-full">
            <div className="overflow-x-auto">
              <div className="mx-auto min-w-max">
                <PaintArea />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
