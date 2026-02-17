"use client";
//shadcn imports
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useSimulation } from "@/contexts/SimulationContexts";
import { methodOptType, Processes } from "../(types)/simTypes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function LogicRunnerInput() {
  const {
    method,
    setMethod,
    processes,
    setTimeUnitWidth,
    timeUnitWidth,
    uiTasks,
    retryAnimTrigger,
    setRetryAnimTrigger,
  } = useSimulation();
  const handleMaxWidthChange = (tasks: Processes[]): number => {
    if (tasks.length === 0) return 1;
    const sortedTasks = [...tasks].sort((a, b) => a.arival - b.arival);
    const totalBurstTime = sortedTasks.reduce((acc, task) => {
      return acc + task.burst;
    }, 0);
    const totalIdleTime = sortedTasks.reduce((acc, currentTask, i, array) => {
      const nextTask = array[i + 1];
      if (!nextTask) return acc;
      const gap = nextTask.arival - (currentTask.arival + currentTask.burst);
      return acc + Math.max(0, gap);
    }, 0);
    return sortedTasks[0].arival + totalBurstTime + totalIdleTime;
  };
  const totalTime = handleMaxWidthChange(processes);
  const CURRENT_WIDTH = 1000;
  const [maxWidth, setMaxWidth] = useState(CURRENT_WIDTH / totalTime);

  const methods = ["sjf", "srtf", "fcfs"];

  const handleRetryClick = () => {
    setRetryAnimTrigger(true);
  };

  useEffect(() => {
    if (retryAnimTrigger) {
      const timer = setTimeout(() => {
        setRetryAnimTrigger(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [retryAnimTrigger]);
  const handleMethodClick = (method: string) => {
    setMethod(method as unknown as methodOptType);
  };
  useEffect(() => {
    const totalTime = handleMaxWidthChange(processes);
    setTimeUnitWidth(CURRENT_WIDTH / totalTime);
  }, [uiTasks.length, processes.length]);

  return (
    <div>
      <div className="flex items-center justify-between gap-4 py-4 pt-10 mb-8">
        <ul className="flex items-center gap-3">
          {methods.map((meth, index) => (
            <Button
              className="uppercase font-bold"
              variant={meth === (method as unknown) ? "secondary" : "default"}
              key={index}
              onClick={() => {
                handleMethodClick(meth);
              }}
            >
              {meth}
            </Button>
          ))}
          <li className="pl-4 flex gap-8 items-center">
            <div className="mx-auto grid w-40 gap-3">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="slider-time-unit-width">Time Unit Width</Label>
                <span className="text-muted-foreground text-sm">
                  {Math.trunc(timeUnitWidth)}
                </span>
              </div>
              <Slider
                className="cursor-pointer"
                id="slider-time-unit-width"
                value={[Math.trunc(timeUnitWidth)]}
                onValueChange={(vals) => setTimeUnitWidth(vals[0])}
                min={maxWidth / 5}
                max={maxWidth}
                step={maxWidth / 5}
              />
            </div>
          </li>
        </ul>
        <Button
          onClick={handleRetryClick}
          className="px-6 uppercase font-bold"
          variant={"destructive"}
        >
          Retry
        </Button>
      </div>
    </div>
  );
}
