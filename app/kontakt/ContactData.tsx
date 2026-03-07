"use client";

import {
  BuildingOffice2Icon,
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export const ContactData = () => {
  return (
    <motion.div
      className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold tracking-tight text-foreground">
        Skontaktuj się z nami
      </h2>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        Masz pytania, sugestie lub chcesz się z nami skontaktować? Wypełnij
        formularz, a my postaramy się odpowiedzieć najszybciej, jak to możliwe.
      </p>
      <dl className="mt-10 space-y-4 text-base leading-7 text-muted-foreground">
        <div className="flex gap-x-4">
          <dt className="flex-none">
            <span className="sr-only">Address</span>
            <BuildingOffice2Icon
              className="h-7 w-6 text-muted-foreground"
              aria-hidden="true"
            />
          </dt>
          <dd>
            Ul. Ludwiki 4 lok.34,
            <br />
            Warszawa, 01-226
          </dd>
        </div>
        <div className="flex gap-x-4">
          <dt className="flex-none">
            <span className="sr-only">Telephone</span>
            <PhoneIcon className="h-7 w-6 text-muted-foreground" aria-hidden="true" />
          </dt>
          <dd>
            <a className="hover:text-foreground" href="tel:+48608555713">
              +48 608 555 713
            </a>
          </dd>
        </div>
        <div className="flex gap-x-4">
          <dt className="flex-none">
            <span className="sr-only">Email</span>
            <EnvelopeIcon
              className="h-7 w-6 text-muted-foreground"
              aria-hidden="true"
            />
          </dt>
          <dd>
            <a className="hover:text-foreground" href="mailto:biuro@inborr.pl">
              biuro@inborr.pl
            </a>
          </dd>
        </div>
        <div className="flex gap-x-4">
          <dt className="flex-none">
            <span className="sr-only">Godziny pracy</span>
            <ClockIcon className="h-7 w-6 text-muted-foreground" aria-hidden="true" />
          </dt>
          <dd>Pon-Pt: 9:00-18:00</dd>
        </div>
      </dl>
      <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <div className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
        Odpowiadamy w ciągu 24h
      </div>
    </motion.div>
  );
};
