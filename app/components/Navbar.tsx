"use client";

import { Button } from "@/components/ui/button";
import { Github, MonitorCog, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-between my-4 ">
      <div className="flex items-center ml-3 gap-2">
        <Github width={32} height={32} className="dark:text-[#d4d4d4]"></Github>
        <h1 className="text-2xl font-semibold sm:text-3xl dark:text-[#d4d4d4]">
          Github Activity Painter
        </h1>
      </div>
      <div className="flex mr-5 gap-2">
        <Button variant={"outline"}>
          <MonitorCog></MonitorCog>
        </Button>
        <Button
          variant={"outline"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
