import { Locale } from "@/i18n.config";
import Image from "next/image";
import React, { FC } from "react";
import JohnDeere from "../../../../../../public/rental/vehicles/tractors/john-deere.png";
import { getDictionary } from "@/lib/get-dictionary";
import { DatePickerWithRange } from "@/components/date-range-picker";
import { getVehicleById } from "@/utils/db";
import { Prisma } from "@prisma/client";

type VehicleProps = {
  params: {
    vehicleType: string;
    vehicleId: string;
    lang: Locale;
  };
  searchParams: any;
};

const Vehicle: FC<VehicleProps> = async ({ params, searchParams }) => {
  const { vehicles_details } = await getDictionary(params.lang);

  const vehicle = await getVehicleById(params.vehicleId);
  // console.log(vehicle);

  if (!vehicle) {
    return (
      <main className="container flex flex-col items-start my-4 p-4 gap-5 lg:gap-8 justify-start w-full">
        Vehicle not found
      </main>
    );
  }

  return (
    <main className="container flex flex-col items-start my-4 p-4 gap-5 lg:gap-8 justify-start w-full">
      <div className="relative w-full">
        <Image
          src={vehicle?.images[0] || JohnDeere}
          alt="John Deere"
          className="object-cover rounded-lg w-full h-96 md:h-[450px] lg:h-[500px] -z-10"
          // placeholder="blur"
          width={500}
          height={500}
        />
        <div className="absolute left-0 bottom-0 py-2 px-5 md:py-5 drop-shadow backdrop-brightness-105 backdrop-blur-[2px] w-full">
          <h1 className="text-2xl lg:text-4xl font-semibold text-white">
            {vehicle?.name || "John Deere 5100M"}
          </h1>
          {/* <p className="text-base lg:text-lg text-white">
            100HP | 4WD | Cab | A/C
          </p> */}
        </div>
      </div>
      <div className="w-full space-y-3">
        <h3 className="text-lg lg:text-2xl font-semibold">
          {vehicles_details.description}
        </h3>
        <p className="text-sm lg:text-base">
          {vehicle?.description ||
            `The John Deere 5100M is a 100 HP utility tractor with a 4WD and cab.
          This is an ideal tractor for small to medium-sized farms, offering
          reliable performance and a comfortable operating environment.`}
        </p>
      </div>
      <div className="w-full space-y-3">
        <h3 className="text-lg lg:text-2xl font-semibold">
          {vehicles_details.specifications}
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 justify-between">
          <div className="flex flex-col items-start space-y-2 p-3 border-t">
            <h5 className="text-sm lg:text-base font-semibold text-primary">
              {vehicles_details.engine}
            </h5>
            <p className="text-xs lg:text-sm">
              {((vehicle.specifications as Prisma.JsonObject)
                .engine as string) || "1750HP"}
            </p>
          </div>
          <div className="flex flex-col items-start space-y-2 p-3 border-t">
            <h5 className="text-sm lg:text-base font-semibold text-primary">
              {vehicles_details.fuel}
            </h5>
            <p className="text-xs lg:text-sm">
              {((vehicle.specifications as Prisma.JsonObject).fuel as string) ||
                "Diesel"}
            </p>
          </div>
          <div className="flex flex-col items-start space-y-2 p-3 border-t">
            <h5 className="text-sm lg:text-base font-semibold text-primary">
              {vehicles_details.transmission}
            </h5>
            <p className="text-xs lg:text-sm">
              {((vehicle.specifications as Prisma.JsonObject)
                .transmission as string) || "12F/12R"}
            </p>
          </div>
          <div className="flex flex-col items-start space-y-2 p-3 border-t">
            <h5 className="text-sm lg:text-base font-semibold text-primary">
              {vehicles_details.drive}
            </h5>
            <p className="text-xs lg:text-sm">
              {((vehicle.specifications as Prisma.JsonObject)
                .drive as string) || "4WD"}
            </p>
          </div>
          <div className="flex flex-col items-start space-y-2 p-3 border-t">
            <h5 className="text-sm lg:text-base font-semibold text-primary">
              {vehicles_details.cabin}
            </h5>
            <p className="text-xs lg:text-sm">
              {((vehicle.specifications as Prisma.JsonObject)
                .cabin as string) || "A/C"}
            </p>
          </div>
          <div className="flex flex-col items-start space-y-2 p-3 border-t">
            <h5 className="text-sm lg:text-base font-semibold text-primary">
              {vehicles_details.weight}
            </h5>
            <p className="text-xs lg:text-sm">
              {((vehicle.specifications as Prisma.JsonObject)
                .weight as string) || "3,500 kg"}
            </p>
          </div>
        </div>
      </div>
      {/* Rental Terms */}
      <div className="w-full space-y-3">
        <h3 className="text-lg lg:text-2xl font-semibold">
          {vehicles_details["rental-terms"]}
        </h3>
        <div className="space-y-3 text-sm md:text-base">
          {/* Min Rental */}
          <div className="flex justify-between items-center gap-2">
            <h5 className="text-primary">{vehicles_details["min-rental"]}</h5>
            <p>
              {((vehicle.rentalTerms as Prisma.JsonObject)[
                "min-rental"
              ] as string) || 1}{" "}
              {vehicles_details.day}
            </p>
          </div>
          {/* Delivery */}
          <div className="flex justify-between items-center gap-2">
            <h5 className="text-primary">{vehicles_details.delivery}</h5>
            <p>
              {((vehicle.rentalTerms as Prisma.JsonObject).delivery as boolean)
                ? vehicles_details.yes
                : vehicles_details.no}
            </p>
          </div>
          {/* Insurance */}
          <div className="flex justify-between items-center gap-2">
            <h5 className="text-primary">{vehicles_details.insurance}</h5>
            <p>
              {((vehicle.rentalTerms as Prisma.JsonObject).insurance as boolean)
                ? vehicles_details.yes
                : vehicles_details.no}
            </p>
          </div>
          {/* Documents/Deposit */}
          <div className="flex justify-between items-center gap-2">
            <h5 className="text-primary">
              {vehicles_details.documents}/{vehicles_details.deposit}
            </h5>
            <p>
              {((vehicle.rentalTerms as Prisma.JsonObject).deposit as string) ||
                "Aadhar Card / Credit Card Hold"}
            </p>
          </div>
          {/* Cleaning Fee */}
          <div className="flex justify-between items-center gap-2">
            <h5 className="text-primary">{vehicles_details.cleaning}</h5>
            <p>
              {((vehicle.rentalTerms as Prisma.JsonObject).cleaning as boolean)
                ? vehicles_details.yes
                : vehicles_details.no}
            </p>
          </div>
          {/* Fuel */}
          <div className="flex justify-between items-center gap-2">
            <h5 className="text-primary">{vehicles_details["fuel-policy"]}</h5>
            <p>
              {((vehicle.rentalTerms as Prisma.JsonObject)[
                "fuel-policy"
              ] as string) || vehicles_details.full}
            </p>
          </div>
        </div>
      </div>
      {/* Availability */}
      <div className="w-full space-y-3">
        <h3 className="text-lg lg:text-2xl font-semibold">
          {vehicles_details.availability}
        </h3>
        <DatePickerWithRange
          className="place-items-center md:place-items-start"
          vehicle_details={vehicles_details}
          price={vehicle.pricePerDay}
          vehicle={vehicle}
        />
      </div>
    </main>
  );
};

export default Vehicle;
