"use client";

const stats = [
  { label: "Załozono", value: 2023 },
  { label: "Zadowolonych klientów", value: 50 },
  { label: "Z krajów", value: 12 },
  { label: "Średnia ocen", value: 4.7 },
];

import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

export const StatsAnimation = () => {
  return (
    <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
      {stats.map((stat, statIdx) => (
        <div key={statIdx}>
          <div className="align-center h-12 text-center font-semibold leading-6 text-gray-600">
            {stat.label}
          </div>
          <AnimatedNumbers
            className="align-center mt-2 border-2 text-center text-3xl font-bold leading-10 tracking-tight text-gray-900"
            transitions={(index) => ({
              type: "spring",
              duration: index,
            })}
            animateToNumber={stat.value}
            //   fontStyle={{
            //     fontSize: 40,
            //     color: "red",
            //   }}
          />
        </div>
      ))}
    </dl>
  );
};
