"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./components/ui/tooltip";
import { Input } from "./components/ui/input";
import { inputFields } from "./constants";

export default function Home() {
  const [year, setYear] = useState("");
  const [formData, setFormData] = useState({
    "github-token": "",
    username: "",
    email: "",
  });

  const handleInputChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold">Enter your details</h2>
      <p className="mt-1 dark:text-[#d4d4d4]">
        All data will be stored locally and no one but you will be able to
        access it.
      </p>

      <div className="flex sm:flex-row flex-col gap-5 justify-center mx-auto mt-8 max-w-4xl">
        {inputFields.map((field) => {
          const IconComponent = field.icon;
          return (
            <div key={field.id} className="flex-1">
              <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-flex items-center gap-1 cursor-help">
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
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Select year</h2>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-[280px]">
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
        </div>
      </div>
    </div>
  );
}
