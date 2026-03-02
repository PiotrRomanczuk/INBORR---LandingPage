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
        onClick={() => reset()}
        className="rounded-2xl bg-primary px-12 py-6 text-xl text-primary-foreground transition duration-300 hover:bg-primary/90"
      >
        Spróbuj ponownie
      </button>
    </div>
  );
}
