"use client";

import { Button } from "@/app/components/ui/button";
import { Github, Moon, Notebook, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center justify-between my-4">
      <div className="flex items-center ml-3 gap-2">
        <Github width={32} height={32} className="dark:text-[#d4d4d4]" />
        <h1 className="text-2xl font-semibold sm:text-3xl dark:text-[#d4d4d4]">
          Github Activity Painter
        </h1>
      </div>
      <div className="flex mr-5 gap-2">
        <Button variant={"outline"}>
          <Notebook />
        </Button>
        <Button
          variant={"outline"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;