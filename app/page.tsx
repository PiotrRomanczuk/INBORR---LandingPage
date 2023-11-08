import Image from "next/image";

import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex h-[100vh] flex-col justify-between">
        <Hero />
        {/* <div className=" mt-0 min-h-[80vh] w-full bg-neutral-500 pt-4 lg:mx-auto">
          <main className="h-98 bg-gradient-radial">Children</main>
        </div>
        <div className=" mt-0 min-h-[80vh] w-full bg-neutral-500 pt-4 lg:mx-auto">
          <main className="h-98 bg-gradient-radial">Children</main>
        </div> */}
      </div>
    </>
  );
}
