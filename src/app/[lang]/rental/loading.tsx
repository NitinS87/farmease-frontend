import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const RentalLoading = () => {
  return (
    <main className="container flex flex-col items-start my-4 p-4 gap-5 lg:gap-10 justify-start w-full">
      <Skeleton className="h-6 w-1/2" />
      <CategoriesLoading />
      <StepsLoading />
      <HelpLoading />
    </main>
  );
};

export default RentalLoading;

export const StepsLoading: React.FC = () => {
  return (
    <article className="flex flex-col gap-5 w-full">
      <div className="space-y-1">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 items-start justify-start w-full">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-start w-full border rounded-lg p-4"
          >
            <Skeleton className="rounded-lg w-full h-10" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        ))}
      </section>
    </article>
  );
};

export const CategoriesLoading: React.FC = () => {
  return (
    <article className="flex flex-col gap-5 w-full">
      <Skeleton className="h-6 w-1/2" />
      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 items-start justify-start w-full">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-start w-full duration-300 transform hover:scale-105 hover:shadow-lg ease-in-out active:scale-95 active:shadow-md"
          >
            <Skeleton className="rounded-lg object-cover w-[300px] h-[200px]" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        ))}
      </section>
    </article>
  );
};

export const HelpLoading: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-5 w-full">
      <div className="space-y-1">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <Skeleton className="h-10 w-1/4" />
    </div>
  );
};
