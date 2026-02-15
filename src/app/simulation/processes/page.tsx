import type { Processes } from "../(types)/simTypes";
//local comps imports
import { ProcessesTable } from "../_components/ProcessesTable";
import { ProcessesInputCard } from "../_components/ProcessesInputCard";
export default function page() {
  return (
    <section className="min-h-screen  max-w-[1000px] mx-auto mt-8">
      <div className="grid grid-cols-2 items-start">
        <ProcessesInputCard />
        <ProcessesTable />
      </div>
    </section>
  );
}
