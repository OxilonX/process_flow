"use client";
//local comps imports
import { ModeToggle } from "./ModeToggle";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
//images imports
import logo from "../../../public/processflow_black_logo_no_bg.svg";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 flex justify-center py-6 px-4 w-[1000px] mx-auto">
      <nav className="w-full max-w-7xl flex justify-between items-center py-4 rounded-4xl px-4 dark:bg-foreground/5 bg-card-foreground/5 backdrop-blur-md border border-white/10 shadow-xl shadow-black/50">
        <Tabs defaultValue="home" className="w-full">
          <div className="flex items-center justify-center gap-24 w-full">
            <TabsList
              variant="line"
              className="flex gap-24 items-center bg-transparent border-none"
            >
              <TabsTrigger
                value="home"
                onClick={() => scrollToSection("hero-section")}
              >
                Home
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                onClick={() => scrollToSection("resources-section")}
              >
                Resources
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2 px-4 select-none shrink-0">
              <Image
                className="dark:invert"
                src={logo}
                alt="Logo"
                width={38}
                height={38}
                priority
              />
            </div>

            <TabsList
              variant="line"
              className="flex gap-24 items-center bg-transparent border-none"
            >
              <TabsTrigger
                value="guide"
                onClick={() => scrollToSection("guide-section")}
              >
                Guide
              </TabsTrigger>
              <TabsTrigger
                value="simulation"
                onClick={() => scrollToSection("simulator-app")}
              >
                Simulation
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
        <div className="ml-4">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
