"use client";

import React, { useMemo } from "react";
import { useSimulation } from "@/contexts/SimulationContexts";

export const ResultTable = () => {
  const { processes, uiTasks } = useSimulation();

  const calculatedMetrics = useMemo(() => {
    return processes.map((p) => {
      const task = uiTasks.find((t) => t.id === p.id);
      if (!task) return null;

      const completion = task.start + task.duration;
      const turnaround = completion - p.arival;
      const waiting = turnaround - p.burst;
      const efficiency = turnaround / p.burst;

      return {
        ...p,
        completion,
        turnaround,
        waiting,
        efficiency,
      };
    }).filter(Boolean);
  }, [processes, uiTasks]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">Processus</th>
            <th className="p-2">Date d&apos;arriv&eacute;e</th>
            <th className="p-2">Temps de service</th>
            <th className="p-2">Date de sortie</th>
            <th className="p-2">Temps de rotation</th>
            <th className="p-2">Temps d&apos;attente</th>
            <th className="p-2">Rendement</th>
          </tr>
        </thead>
        <tbody>
          {calculatedMetrics.map((p) => {
            if (!p) return null;
            return (
              <tr key={p.id} className="border-b">
                <td className="p-2">P{p.id}</td>
                <td className="p-2">{p.arival}</td>
                <td className="p-2">{p.burst}</td>
                <td className="p-2">{p.completion}</td>
                <td className="p-2">{p.turnaround}</td>
                <td className="p-2">{p.waiting}</td>
                <td className="p-2">
                  {p.efficiency.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
