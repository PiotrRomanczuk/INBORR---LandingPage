import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const FooterLogo = () => (
  <Image
    src="/logo.png"
    alt="Inborr"
    width={180}
    height={72}
    className="h-10 w-auto md:h-12"
  />
);

const FooterColumn = ({
  title,
  items,
}: {
  title: string;
  items: { label: string; href?: string }[];
}) => (
  <div>
    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-skyline-gold">
      {title}
    </div>
    <ul className="mt-4 space-y-2 text-[13px] text-white/85">
      {items.map((it) =>
        it.href ? (
          <li key={it.label}>
            <Link
              href={it.href}
              className="transition-colors hover:text-white"
            >
              {it.label}
            </Link>
          </li>
        ) : (
          <li key={it.label}>{it.label}</li>
        ),
      )}
    </ul>
  </div>
);

export const Footer = () => {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();
  return (
    <footer className="bg-skyline-blue-deep text-white">
      <div className="mx-auto max-w-screen-xl px-6 pb-12 pt-16 lg:px-12 lg:pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <FooterLogo />
            <h3
              className="font-display mt-8 max-w-[420px] text-[32px] leading-[1.05] md:text-[44px]"
              style={{ letterSpacing: "-0.03em" }}
            >
              {t("taglineLine1")}
              <br />
              {t("taglineLine2")}
              <br />
              <span className="text-skyline-gold">{t("taglineLine3")}</span>
            </h3>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-white/70">
              <span>{t("superhost")}</span>
              <span aria-hidden>·</span>
              <span>{t("bookingScore")}</span>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <FooterColumn
              title={t("apartmentsTitle")}
              items={[
                { label: t("chlodna"), href: "/apartamenty/chlodna" },
                { label: t("pereca"), href: "/apartamenty/pereca" },
                { label: t("all"), href: "/apartamenty" },
                { label: "Mirów", href: "/mirow" },
              ]}
            />
          </div>
          <div className="md:col-span-2">
            <FooterColumn
              title={t("helpTitle")}
              items={[
                { label: t("faq"), href: "/apartamenty" },
                { label: t("terms"), href: "/regulamin" },
                { label: t("contactTitle"), href: "/kontakt" },
              ]}
            />
          </div>
          <div className="md:col-span-3">
            <FooterColumn
              title={t("contactTitle")}
              items={[
                { label: "biuro@inborr.pl" },
                { label: "+48 608 555 713" },
                { label: t("city") },
                { label: t("hours") },
              ]}
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-white/50 md:flex-row md:items-center">
          <div>{t("rights", { year })}</div>
          <div>{t("geo")}</div>
        </div>
      </div>
    </footer>
  );
};
