import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
//images imports
import logo from "../../../public/processflow_black_logo_no_bg.svg";
export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 flex justify-center py-6 px-4 w-[900px] mx-auto py-0">
      <nav
        className="w-full max-w-7xl flex justify-between items-center py-4  rounded-4xl 
                  bg-foreground/1 backdrop-blur-md 
                  border border-white/10 
                  shadow-xl shadow-black/50"
      >
        <Tabs defaultValue="home" className="w-full">
          <div className="flex items-center justify-center gap-24 w-full">
            <TabsList
              variant="line"
              className="flex  gap-24 items-center bg-transparent border-none"
            >
              <TabsTrigger
                value="home"
                className="data-[state=active]:bg-muted"
              >
                Home
              </TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2 px-4 select-none">
              <Image
                className="dark:invert"
                src={logo}
                alt="ProcessFlow Logo"
                width={38}
                height={38}
                priority
              />
            </div>

            <TabsList
              variant="line"
              className="flex  gap-24  items-center bg-transparent border-none"
            >
              <TabsTrigger value="guide">Guide</TabsTrigger>
              <TabsTrigger value="simulation">Simulation</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </nav>
    </header>
  );
}
