"use client";
import { useSimulation } from "@/contexts/SimulationContexts";
import Bar from "./Bar";
export default function GanntGraph() {
  const { timeUnitWidth, processes } = useSimulation();
  const CONTAINER_WIDTH = 1050;

  const numberOfTimeUnits = Math.floor(CONTAINER_WIDTH / timeUnitWidth);
  return (
    <div
      style={{
        position: "relative",
        margin: "auto",
        width: `${CONTAINER_WIDTH}px`,
      }}
    >
      <div
        style={{
          borderRadius: "0",
          position: "relative",
          height: `${timeUnitWidth * processes.length}px`,
          width: `${CONTAINER_WIDTH}px`,
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
      <div style={{ position: "relative", width: "100%", height: "20px" }}>
        {Array.from({ length: numberOfTimeUnits + 1 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${i * timeUnitWidth}px`,
              transform: "translateX(-50%)",
              fontSize: "12px",
              top: "4px",
            }}
            className="text-foreground"
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}
