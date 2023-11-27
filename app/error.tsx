"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center pt-20">
      <div className="pb-10 text-5xl">Something went wrong!</div>
      <button
        as="a"
        href="/"
        className="tansition rounded-2xl bg-blue-300 p-20 text-3xl uppercase duration-300 hover:bg-blue-500"
      >
        Try again
      </button>
    </div>
  );
}
