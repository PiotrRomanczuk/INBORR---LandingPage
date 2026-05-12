"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

interface ReserveDialogProps {
  className: string;
  bookingLink: URL;
  airbnbLink: URL;
  bookableLink?: URL;
  label?: string;
}

type Option = {
  href: string;
  name: string;
  tagline: string;
  badge?: string;
  variant: "primary" | "secondary";
  initial: string;
};

export function ReserveDialog({
  className,
  bookingLink,
  airbnbLink,
  bookableLink,
  label,
}: ReserveDialogProps) {
  const t = useTranslations("reserveDialog");

  const options: Option[] = [
    {
      href: bookableLink?.toString() ?? "https://rezerwacje.inborr.pl",
      name: t("bookable"),
      tagline: t("bookableTagline"),
      badge: t("recommended"),
      variant: "primary",
      initial: "B",
    },
    {
      href: airbnbLink.toString(),
      name: t("airbnb"),
      tagline: t("airbnbTagline"),
      variant: "secondary",
      initial: "A",
    },
    {
      href: bookingLink.toString(),
      name: t("booking"),
      tagline: t("bookingTagline"),
      variant: "secondary",
      initial: "B",
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={className}>
          {label ?? t("trigger")}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] gap-0 border-skyline-line bg-skyline-paper p-0 sm:max-w-[440px] sm:rounded-2xl">
        <DialogHeader className="space-y-2 border-b border-skyline-line px-6 pb-5 pt-6 text-left">
          <div className="skyline-eyebrow text-skyline-gold">{t("eyebrow")}</div>
          <DialogTitle
            className="font-display text-[24px] font-semibold leading-tight tracking-tight text-skyline-ink"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t("title")}
          </DialogTitle>
          <p className="text-[13px] text-skyline-muted">{t("subtitle")}</p>
        </DialogHeader>

        <div className="space-y-2.5 px-6 py-5">
          {options.map((option) => {
            const isPrimary = option.variant === "primary";
            return (
              <Link
                key={option.name}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 rounded-xl border p-4 transition ${
                  isPrimary
                    ? "border-skyline-blue bg-skyline-blue text-white hover:bg-skyline-blue-deep"
                    : "border-skyline-line bg-skyline-paper text-skyline-ink hover:border-skyline-blue/40 hover:bg-skyline-blue-soft/40"
                }`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-display text-[18px] font-bold ${
                    isPrimary
                      ? "bg-white/15 text-white"
                      : "bg-skyline-blue-soft text-skyline-blue"
                  }`}
                  aria-hidden
                >
                  {option.initial}
                </span>
                <span className="flex-1 text-left">
                  <span className="flex items-center gap-2">
                    <span className="font-display text-[16px] font-semibold tracking-tight">
                      {option.name}
                    </span>
                    {option.badge && (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] ${
                          isPrimary
                            ? "bg-skyline-gold text-skyline-ink"
                            : "bg-skyline-gold/15 text-skyline-gold"
                        }`}
                      >
                        {option.badge}
                      </span>
                    )}
                  </span>
                  <span
                    className={`mt-0.5 block text-[12px] ${
                      isPrimary ? "text-white/80" : "text-skyline-muted"
                    }`}
                  >
                    {option.tagline}
                  </span>
                </span>
                <span
                  className={`font-display text-[18px] transition-transform group-hover:translate-x-1 ${
                    isPrimary ? "text-white" : "text-skyline-blue"
                  }`}
                  aria-hidden
                >
                  →
                </span>
              </Link>
            );
          })}
        </div>

        <div className="border-t border-skyline-line bg-skyline-bg px-6 py-4 text-center text-[11px] text-skyline-muted">
          {t("footer")}
        </div>
      </DialogContent>
    </Dialog>
  );
}
