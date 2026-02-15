"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SimNavbar() {
  const pathname = usePathname();

  const getActiveTab = () => {
    if (pathname.includes("/ganntgraph")) return "ganntgraph";
    return "processes";
  };
  return (
    <div>
      <Tabs value={getActiveTab()} className="w-full flex justify-center">
        <TabsList
          variant="line"
          className="flex gap-12 items-center bg-transparent border-none"
        >
          <TabsTrigger value="processes" asChild>
            <Link href="/simulation/processes">Processes</Link>
          </TabsTrigger>

          <TabsTrigger value="ganntgraph" asChild>
            <Link href="/simulation/ganntgraph">Gantt Graph</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
