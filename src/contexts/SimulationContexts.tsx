"use client";

import React, { createContext, useContext, useState } from "react";

export type Process = {
  id: number;
  arrival: number;
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
    { id: 1, arrival: 0, burst: 5 },
    { id: 2, arrival: 2, burst: 3 },
    { id: 3, arrival: 4, burst: 8 },
    { id: 4, arrival: 8, burst: 12 },
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
