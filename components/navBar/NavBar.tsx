"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { NAVIGATION } from "./NAVIGATION";
export const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl">
        <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Inborr</span>
              <Image
                alt="Your Company"
                className="h-8 w-auto transition duration-200 hover:scale-110"
                src="/logo.png"
                width={300}
                height={300}
                // TODO: Fix the size of an icons
                sizes=""
              />
            </Link>
            {/* Mobile menu button */}
            <button
              type="button"
              className="z-10 -m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative block w-fit text-lg font-semibold leading-6 text-gray-900 
                  after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0
                   after:bg-blue-300 after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-8 w-auto"
                src="/logo.png"
                alt=""
                width={100}
                height={100}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {NAVIGATION.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative -mx-3 block w-fit rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 
                    after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 
                    after:bg-black after:transition after:duration-300 after:content-[''] hover:bg-gray-50 
                    after:hover:scale-x-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
