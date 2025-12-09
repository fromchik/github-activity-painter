"use client";

import { useState } from "react";
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
      <div className="mt-20 max-w-7xl mx-auto">
        <h1 className="-5 text-4xl font-semibold">Draw your Art</h1>
        <p className="mt-1 dark:text-[#d4d4d4]">Paint your idea and let the script bring it to life</p>
      </div>
    </div>
  );
}
