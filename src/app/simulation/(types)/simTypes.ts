export interface Task {
  id: number;
  start: number;
  duration: number;
  row: number;
  color?: string;
}
export interface Processes {
  id: number;
  arrival: number;
  burst: number;
}
export interface methodOptType {
  method: string;
  setMethod: React.Dispatch<React.SetStateAction<string>>;
}
