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
  timeUnitWidth: number;
  setTimeUnitWidth: React.Dispatch<React.SetStateAction<number>>;
  retryAnimTrigger: boolean;
  setRetryAnimTrigger: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [processes, setProcesses] = useState<Processes[]>([
    { id: 1, arival: 0, burst: 8 },
    { id: 2, arival: 1, burst: 4 },
    { id: 3, arival: 2, burst: 9 },
    { id: 4, arival: 3, burst: 5 },
  ]);
  const [retryAnimTrigger, setRetryAnimTrigger] = useState(false);
  const startingTask = shortestJobFirstLogic(processes);
  const [timeUnitWidth, setTimeUnitWidth] = useState<number>(20);
  const [uiTasks, setUiTasks] = useState<Task[]>(startingTask);

  const value = {
    processes,
    setProcesses,
    uiTasks,
    setUiTasks,
    timeUnitWidth,
    setTimeUnitWidth,
    method,
    setMethod,
    retryAnimTrigger,
    setRetryAnimTrigger,
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
