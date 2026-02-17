"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
//contexts imports
import { useSimulation } from "@/contexts/SimulationContexts";
//types imports
import type { Processes, Task } from "../(types)/simTypes";
export function ProcessesTable() {
  const { processes, setProcesses, uiTasks, setUiTasks } = useSimulation();
  const handleDeleteProcess = (id: number) => {
    const taskToDelete = uiTasks.find((t) => t.id === id);
    if (!taskToDelete) return;

    const deletedRow = taskToDelete.row;

    setProcesses((prev) => prev.filter((p) => p.id !== id));

    setUiTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };
  return (
    <Table className="">
      <TableHeader>
        <TableRow className="flex items-center justify-between ">
          <TableHead className="pt-2">ID</TableHead>
          <TableHead className="pt-2">Arival Time</TableHead>
          <TableHead className="pt-2">Burst Time</TableHead>
          <TableHead className="pr-6 pt-2">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {processes.map((process, index) => (
          <TableRow key={index} className="flex items-center justify-between">
            <TableCell className="font-medium">{process.id}</TableCell>
            <TableCell>{process.arival} ms</TableCell>
            <TableCell>{process.burst} ms</TableCell>
            <TableCell className="group cursor-pointer py-3">
              <Button
                variant="outline"
                className="w-full h-full   transition-colors 
               [&&:hover]:bg-destructive [&&:hover]:text-destructive-foreground
               "
                onClick={() => handleDeleteProcess(process.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
