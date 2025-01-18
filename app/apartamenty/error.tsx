"use client"; // Error components must be Client Components

import { useEffect } from "react";
import ApartNotFound from "./chlodna/ApartNotFound";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center pt-20">
      <ApartNotFound />
    </div>
  );
}
