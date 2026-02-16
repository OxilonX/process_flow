import { ModeToggle } from "@/app/_components/ModeToggle";
//lucid icons
import { StepBack } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
//local comps imports
import LogicRunnerInput from "../_components/LogicRunnerInput";
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

          <h1 className="text-3xl uppercase font-bold">The Logic Runner</h1>
        </div>
        <ModeToggle />
      </div>
      <hr />
      <div>
        <LogicRunnerInput />
        {/*color picker for single color for all processes */}
        {/*unit width input + height inpt (auto if > a processes.lenght idk how much*/}
      </div>
    </section>
  );
}
