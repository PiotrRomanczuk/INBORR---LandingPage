"use client";
import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { FormSchema } from "./FormSchema";
import z from "zod";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const [sendingError, setSendingError] = useState(false);

  type FormFields = z.infer<typeof FormSchema>;
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
        // console.log(response);
        setSendingError(true);
        console.log(`Failed to send email. Status: ${response.status}`);
      }

      console.log(`Email sent successfully. Status: ${response.status}`);
      setSendingError(true);
      return response.json();
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
    const { firstName, lastName, email, phone, message } = data;
    sendEmail(firstName, lastName, email, phone, message);
  };

  const onError = (errors: any, e: any) => console.log(errors, e);

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className=" px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
    >
      <div className=" relative">
        <p className="absolute right-0 top-0 text-blue-400">
          {errors.firstName?.message}
        </p>
        <label
          htmlFor="first-name"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Imię
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            id="first-name"
            autoComplete="first-name"
            {...register("firstName", {
              required: "Proszę podać imię",
            })}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="mt-2.5">
        <label
          htmlFor="last-name"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Nazwisko
        </label>
        <div className="relative mt-2.5">
          <p className="absolute -top-8 right-0 text-blue-400">
            {errors.lastName?.message}
          </p>
          <input
            type="text"
            id="last-name"
            autoComplete="family-name"
            {...register("lastName", {
              required: "Proszę podać nazwisko",
            })}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="email"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Email
        </label>
        <div className="relative mt-2.5">
          <p className="absolute -top-8 right-0 text-blue-400">
            {errors.email?.message}
          </p>
          <input
            type="email"
            id="email"
            autoComplete="email"
            {...register("email", {
              required: "Proszę podać swoj email",
            })}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="phone-number"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Numer telefonu
        </label>
        <div className="relative mt-2.5">
          <p className="absolute -top-8 right-0 text-blue-400">
            {errors.phone?.message}
          </p>
          <input
            type="tel"
            id="phone-number"
            autoComplete="tel"
            {...register("phone", {
              required: "Proszę podać numer telefonu",
            })}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Wiadomość
        </label>
        <div className="relative mt-2.5">
          <p className="absolute -top-8 right-0 text-blue-400">
            {errors.message?.message}
          </p>
          <textarea
            id="message"
            rows={4}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
            {...register("message", {
              required: "Proszę napisać wiadomość",
            })}
          />
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="rounded-lg border border-blue-400 bg-blue-400 px-6 py-2 text-white transition duration-300 hover:bg-pink-400"
        >
          Wyślij
        </button>
      </div>
    </form>
  );
};
