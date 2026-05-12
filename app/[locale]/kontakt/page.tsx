import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { ContactData } from "./ContactData";
import { ContactForm } from "./form/ContactForm";
import { GoogleMaps } from "@/components/GoogleMaps";
import { AnimatedSection } from "./AnimatedSection";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("kontaktTitle"),
    description: t("kontaktDescription"),
  };
}

const ContactCard = ({
  label,
  value,
  sub,
  icon,
}: {
  label: string;
  value: string;
  sub: string;
  icon: string;
}) => (
  <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
    <div
      className="font-display flex h-11 w-11 items-center justify-center rounded-md bg-skyline-gold text-[18px] text-skyline-ink"
      aria-hidden
    >
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
        {label}
      </div>
      <div className="font-display mt-0.5 truncate text-[18px] font-semibold sm:text-[20px]">
        {value}
      </div>
    </div>
    <div className="hidden text-[11px] text-white/60 sm:block">{sub}</div>
  </div>
);

function KontaktContent() {
  const t = useTranslations("kontakt");
  return (
    <main className="bg-skyline-bg">
      <section className="bg-skyline-blue-deep px-6 pb-16 pt-16 text-white md:px-10 md:pt-20 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="skyline-eyebrow mb-5 text-skyline-gold">
              {t("heroEyebrow")}
            </div>
            <h1
              className="font-display text-[48px] leading-[0.95] tracking-tight sm:text-[56px] lg:text-[72px]"
              style={{ letterSpacing: "-0.035em" }}
            >
              {t("heroTitleLine1")}
              <br />
              <span className="text-skyline-gold">{t("heroTitleLine2")}</span>
            </h1>
            <p className="mt-6 max-w-[460px] text-[16px] leading-relaxed text-white/70">
              {t("heroSubtitle")}
            </p>
          </div>
          <div className="space-y-3 md:col-span-5">
            <ContactCard
              label={t("emailLabel")}
              value="biuro@inborr.pl"
              sub={t("emailSub")}
              icon="@"
            />
            <ContactCard
              label={t("phoneLabel")}
              value="+48 608 555 713"
              sub={t("phoneSub")}
              icon="☎"
            />
            <ContactCard
              label={t("whatsappLabel")}
              value="+48 608 555 713"
              sub={t("whatsappSub")}
              icon="✉"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="skyline-eyebrow mb-3 text-skyline-gold">
              {t("formEyebrow")}
            </div>
            <h2
              className="font-display mb-8 text-[32px] leading-[1] tracking-tight text-skyline-ink sm:text-[40px]"
              style={{ letterSpacing: "-0.03em" }}
            >
              {t("formTitle")}
            </h2>
            <ContactForm />
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-skyline-line bg-white p-6 lg:p-8">
              <ContactData />
            </div>
          </aside>
        </div>
      </section>

      <AnimatedSection delay={0.2}>
        <section className="px-6 pb-20 md:px-10 lg:px-12">
          <div className="skyline-eyebrow mb-3 text-skyline-gold">
            {t("mapEyebrow")}
          </div>
          <h3
            className="font-display mb-8 text-[32px] leading-[1] tracking-tight text-skyline-ink sm:text-[40px]"
            style={{ letterSpacing: "-0.03em" }}
          >
            {t("mapTitle")}
          </h3>
          <div className="overflow-hidden rounded-2xl border border-skyline-line">
            <GoogleMaps lat={52.2326} lng={20.9842} />
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}

export default function Kontakt({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return <KontaktContent />;
}
