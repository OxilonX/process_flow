import type { Processes, methodOptType } from "../(types)/simTypes";
import { useSimulation } from "@/contexts/SimulationContexts";
export default function GanntGraph() {
  const { processes, ganntGraphData } = useSimulation();
  return (
    <div
      style={{
        position: "relative",
        height: `${ganntGraphData.height}px`,
        width: "1000px",
        border: "1px solid black",
        margin: "auto",
        backgroundImage: `
          linear-gradient(to right, #e0e0e0 1px, transparent 1px),
          linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)
        `,
        backgroundSize: `${ganntGraphData.timeUnitWidth}px ${ganntGraphData.timeUnitWidth}px`,
      }}
    ></div>
  );
}
