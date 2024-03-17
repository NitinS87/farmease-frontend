import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const VehicleLoading: React.FC = () => {
  return (
    <main className="container flex flex-col items-start my-4 p-4 gap-5 lg:gap-8 justify-start w-full">
      <Skeleton className="rounded-lg object-cover w-full h-96 md:h-[450px] lg:h-[500px] -z-10" />
      <div className="w-full space-y-3">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <div className="w-full space-y-3">
        <Skeleton className="h-6 w-1/2" />
        <div className="grid grid-cols-2 lg:grid-cols-3 justify-between">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-2 p-3 border-t"
            >
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full space-y-3">
        <Skeleton className="h-6 w-1/2" />
        <div className="space-y-3 text-sm md:text-base">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-2"
            >
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full space-y-3">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-10 w-full" />
      </div>
    </main>
  );
};

export default VehicleLoading;
