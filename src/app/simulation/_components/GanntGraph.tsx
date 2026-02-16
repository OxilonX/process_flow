"use client";
import { useSimulation } from "@/contexts/SimulationContexts";
import Bar from "./Bar";
export default function GanntGraph() {
  const { timeUnitWidth, processes } = useSimulation();
  return (
    <div
      style={{
        position: "relative",
        height: `${timeUnitWidth * processes.length}px`,
        width: "1000px",
        border: "1px solid black",
        margin: "auto",
        backgroundImage: `
          linear-gradient(to right, #e0e0e0 1px, transparent 1px),
          linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)
        `,
        backgroundSize: `${timeUnitWidth}px ${timeUnitWidth}px`,
      }}
    >
      <Bar />
    </div>
  );
}
