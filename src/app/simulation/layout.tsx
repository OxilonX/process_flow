//local comps imports
import SimNavbar from "../_components/SimNavbar";
//contexts imports
import { SimulationProvider } from "@/contexts/SimulationContexts";
export default function SimulationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-8 w-full">
      <SimulationProvider>
        <nav className="flex items-center justify-center">
          <SimNavbar />
        </nav>
        <div className="w-full">{children}</div>
      </SimulationProvider>
    </div>
  );
}
