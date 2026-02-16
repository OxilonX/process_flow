"use client";
//shadcn imports
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useSimulation } from "@/contexts/SimulationContexts";
import { methodOptType } from "../(types)/simTypes";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export default function LogicRunnerInput() {
  const { method, setMethod, processes, setGanntGraphData, ganntGraphData } =
    useSimulation();
  const methods = ["sjf", "srtf", "fcfs"];
  const handleMethodClick = (method: string) => {
    setMethod(method as unknown as methodOptType);
  };
  return (
    <div>
      <div className="flex items-center justify-between gap-4 px-6 py-4">
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
            <div>
              <div className="mx-auto grid w-40 gap-3">
                <div className="flex items-center justify-between gap-2">
                  <Label htmlFor="slider-time-unit-width">
                    Time Unit Width
                  </Label>
                  <span className="text-muted-foreground text-sm">
                    {[ganntGraphData.timeUnitWidth].join(", ")}
                  </span>
                </div>
                <Slider
                  className="cursor-pointer"
                  id="slider-time-unit-width"
                  value={[ganntGraphData.timeUnitWidth]}
                  onValueChange={(vals) =>
                    setGanntGraphData((prev) => ({
                      ...prev,
                      timeUnitWidth: vals[0],
                    }))
                  }
                  min={20}
                  max={800}
                  step={20}
                />
              </div>
            </div>
            <div className="">
              <div className="mx-auto grid w-40 gap-3">
                <div className="flex items-center justify-between gap-2">
                  <Label htmlFor="slider-height">height</Label>
                  <span className="text-muted-foreground text-sm">
                    {[ganntGraphData.height].join(", ")}
                  </span>
                </div>
                <Slider
                  className="cursor-pointer"
                  id="slider-height"
                  value={[ganntGraphData.height]}
                  onValueChange={(vals) =>
                    setGanntGraphData((prev) => ({ ...prev, height: vals[0] }))
                  }
                  min={processes.length * 20}
                  max={800}
                  step={20}
                />
              </div>
            </div>
          </li>
        </ul>
        <Button className="px-6 uppercase font-bold" variant={"destructive"}>
          Retry
        </Button>
      </div>
    </div>
  );
}
