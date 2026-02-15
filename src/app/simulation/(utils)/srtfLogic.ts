import type { Processes } from "../(types)/simTypes";

export default function shortestRemainingTimeFirstLogic(
  processes: Processes[],
) {
  const workingProcesses = processes.map((p) => ({ ...p, remaining: p.burst }));
  let timer = 0;
  const completedTasks = [];
  let completedCount = 0;

  let lastTaskId: number | null = null;
  let currentStart = 0;

  const finishedProcesses = new Array(processes.length).fill(false);

  while (completedCount < processes.length) {
    const availableProcesses = workingProcesses.filter(
      (p) => p.arrival <= timer && !finishedProcesses[p.id],
    );

    if (availableProcesses.length === 0) {
      if (lastTaskId !== null) {
        completedTasks.push({
          id: lastTaskId,
          start: currentStart,
          duration: timer - currentStart,
          row: lastTaskId,
        });
        lastTaskId = null;
      }
      timer++;
      continue;
    }

    const nextProcess = availableProcesses.reduce((min, p) =>
      p.remaining < min.remaining ? p : min,
    );
    if (lastTaskId !== nextProcess.id) {
      if (lastTaskId !== null) {
        completedTasks.push({
          id: lastTaskId,
          start: currentStart,
          duration: timer - currentStart,
          row: lastTaskId,
        });
      }
      lastTaskId = nextProcess.id;
      currentStart = timer;
    }

    nextProcess.remaining--;
    timer++;

    if (nextProcess.remaining === 0) {
      finishedProcesses[nextProcess.id] = true;
      completedCount++;

      completedTasks.push({
        id: nextProcess.id,
        start: currentStart,
        duration: timer - currentStart,
        row: nextProcess.id,
      });
      lastTaskId = null;
    }
  }

  return completedTasks;
}
