"use client";
import { useSimulation } from "@/contexts/SimulationContexts";
import Bar from "./Bar";
import { useEffect, useState, useCallback } from "react";

export default function GanntGraph() {
  const { timeUnitWidth, processes, retryAnimTrigger, method } =
    useSimulation();
  const CONTAINER_WIDTH = 1050;

  const totalUnits = Math.floor(CONTAINER_WIDTH / timeUnitWidth);
  const finalWidth = totalUnits * timeUnitWidth;

  const [animatedWidth, setAnimatedWidth] = useState(0);
  const handleRetryAnimation = useCallback(() => {
    setAnimatedWidth(0);

    setTimeout(() => {
      setAnimatedWidth(finalWidth);
    }, 1000);
  }, [finalWidth]);

  useEffect(() => {
    handleRetryAnimation();
  }, [method]);
  useEffect(() => {
    handleRetryAnimation();
  }, [retryAnimTrigger]);
  useEffect(() => {
    setAnimatedWidth(0);
    const timer = setTimeout(() => {
      setAnimatedWidth(finalWidth);
    }, 50);
    return () => clearTimeout(timer);
  }, [finalWidth]);

  return (
    <div
      style={{
        position: "relative",
        margin: "auto",
        width: `${CONTAINER_WIDTH}px`,
      }}
    >
      <div
        style={{
          position: "relative",
          height: `${timeUnitWidth * processes.length}px`,
          width: `${animatedWidth}px`,
          overflow: "hidden",
          transition:
            animatedWidth === 0
              ? "width 0.1s linear"
              : "width 4s cubic-bezier(0.22, 1, 0.36, 1)",
          backgroundImage: `
            linear-gradient(to right, #e0e0e0 1px, transparent 1px),
            linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)
          `,
          backgroundSize: `${timeUnitWidth}px ${timeUnitWidth}px`,
          borderLeft: "2px solid #e0e0e0",
        }}
      >
        <div style={{ width: `${finalWidth}px`, height: "100%" }}>
          <Bar />
        </div>
      </div>

      <div style={{ position: "relative", width: "100%", height: "30px" }}>
        {Array.from({ length: totalUnits + 1 }).map((_, i) => {
          const position = i * timeUnitWidth;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${position}px`,
                transform: "translateX(-50%)",
                fontSize: "12px",
                top: "8px",
                opacity: animatedWidth >= position ? 1 : 0,
                transition: "opacity 0.3s ease-in",
                transitionDelay: `${(i / totalUnits) * 0.5}s`,
              }}
              className="text-muted-foreground font-mono"
            >
              {i}
            </div>
          );
        })}
      </div>
    </div>
  );
}
