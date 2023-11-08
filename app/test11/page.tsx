"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";

export default function Home() {
  const NavItems = [
    { name: "Home" },
    { name: "Apartamenty" },
    { name: "Kontakt" },
    { name: "Rezerwacje" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <nav className=" sticky left-0 right-0 top-0 bg-gray-200 py-4 shadow-md ">
        <div className="container mx-auto flex items-center justify-between">
          <Image alt="logo" src="/logo.png" width={100} height={60} />

          <div className="hidden gap-4 md:flex">
            {NavItems.map((item) => (
              <Link href={item.name} key={item.name}>
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-xl" onClick={toggleMobileMenu}>
              ☰
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="absolute right-6 top-16 flex flex-col gap-4 border bg-white px-6 py-4 shadow-md md:hidden">
              {NavItems.map((item) => (
                <Link href={item.name} key={item.name}>
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
      <div className="flex h-screen flex-col justify-between">
        <div className="top-0 h-[110vh] w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 lg:mx-auto">
          <main className="h-98 bg-gradient-radial">Hero Section</main>
        </div>

        <Footer />
      </div>
    </div>
  );
}
