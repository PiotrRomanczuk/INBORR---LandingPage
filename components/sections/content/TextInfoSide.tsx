// "use client";
// import AnimatedNumbers from "react-animated-numbers";

const stats = [
  { label: "Założono", value: 2023 },
  { label: "Zadowolonych klientów", value: 50 },
  { label: "Z krajów", value: 12 },
  { label: "Średnia ocen", value: 4.7 },
];

import React from "react";
import { StatsAnimation } from "./StatsAnimation";

export const TextInfoSide = () => {
  return (
    <div className="px-6 lg:px-0">
      <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
        <p className="text-base text-lg font-semibold leading-7 text-blue-400">
          Wartości INBORR
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nasz sposób na stworzenie Twojego domu
        </h1>
        <div className="max-w-xl">
          <p className="mt-6">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit. Faucibus commodo massa rhoncus, volutpat.
            Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id.
          </p>
          {/* {/* <p className="mt-8">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
            odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
            diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
            hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem
            vel integer orci.
          </p> */}
          <p className="mt-8">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
            odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
            diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
            hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem
            vel integer orci.
          </p>
        </div>
      </div>
      {/* <StatsAnimation /> */}
      {/* ------------------------------------------------------------------------------------------ */}
      <dl className="mt-10 grid grid-cols-2 gap-12 border-t border-gray-900/10 pt-10 ">
        {stats.map((stat, statIdx) => (
          <div key={statIdx}>
            <dt className="text-lg font-semibold leading-6 text-gray-600">
              {stat.label}
            </dt>
            <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
      {/* ------------------------------------------------------------------------------------------ */}
      {/* <div className="mt-10 flex">
        <a
          href="#"
          className="text-base font-semibold leading-7 text-indigo-600"
        >
          Learn more about our company <span aria-hidden="true">&rarr;</span>
        </a>
      </div> */}
    </div>
  );
};
