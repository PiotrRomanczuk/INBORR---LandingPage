import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Hero } from "./Hero";
import { Footer } from "./Footer";

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
    <>
      <div className="relative flex h-[100vh] flex-col justify-between">
        <nav className="sticky top-0 border-black bg-transparent py-4 text-black shadow-xl">
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
        <div className="top-0 h-[110vh] w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 lg:mx-auto">
          <main className="h-98 bg-gradient-radial">Hero Section</main>
        </div>

        <Footer />
      </div>
    </>
  );
}
