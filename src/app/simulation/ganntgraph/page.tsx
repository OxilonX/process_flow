import { ModeToggle } from "@/app/_components/ModeToggle";
//lucid icons
import { StepBack } from "lucide-react";
import { Button } from "@/components/ui/button";
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

          <h1 className="text-3xl uppercase font-bold">gannt graph</h1>
        </div>
        <ModeToggle />
      </div>
      <hr />
    </section>
  );
}
