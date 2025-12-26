"use client";

import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./components/ui/tooltip";
import { Input } from "./components/ui/input";
import { cellDarkThemePallete, inputFields } from "./constants";
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
import { Button } from "./components/ui/button";
import { useGridStore } from "./components/store/gridStore";
import { UserData } from "@/lib/types";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState<UserData>({
    githubToken: "",
    username: "",
    email: "",
  });

  const clearCells = useGridStore((s) => s.clear);
  const setCurrentLevel = useGridStore((s) => s.setCurrentLevel);
  const currentLevel = useGridStore((s) => s.currentLevel);
  const setYear = useGridStore((s) => s.setYear);
  const year = useGridStore((s) => s.year);
  const cells = useGridStore((s) => s.cells);

  const hasPaintedCells = useGridStore((s) => s.cells.some((c) => c.level > 0));

  const handleInputChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCommit = async () => {
    if (!formData.githubToken || !formData.username || !formData.email) {
      toast.warning("Please enter your details");
      console.log(formData);
      return;
    }

    const paintedCells = cells.filter(c => c.level > 0);
    
    console.log("Total cells:", cells.length);
    console.log("Painted cells:", paintedCells.length);
    console.log("Sample dates:", paintedCells.slice(0, 5).map(c => `${c.date}: level ${c.level}`));
    console.log("🎨 Levels distribution:", paintedCells.reduce((acc, c) => {
      acc[c.level] = (acc[c.level] || 0) + 1;
      return acc;
    }, {} as Record<number, number>));

    if (paintedCells.length === 0) {
      toast.error("No painted cells to commit!");
      return;
    }

    toast.info(`Sending ${paintedCells.length} cells to GitHub...`);

    try {
      const res = await fetch("/api/commit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          githubToken: formData.githubToken,
          username: formData.username,
          email: formData.email,
          cells: cells,
          year: year,
        }),
      });
      
      const data = await res.json();
      console.log("API Response:", data);
      
      if (res.ok) {
        toast.success(`Successfully committed! Created ${data.stats?.successful} commits`);
        setFormData((prev) => ({ ...prev, githubToken: "" }));
      } else {
        toast.error("Failed to commit: " + (data.error || res.statusText));
      }
    } catch(e) {
      toast.error("Failed to commit");
      console.error(e);
    }
  };

  const exportData = () => {
    const paintedCells = cells.filter(c => c.level > 0);
    const dataStr = JSON.stringify(paintedCells, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `github-activity-${year}.json`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Data exported!");
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
                value={formData[field.id as keyof UserData] ?? ""}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                className="w-full"
              />
            </div>
          );
        })}
      </div>
      <div className="px-5 mx-auto mt-20 max-w-[1080px]">
        <h1 className="text-4xl font-semibold">Draw your Art</h1>
        <p className="mt-1 dark:text-[#d4d4d4]">
          Paint your idea and let the script bring it to life
        </p>
        <div className="flex flex-col items-center mt-20">
          <Select onValueChange={(v) => setYear(Number(v))}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={year.toString()} />
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
        <div className="flex justify-between mt-2 mx-auto">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">Select intensity level:</p>
            <div className="flex gap-1">
              {cellDarkThemePallete.map((color, index) => (
                <button
                  key={color}
                  className={`w-7 h-7 rounded-sm border-2 hover:scale-110 transition-all ${
                    currentLevel === index 
                      ? 'ring-2 ring-blue-500 ring-offset-2' 
                      : ''
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setCurrentLevel(index)}
                >
                  <p className="text-xs font-bold">{index}</p>
                </button>
              ))}
            </div>
          </div>
          <Button variant={"destructive"} className="h-8" onClick={clearCells}>
            Clear
          </Button>
        </div>
        {hasPaintedCells && (
          <div className="mt-4 space-y-2">
            <div className="text-sm text-muted-foreground">
              📊 Painted cells: {cells.filter(c => c.level > 0).length} | 
              Total commits: {cells.filter(c => c.level > 0).reduce((sum, c) => sum + c.level, 0)}
            </div>
            <div className="flex gap-2 justify-center">
              <Button variant="outline" onClick={exportData}>
                Export JSON
              </Button>
              <Button className="px-5" onClick={handleCommit}>
                Commit to GitHub
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}