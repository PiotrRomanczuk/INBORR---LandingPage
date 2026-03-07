"use client";

import { TypeAnimation } from "react-type-animation";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const TextAnimation = () => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="h-20 sm:h-32">
        <span className="min-h-[3.5rem] text-3xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-5xl">
          Miło Cię widzieć
        </span>
      </div>
    );
  }

  return (
    <div className="h-20 sm:h-32">
      <TypeAnimation
        sequence={[
          "Miło Cię widzieć",
          1000,
          `U nas poczujesz się jak w domu`,
          1000,
          "Twoje miejsce w Warszawie",
          1000,
        ]}
        speed={30}
        className="min-h-[3.5rem] text-3xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-5xl"
        repeat={Infinity}
        preRenderFirstString
      />
    </div>
  );
};
