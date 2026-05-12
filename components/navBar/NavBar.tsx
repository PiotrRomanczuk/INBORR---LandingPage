"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Link, usePathname, useRouter, routing } from "@/i18n/routing";
import { NAVIGATION } from "./NAVIGATION";

function isActiveLink(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

const Logo = () => (
  <Image
    src="/logo.png"
    alt="Inborr"
    width={140}
    height={56}
    priority
    className="h-9 w-auto md:h-10"
  />
);

function LocaleSwitcher() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const otherLocale =
    routing.locales.find((l) => l !== locale) ?? routing.defaultLocale;

  return (
    <button
      onClick={() => {
        startTransition(() => {
          router.replace(pathname, { locale: otherLocale });
        });
      }}
      disabled={isPending}
      type="button"
      aria-label={t("switchLanguage")}
      className="flex items-center gap-1.5 text-[13px] font-medium text-skyline-ink/80 transition hover:text-skyline-ink"
    >
      {t("languageShort")} <span className="text-[10px]">▾</span>
    </button>
  );
}

export const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-skyline-line bg-skyline-bg/95 backdrop-blur supports-[backdrop-filter]:bg-skyline-bg/80">
      <div className="mx-auto max-w-screen-xl">
        <nav
          className="flex items-center justify-between px-6 py-4 lg:px-12 lg:py-5"
          aria-label="Global"
        >
          <div className="flex items-center gap-10">
            <Link href="/" className="-m-1 p-1">
              <span className="sr-only">Inborr</span>
              <Logo />
            </Link>
            <div className="hidden items-center gap-7 lg:flex">
              {NAVIGATION.map((item) => {
                const active = isActiveLink(pathname, item.href);
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="text-[13px] font-medium text-skyline-ink transition"
                    style={{
                      opacity: active ? 1 : 0.7,
                      borderBottom: active
                        ? "1.5px solid var(--skyline-blue)"
                        : "1.5px solid transparent",
                      paddingBottom: 2,
                    }}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <LocaleSwitcher />
            <Link
              href="/apartamenty"
              className="rounded-md bg-skyline-blue px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-skyline-blue-deep"
            >
              {t("checkAvailability")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="z-10 -m-2.5 min-h-[44px] min-w-[44px] rounded-md p-2.5 text-skyline-ink lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label={t("openMenu")}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </nav>
      </div>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-skyline-bg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-skyline-line">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1 p-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Inborr</span>
              <Logo />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-skyline-ink"
              onClick={() => setMobileMenuOpen(false)}
              aria-label={t("closeMenu")}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-1">
            {NAVIGATION.map((item) => {
              const active = isActiveLink(pathname, item.href);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-3 py-3 text-base font-medium ${
                    active
                      ? "bg-skyline-blue-soft text-skyline-blue"
                      : "text-skyline-ink hover:bg-skyline-blue-soft/60"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
            <div className="mt-4 px-3">
              <LocaleSwitcher />
            </div>
            <Link
              href="/apartamenty"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 rounded-md bg-skyline-blue px-5 py-3 text-center text-[14px] font-semibold text-white"
            >
              {t("checkAvailability")}
            </Link>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
