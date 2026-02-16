import type { Processes, Task } from "../(types)/simTypes";
export function firstComeFirstServed(processes: Processes[]): Task[] {
  let timer = 0;
  const finalProcesses: Task[] = [];
  const sorted = [...processes].sort((a, b) => a.arival - b.arival);
  for (let i = 0; i < sorted.length; i++) {
    const current = sorted[i];
    const outputProcess: Task = {
      id: current.id,
      start: timer,
      duration: current.burst,
      row: i + 1,
    };
    timer = timer + current.burst;
    finalProcesses.push(outputProcess);
  }
  return finalProcesses;
}

export function shortestJobFirstLogic(processes: Processes[]) {
  const sorted = [...processes].sort((a, b) => a.arival - b.arival);
  let timer = 0;
  const outputProcess = [];
  let lastCount = 0;

  const finishedProcesses = new Array(processes.length).fill(false);

  while (lastCount < processes.length) {
    const availableProcesses = sorted.filter(
      (p) => p.arival <= timer && !finishedProcesses[p.id],
    );

    if (availableProcesses.length === 0) {
      timer++;
      continue;
    }

    const nextProcess = availableProcesses.reduce((min, p) =>
      p.burst < min.burst ? p : min,
    );

    outputProcess.push({
      id: nextProcess.id,
      start: timer,
      duration: nextProcess.burst,
      row: nextProcess.id,
    });

    timer += nextProcess.burst;
    finishedProcesses[nextProcess.id] = true;
    lastCount++;
  }

  return outputProcess;
}

export function shortestRemainingTimeFirstLogic(processes: Processes[]) {
  const workingProcesses = processes.map((p) => ({ ...p, remaining: p.burst }));
  let timer = 0;
  const outputProcess = [];
  let lastCount = 0;

  let lastTaskId: number | null = null;
  let currentStart = 0;

  const finishedProcesses = new Array(processes.length).fill(false);

  while (lastCount < processes.length) {
    const availableProcesses = workingProcesses.filter(
      (p) => p.arival <= timer && !finishedProcesses[p.id],
    );

    if (availableProcesses.length === 0) {
      if (lastTaskId !== null) {
        outputProcess.push({
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
        outputProcess.push({
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
      lastCount++;

      outputProcess.push({
        id: nextProcess.id,
        start: currentStart,
        duration: timer - currentStart,
        row: nextProcess.id,
      });
      lastTaskId = null;
    }
  }

  return outputProcess;
}
