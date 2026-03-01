"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex h-screen flex-col items-center justify-center pt-20">
      <div className="pb-10 text-5xl">Something went wrong!</div>
      <button
        className="tansition rounded-2xl bg-blue-300 p-20 text-3xl uppercase duration-300 hover:bg-blue-500"
      >
        Try again
      </button>
    </div>
  );
}
