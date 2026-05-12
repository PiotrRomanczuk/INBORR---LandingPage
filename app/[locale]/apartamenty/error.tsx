"use client";

import ApartNotFound from "./ApartNotFound";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="flex h-screen flex-col items-center justify-center pt-20">
      <ApartNotFound />
    </div>
  );
}
