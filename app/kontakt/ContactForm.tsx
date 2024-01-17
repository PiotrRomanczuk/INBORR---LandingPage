"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const schema = z.object({
    firstName: z.string().min(1).max(50),
    lastName: z.string().min(1).max(50),
    email: z.string().email(),
    phone: z.string().min(1).max(50),
    content: z.string().min(1).max(1000),
  });

  type FormFields = z.infer<typeof schema>;

  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data);
  const onError = (errors: any, e: any) => console.log(errors, e);

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className=" px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg ">
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
              required: "Pole jest wymagane",
            })}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <p>{errors.firstName?.message}</p>
        </div>
      </div>
      <div>
        <label
          htmlFor="last-name"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Nazwisko
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            id="last-name"
            autoComplete="family-name"
            {...register("lastName", {
              required: "Pole jest wymagane",
            })}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <p>{errors.lastName?.message}</p>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="email"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Email
        </label>
        <div className="mt-2.5">
          <input
            type="email"
            id="email"
            autoComplete="email"
            {...register("email", {
              required: "Pole jest wymagane",
            })}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <p>{errors.email?.message}</p>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="phone-number"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Numer telefonu
        </label>
        <div className="mt-2.5">
          <input
            type="tel"
            id="phone-number"
            autoComplete="tel"
            {...register("phone", {
              required: "Proszę podac telefon",
            })}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <p>{errors.phone?.message}</p>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Wiadomość
        </label>
        <div className="mt-2.5">
          <textarea
            id="message"
            rows={4}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
            {...register("content", {
              required: "Pole jest wymagane",
            })}
          />
          <p>{errors.content?.message}</p>
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
