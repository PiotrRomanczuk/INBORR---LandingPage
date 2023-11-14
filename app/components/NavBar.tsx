"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const NavBar = () => {
  const NavItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Apartamenty",
      href: "/apartamenty",
    },
    {
      name: "Kontakt",
      href: "/kontakt",
    },
    {
      name: "Rezerwacje",
      href: "/rezerwacje",
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-10 border-black bg-white py-4 text-black shadow-xl">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image alt="logo" src="/logo.png" width={120} height={60} />
        </Link>

        <div className="hidden gap-4 md:flex">
          {NavItems.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className="transtion transform duration-300 ease-in-out hover:border-b-2 hover:border-b-black hover:text-blue-200"
            >
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
          <div className="absolute right-6 top-16 flex flex-col gap-4 border bg-white px-6 py-4 shadow-md transition duration-300 ease-in-out md:hidden">
            {NavItems.map((item) => (
              <Link href={item.name} key={item.name}>
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
