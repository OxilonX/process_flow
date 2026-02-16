"use client";

import type {
  Task,
  Processes,
  methodOptType,
} from "@/app/simulation/(types)/simTypes";
import React, { createContext, useContext, useState } from "react";
import { shortestJobFirstLogic } from "@/app/simulation/(utils)/orderingMethodsLogic";

type SimulationContextType = {
  processes: Processes[];
  setProcesses: React.Dispatch<React.SetStateAction<Processes[]>>;
  uiTasks: Task[];
  setUiTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  ganntGraphData: {
    timeUnitWidth: number;
    height: number;
  };
  setGanntGraphData: React.Dispatch<
    React.SetStateAction<{
      timeUnitWidth: number;
      height: number;
    }>
  >;
  method: methodOptType;
  setMethod: React.Dispatch<React.SetStateAction<methodOptType>>;
};

const SimulationContext = createContext<SimulationContextType | undefined>(
  undefined,
);

export function SimulationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [method, setMethod] = useState<methodOptType>(
    "sjf" as unknown as methodOptType,
  );
  const [ganntGraphData, setGanntGraphData] = useState({
    timeUnitWidth: 40,
    height: 200,
  });
  const [processes, setProcesses] = useState<Processes[]>([
    { id: 1, arival: 0, burst: 5 },
    { id: 2, arival: 2, burst: 3 },
    { id: 3, arival: 4, burst: 8 },
    { id: 4, arival: 8, burst: 12 },
    { id: 5, arival: 12, burst: 4 },
  ]);
  const startingTask = shortestJobFirstLogic(processes);
  const [uiTasks, setUiTasks] = useState<Task[]>(startingTask);

  const value = {
    processes,
    setProcesses,
    uiTasks,
    setUiTasks,
    ganntGraphData,
    setGanntGraphData,
    method,
    setMethod,
  };
  return (
    <SimulationContext.Provider value={value}>
      {children}
    </SimulationContext.Provider>
  );
}

export function useSimulation() {
  const context = useContext(SimulationContext);
  if (!context)
    throw new Error("useSimulation must be used within a SimulationProvider");
  return context;
}
