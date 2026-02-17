import { redirect } from "next/navigation";
export default function page() {
  redirect("/simulation/processes");

  return <div className="min-h-screen">simulation page</div>;
}
