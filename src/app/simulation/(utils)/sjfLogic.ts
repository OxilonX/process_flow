import type { Task, Processes } from "../types/taskTypes";

export default function shortestJobFirstLogic(processes: Processes[]): Task[] {
  const readyQueue = [...processes].sort((a, b) => a.arrival - b.arrival);
  let timer = 0;
  const completedTasks: Task[] = [];
  let completedCount = 0;

  const finishedProcesses = new Array(processes.length).fill(false);

  while (completedCount < processes.length) {
    const availableProcesses = readyQueue.filter(
      (p) => p.arrival <= timer && !finishedProcesses[p.id],
    );

    if (availableProcesses.length === 0) {
      timer++;
      continue;
    }

    const nextProcess = availableProcesses.reduce((min, p) =>
      p.burst < min.burst ? p : min,
    );

    completedTasks.push({
      id: nextProcess.id,
      start: timer,
      duration: nextProcess.burst,
      row: nextProcess.id,
    });

    timer += nextProcess.burst;
    finishedProcesses[nextProcess.id] = true;
    completedCount++;
  }

  return completedTasks;
}
