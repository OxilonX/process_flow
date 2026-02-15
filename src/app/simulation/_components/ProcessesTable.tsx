"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import type { Processes } from "../(types)/simTypes";
export function ProcessesTable() {
  const { processes, setProcesses } = useSimulation();
  const handleDeleteProcess = (id: number): Processes[] | undefined => {
    if (!id) return;
    setProcesses((prev) => {
      return prev.filter((process) => process.id != id);
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
            <TableCell>{process.arrival} ms</TableCell>
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
