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
    <div className="flex justify-between items-center my-4">
      <div className="flex gap-2 items-center ml-3">
        <Github width={32} height={32} className="dark:text-[#d4d4d4]" />
        <h1 className="text-2xl font-semibold sm:text-3xl dark:text-[#d4d4d4]">
          Github Activity Painter
        </h1>
      </div>
      <div className="flex gap-2 mr-5">
        <Button variant={"outline"}>
          <Notebook />
        </Button>
        <Button
          variant={"outline"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <>
              <Sun className="w-5 h-5 transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute w-5 h-5 transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;