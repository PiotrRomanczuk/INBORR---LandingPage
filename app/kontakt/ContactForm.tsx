"use client";

import React, { useState } from "react";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/send"`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, content }),
      });

      if (response.ok) {
        console.log("Data sent successfully!");
      } else {
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error while submitting data", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col rounded-lg bg-white px-8 py-8 shadow-xl "
    >
      <h1 className="text-2xl font-bold text-black ">Send a content</h1>

      <label htmlFor="email" className="mt-4 font-light text-gray-500  ">
        E-mail<span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="border-b bg-transparent py-2 pl-4 font-light text-gray-500 ring-green-500 focus:rounded-md focus:outline-none focus:ring-1"
      />

      <label htmlFor="content" className="mt-4 font-light text-gray-500  ">
        Content<span className="text-red-500">*</span>
      </label>
      <textarea
        name="content"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          console.log(content);
        }}
        className="border-b bg-transparent py-2 pl-4 font-light text-gray-500 ring-green-500 focus:rounded-md focus:outline-none focus:ring-1"
      ></textarea>

      <div className="flex flex-row items-center justify-start">
        <button
          type="submit"
          className="mt-8 flex flex-row items-center rounded-md bg-[#130F49] px-10 py-2 text-lg font-light text-gray-50"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
