"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { NAVIGATION } from "./NAVIGATION";

function isActiveLink(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background shadow-sm">
      <div className="mx-auto max-w-7xl">
        <div className="px-6 pt-6 pb-4 lg:max-w-2xl lg:pl-8 lg:pr-0">
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Inborr</span>
              <Image
                alt="Inborr"
                className="h-12 w-auto transition duration-200 hover:scale-110"
                src="/logo.png"
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </Link>
            {/* Mobile menu button */}
            <button
              type="button"
              className="z-10 -m-2.5 rounded-md p-2.5 text-foreground lg:hidden"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
              {NAVIGATION.map((item) => {
                const isActive = isActiveLink(pathname, item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative block w-fit py-2 px-3 text-lg font-semibold leading-6 text-foreground
                    after:absolute after:block after:h-[3px] after:w-full after:origin-left
                    after:bg-primary after:transition after:duration-300 after:content-['']
                    ${isActive ? "after:scale-x-100 font-bold" : "after:scale-x-0 after:hover:scale-x-100"}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
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
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Inborr</span>
              <Image
                alt="Inborr"
                className="h-12 w-auto transition duration-200 hover:scale-110"
                src="/logo.png"
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                {NAVIGATION.map((item) => {
                  const isActive = isActiveLink(pathname, item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative -mx-3 block w-fit rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-foreground
                      after:absolute after:block after:h-[3px] after:w-full after:origin-left
                      after:bg-foreground after:transition after:duration-300 after:content-[''] hover:bg-muted
                      ${isActive ? "after:scale-x-100 font-bold bg-muted" : "after:scale-x-0 after:hover:scale-x-100"}`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
