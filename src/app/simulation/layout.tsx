//local comps imports
import SimNavbar from "../_components/SimNavbar";
export default function SimulationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-8 w-full">
      <nav className="flex items-center justify-center">
        <SimNavbar />
      </nav>
      <div className="w-full">{children}</div>
    </div>
  );
}
