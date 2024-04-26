"use client"; // Error components must be Client Components

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="container flex flex-col items-start my-5 p-4 gap-10 justify-start w-full">
      <h2>Oops! Something went wrong</h2>
      <p>Here&apos;s what we know: {error.message}</p>
      <p>
        If this keeps happening, please{" "}
        <a href="mailto:nitins9868@gmail.com">contact support</a> with the error
        code <code>{error.digest}</code>.
      </p>
      <button onClick={reset ? () => reset() : () => router.push("/")}>
        Try again
      </button>
    </main>
  );
}
