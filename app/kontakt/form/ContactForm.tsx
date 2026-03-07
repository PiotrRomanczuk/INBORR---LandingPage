"use client";

import { useState } from "react";
import { SubmitHandler, useForm, FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "./FormSchema";
import z from "zod";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type FormFields = z.infer<typeof FormSchema>;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
  });

  const [sendingError, setSendingError] = useState(false);

  const sendEmail = async (
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    message: string,
  ) => {
    try {
      const response = await fetch("/api/nodemailer/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message,
        }),
      });

      if (!response.ok) {
        setSendingError(true);
        return;
      }

      setSendingError(false);
      return response.json();
    } catch (error) {
      setSendingError(true);
      throw error;
    }
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const { firstName, lastName, email, phone, message } = data;
    try {
      const result = await sendEmail(firstName, lastName, email, phone, message);
      if (!result) {
        toast({
          title: "Nie udało się wysłać wiadomości",
          description: "Spróbuj ponownie później.",
          variant: "destructive",
        });
        return;
      }
      toast({
        title: "Wiadomość wysłana",
        description: "Otrzymaliśmy Twoją wiadomość i odpowiemy najszybciej jak to możliwe.",
      });
      reset();
    } catch {
      toast({
        title: "Nie udało się wysłać wiadomości",
        description: "Spróbuj ponownie później.",
        variant: "destructive",
      });
    }
  };

  const onError = (_errors: FieldErrors<FormFields>) => {};

  const inputClass =
    "block w-full rounded-md border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-input placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-ring sm:text-sm sm:leading-6";

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit, onError)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
    >
      <div>
        <label htmlFor="first-name" className="block text-sm sm:text-base font-semibold leading-6 text-foreground">
          Imię
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="first-name"
            placeholder="Jan"
            autoComplete="given-name"
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "first-name-error" : undefined}
            {...register("firstName", { required: "Proszę podać imię" })}
            className={inputClass}
          />
        </div>
        {errors.firstName && (
          <p id="first-name-error" role="alert" className="mt-1 text-sm text-destructive">
            {errors.firstName.message}
          </p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="last-name" className="block text-sm sm:text-base font-semibold leading-6 text-foreground">
          Nazwisko
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="last-name"
            placeholder="Kowalski"
            autoComplete="family-name"
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? "last-name-error" : undefined}
            {...register("lastName", { required: "Proszę podać nazwisko" })}
            className={inputClass}
          />
        </div>
        {errors.lastName && (
          <p id="last-name-error" role="alert" className="mt-1 text-sm text-destructive">
            {errors.lastName.message}
          </p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="email" className="block text-sm sm:text-base font-semibold leading-6 text-foreground">
          Email
        </label>
        <div className="mt-2">
          <input
            type="email"
            id="email"
            placeholder="jan@example.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email", { required: "Proszę podać swoj email" })}
            className={inputClass}
          />
        </div>
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-sm text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="phone-number" className="block text-sm sm:text-base font-semibold leading-6 text-foreground">
          Numer telefonu
        </label>
        <div className="mt-2">
          <input
            type="tel"
            id="phone-number"
            placeholder="+48 600 000 000"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone", { required: "Proszę podać numer telefonu" })}
            className={inputClass}
          />
        </div>
        {errors.phone && (
          <p id="phone-error" role="alert" className="mt-1 text-sm text-destructive">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="block text-sm sm:text-base font-semibold leading-6 text-foreground">
          Wiadomość
        </label>
        <div className="mt-2">
          <textarea
            id="message"
            rows={4}
            placeholder="Jak możemy pomóc?"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={inputClass}
            {...register("message", { required: "Proszę napisać wiadomość" })}
          />
        </div>
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-sm text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="mt-8">
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Wysyłanie...
            </>
          ) : (
            "Wyślij"
          )}
        </Button>
      </div>
    </motion.form>
  );
};
