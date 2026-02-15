"use client";

import React, { createContext, useContext, useState } from "react";

export type Process = {
  id: number;
  arival: number;
  burst: number;
};

type SimulationContextType = {
  processes: Process[];
  setProcesses: React.Dispatch<React.SetStateAction<Process[]>>;
};

const SimulationContext = createContext<SimulationContextType | undefined>(
  undefined,
);

export function SimulationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [processes, setProcesses] = useState<Process[]>([
    { id: 1, arival: 0, burst: 5 },
    { id: 2, arival: 2, burst: 3 },
    { id: 3, arival: 4, burst: 8 },
    { id: 4, arival: 8, burst: 12 },
    { id: 5, arival: 12, burst: 4 },
  ]);

  const value = { processes, setProcesses };
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
