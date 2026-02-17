import { Button } from "@/components/ui/button";
//local comps imports
import Link from "next/link";
export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center -mt-20"
      id="hero-section"
    >
      <div className="container px-6 flex flex-col items-center gap-8 text-center p-6">
        <div>
          <h1 className="text-5xl font-bold   mx-auto leading-15">
            Visualize Scheduling and Watch
            <br /> Algorithms in Real-Time
          </h1>
          <p className="text-muted-foreground mt-4 max-w-[55%] text-sm mx-auto">
            Visualize and simulate CPU scheduling algorithms like SJF and SRTF
            in real-time. Input process burst times and arrival times to see how
            the system handles them.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link href={"/simulation"}>
            <Button className="text-base px-6  font-sans">Try it out</Button>
          </Link>
          <Link
            href={
              "https://www.geeksforgeeks.org/operating-systems/cpu-scheduling-in-operating-systems/"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-base px-6" variant={"outline"}>
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
