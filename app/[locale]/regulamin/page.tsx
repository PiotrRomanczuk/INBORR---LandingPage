"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type RegulaminSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
  ordered?: string[];
};

export default function RegulationPage() {
  const t = useTranslations("regulamin");
  const sections = t.raw("sections") as RegulaminSection[];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-muted py-8 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-background shadow-sm rounded-lg overflow-hidden"
      >
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-bold text-foreground mb-6">
            {t("title")}
          </h1>

          <p className="mb-4 text-sm text-muted-foreground text-center">
            {t("adminLine1")}
            <br />
            {t("adminLine2")}
          </p>

          {sections.map((section) => (
            <Section key={section.title} title={section.title}>
              {section.paragraphs?.map((p) => <p key={p}>{p}</p>)}
              {section.items && (
                <ul className="list-disc pl-5 space-y-2">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.ordered && (
                <ol className="list-decimal pl-5 space-y-2">
                  {section.ordered.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              )}
            </Section>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <h2 className="text-xl font-semibold text-center text-foreground mb-2">
        {title}
      </h2>
      <div className="text-muted-foreground">{children}</div>
    </motion.section>
  );
}
