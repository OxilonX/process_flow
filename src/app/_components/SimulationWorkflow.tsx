//next imports
import Image from "next/image";
//local comps imports
import SimpleStepper from "./SimpleStepper";
//shadcn comps imports
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const workflowSteps = [
  {
    title: "Input Configuration",
    description:
      "Define process burst times, arrival times, and select between Non-Preemptive (SJF) or Preemptive (SRT) scheduling modes.",
    url: "/images/data_inpt_ui.png",
  },
  {
    title: "Processing Method",
    description:
      "The engine dynamically calculates the shortest remaining time, determining the optimal execution order and switching context when necessary.",
    url: "/images/method_choice_ui.png",
  },
  {
    title: "Analysis and Simualtion",
    description:
      "Visualize the result via an interactive Gantt chart and review performance metrics like Turnaround Time and Waiting Time.",
    url: "/images/simulation_ui.png",
  },
];
export default function SimulationWorkflow() {
  return (
    <section id="guide-section" className="container px-6 min-h-screen mb-30">
      <div className="flex flex-col gap-4 my-10 mb-0 ">
        <div className="flex flex-col items-center gap-1">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            how it works
          </p>
          <h1 className="text-4xl font-light">Simulation Workflow Guide</h1>
        </div>

        <p className="text-center self-center text-sm text-muted-foreground max-w-xl">
          Bridge theory and practice: Analyze Shortest Job First and Shortest
          Remaining Time scheduling through interactive modeling and curated
          technical <br />
          walkthroughs
        </p>
      </div>
      <div className="py-2">
        <SimpleStepper />
      </div>
      <div className="flex items-center justify-between">
        {workflowSteps.map((step, index) => (
          <Card key={index} className="relative mx-auto w-full max-w-sm pt-0">
            <Image
              width={200}
              height={200}
              src={step.url}
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover brightness-100 hover:brightness-130 transition-all duration-300 "
              priority
            />
            <CardHeader>
              <CardTitle>{step.title}</CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
