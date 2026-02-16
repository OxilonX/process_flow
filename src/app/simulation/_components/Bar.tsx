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
          return (
            <div
              key={task.id}
              style={{
                position: "absolute",
                bottom: `${(task.row - 1) * timeUnitWidth}px`,
                left: `${task.start * timeUnitWidth}px`,
                width: `${task.duration * timeUnitWidth}px`,
                height: ` ${timeUnitWidth}px`,
                backgroundColor: task.color || "red",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                fontWeight: "bold",
                border: "1px solid #22a040",
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
