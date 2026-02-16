"use client";
//shadcn imports
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useSimulation } from "@/contexts/SimulationContexts";
import { methodOptType } from "../(types)/simTypes";
import { Button } from "@/components/ui/button";

export default function LogicRunnerInput() {
  const { method, setMethod, processes, setTimeUnitWidth, timeUnitWidth } =
    useSimulation();

  const totalTime =
    processes.reduce(
      (acc, task) => Math.max(acc, task.arival + task.burst),
      0,
    ) || 1;
  const maxWidth = totalTime / timeUnitWidth;
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
            <div className="mx-auto grid w-40 gap-3">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="slider-time-unit-width">Time Unit Width</Label>
                <span className="text-muted-foreground text-sm">
                  {[timeUnitWidth].join(", ")}
                </span>
              </div>
              <Slider
                className="cursor-pointer"
                id="slider-time-unit-width"
                value={[timeUnitWidth]}
                onValueChange={(vals) => setTimeUnitWidth(vals[0])}
                min={20}
                max={maxWidth}
                step={timeUnitWidth}
              />
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
