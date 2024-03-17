import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const AllVehicleLoading: React.FC = () => {
  return (
    <main className="container flex flex-col items-start my-4 p-4 gap-5 lg:gap-8 justify-start w-full">
      <div className="space-y-3">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <Skeleton className="h-10 w-full" />
      <VehiclesSkeleton />
    </main>
  );
};

export const VehiclesSkeleton: React.FC = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 items-start justify-start w-full">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="flex flex-col gap-2 items-start w-full">
          <Skeleton className="rounded-lg object-cover w-full h-[200px]" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-3 w-3/4" />
        </div>
      ))}
    </section>
  );
};

export default AllVehicleLoading;
