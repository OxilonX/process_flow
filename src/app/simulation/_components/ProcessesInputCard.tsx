"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
//raect imports
import { useState } from "react";
//contexts imports
import { useSimulation } from "@/contexts/SimulationContexts";
export function ProcessesInputCard() {
  const { processes, setProcesses } = useSimulation();
  const [input, setInput] = useState<{ arival: number; burst: number }>({
    arival: 0,
    burst: 0,
  });
  const handleAddProcesseClick = (e) => {
    e.preventDefault();
    if (input.burst === 0) return;
    const nextId =
      processes.length > 0 ? Math.max(...processes.map((p) => p.id)) + 1 : 1;
    const newProcess = { id: nextId, ...input };
    setProcesses((prev) => [...prev, newProcess]);
    setInput({ arival: 0, burst: 0 });
  };
  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label className="mb-2" htmlFor="arival">
                Arival time
              </Label>
              <Input
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                id="arival"
                type="number"
                placeholder="0"
                value={input.arival}
                onChange={(e) => {
                  const val = e.target.value;
                  setInput((prev) => ({
                    ...prev,
                    arival: val === "" ? 0 : Number(val),
                  }));
                }}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center ">
                <Label className="mb-2 " htmlFor="burst">
                  Burst time
                </Label>
              </div>
              <Input
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                id="burst"
                type="number"
                placeholder="0"
                value={input.burst}
                onChange={(e) => {
                  setInput((prev) => ({
                    ...prev,
                    burst: Number(e.target.value),
                  }));
                }}
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Button
          type="submit"
          className="w-full text-base uppercase font-medium py-6"
          onClick={(e) => {
            handleAddProcesseClick(e);
          }}
        >
          Add Process
        </Button>

        <Button
          variant="outline"
          className="w-full text-base uppercase font-medium py-6"
        >
          <Link href="/simulation/ganntgraph">start simulation</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
