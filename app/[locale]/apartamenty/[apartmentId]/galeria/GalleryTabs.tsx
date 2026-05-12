"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import type { CategoryMeta } from "./categories";

interface GalleryTabsProps {
  sections: { meta: CategoryMeta; count: number }[];
}

const HEADER_OFFSET = 128;

export default function GalleryTabs({ sections }: GalleryTabsProps) {
  const t = useTranslations("galleryView");
  const [activeKey, setActiveKey] = useState<string>(
    sections[0]?.meta.key ?? "",
  );

  const handleJump = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, key: string) => {
      event.preventDefault();
      const target = document.getElementById(`sekcja-${key}`);
      if (!target) return;
      const y =
        target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      window.scrollTo({
        top: y,
        behavior: prefersReduced ? "auto" : "smooth",
      });
      setActiveKey(key);
    },
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const key = visible.target.id.replace("sekcja-", "");
          setActiveKey(key);
        }
      },
      {
        rootMargin: `-${HEADER_OFFSET}px 0px -55% 0px`,
        threshold: [0, 0.25, 0.5],
      },
    );
    sections.forEach(({ meta }) => {
      const el = document.getElementById(`sekcja-${meta.key}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="sticky top-[64px] z-20 border-b border-skyline-line bg-skyline-bg/90 backdrop-blur sm:top-[68px]">
      <nav
        aria-label={t("tabsAria")}
        className="mx-auto flex max-w-[1280px] gap-1 overflow-x-auto px-4 py-3 sm:gap-2 sm:px-8 lg:px-12"
      >
        {sections.map(({ meta, count }) => {
          const isActive = activeKey === meta.key;
          return (
            <a
              key={meta.key}
              href={`#sekcja-${meta.key}`}
              onClick={(e) => handleJump(e, meta.key)}
              aria-current={isActive ? "true" : undefined}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skyline-gold ${
                isActive
                  ? "border-skyline-ink bg-skyline-ink text-white"
                  : "border-skyline-line bg-skyline-paper text-skyline-ink hover:border-skyline-ink"
              }`}
            >
              {t(meta.labelKey as Parameters<typeof t>[0])}
              <span
                className={`text-[11px] ${
                  isActive ? "text-white/70" : "text-skyline-muted"
                }`}
              >
                {count}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
