//local comps imports
import { ProcessesTable } from "../_components/ProcessesTable";
import { ProcessesInputCard } from "../_components/ProcessesInputCard";
import { ModeToggle } from "@/app/_components/ModeToggle";
import { Button } from "@/components/ui/button";
import { StepBack } from "lucide-react";
//next imports
import Link from "next/link";
export default function page() {
  return (
    <section className=" max-w-[1000px] mx-auto  mb-12">
      <div className="flex items-center justify-between pt-4 pb-4">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Button className="rounded-full py-4 font-medium">
              <StepBack size={30} />
              Back
            </Button>
          </Link>
          <h1 className="text-3xl uppercase font-bold">Process Table</h1>
        </div>
        <ModeToggle />
      </div>
      <hr />
      <div className="grid grid-cols-2 items-start pt-6">
        <ProcessesInputCard />
        <ProcessesTable />
      </div>
    </section>
  );
}
