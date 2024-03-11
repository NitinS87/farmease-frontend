import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <main className="container flex flex-col items-start my-5 p-4 gap-10 justify-start w-full">
      <Skeleton className="w-full h-[550px] rounded-lg" />
      <article className="flex flex-col gap-5">
        <Skeleton className="mb-2 h-2" />
        <Skeleton className="mb-4 h-4" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 items-start justify-center">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <Skeleton className="rounded-full h-5 w-5" />
              <Skeleton className="h-1 w-10" />
            </div>
          ))}
        </div>
      </article>
      <article className="flex flex-col gap-5 w-full">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-3/4" />
        <section className="grid grid-cols-2 md:grid-cols-4 gap-5 items-start justify-start w-full">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex flex-col gap-2 items-start w-full">
              <Skeleton className="rounded-lg w-full h-32" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-3 w-3/4" />
            </div>
          ))}
        </section>
      </article>
    </main>
  );
};

export default loading;
