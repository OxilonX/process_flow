import { Button } from "@/components/ui/button";
//sections imports
import Hero from "./_components/Hero";
import RessourcesTuto from "./_components/RessourcesTuto";
import SimulationWorkflow from "./_components/SimulationWorkflow";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <RessourcesTuto />
      <SimulationWorkflow />
    </main>
  );
}
