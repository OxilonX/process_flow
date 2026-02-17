"use client";
import { useEffect } from "react";
//util funcs imports
import {
  shortestJobFirstLogic,
  shortestRemainingTimeFirstLogic,
  firstComeFirstServed,
} from "../(utils)/orderingMethodsLogic";
//context imports
import { useSimulation } from "@/contexts/SimulationContexts";
export default function Bar() {
  const { processes, method, setUiTasks, uiTasks, timeUnitWidth } =
    useSimulation();
  useEffect(() => {
    try {
      if ((method as unknown) === "sjf") {
        const newTasks = shortestJobFirstLogic(processes);
        setUiTasks(newTasks);
      } else if ((method as unknown) === "srtf") {
        const newTasks = shortestRemainingTimeFirstLogic(processes);
        setUiTasks(newTasks);
        console.log(uiTasks);
      } else if ((method as unknown) === "fcfs") {
        const newTasks = firstComeFirstServed(processes);
        setUiTasks(newTasks);
      }
    } catch (err) {
      console.error("Calculation failed:", err);
    }
  }, [processes, method]);

  {
    return (
      <div>
        {uiTasks.map((task) => {
          const processIndex = processes.findIndex((p) => p.id === task.id);
          const now = new Date();
          if (processIndex === -1) return null;

          const rowNumber = processIndex + 1;
          return (
            <div
              key={rowNumber}
              style={{
                position: "absolute",
                bottom: `${(rowNumber - 1) * timeUnitWidth}px`,
                left: `${task.start * timeUnitWidth}px`,
                width: `${task.duration * timeUnitWidth}px`,
                height: ` ${timeUnitWidth}px`,
                backgroundColor: task.color || "red",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              P {task.id}
            </div>
          );
        })}
      </div>
    );
  }
}
