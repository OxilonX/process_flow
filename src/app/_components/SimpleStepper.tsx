import { cn } from "@/lib/utils";

export default function SimpleStepper() {
  const steps = [1, 2, 3];

  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-8">
      <div className="relative flex items-center justify-between">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-primary/30" />

        {steps.map((step) => (
          <div key={step} className="relative z-10 flex flex-col items-center">
            <div
              className={cn(
                "flex items-center justify-center size-14 rounded-full border-2 bg-background transition-all duration-500",
                "border-primary text-primary shadow-[0_0_20px_rgba(var(--primary),0.3)]",
              )}
            >
              <span className="text-lg font-bold">{step}</span>
            </div>

            <span
              className={cn(
                "absolute -bottom-7  text-[10px] uppercase tracking-[0.25em] font-bold whitespace-nowrap text-primary",
              )}
            >
              {step === 1
                ? "Configuration"
                : step === 2
                  ? "Processing"
                  : "Analysis"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
