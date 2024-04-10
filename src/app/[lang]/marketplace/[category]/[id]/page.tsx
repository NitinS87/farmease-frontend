import { Locale } from "@/i18n.config";
import Image from "next/image";
import React, { FC } from "react";
import { getDictionary } from "@/lib/get-dictionary";
import Corn from "../../../../../../public/marketplace/corn.jpg";
import { Button } from "@/components/ui/button";

type MarketPlaceItemProps = {
  params: {
    category: string;
    id: string;
    lang: Locale;
  };
  searchParams: any;
};

const Vehicle: FC<MarketPlaceItemProps> = async ({ params, searchParams }) => {
  const { marketplace_details } = await getDictionary(params.lang);
  return (
    <main className="container flex flex-col items-start my-4 p-4 gap-5 lg:gap-8 justify-start w-full">
      <div className="flex items-start space-x-10">
        <Image
          src={Corn}
          alt="Corn"
          className="object-cover rounded-lg w-full h-96 md:h-[450px] lg:h-[500px]"
          placeholder="blur"
        />
        <div className="space-y-4">
          <div className="w-full space-y-3">
            <h3 className="text-lg lg:text-2xl font-semibold">
              {marketplace_details.description}
            </h3>
            <p className="text-sm lg:text-base">
              The Corn seeds are a high-yielding variety that is suitable for
              growing in all types of soil. The seeds are resistant to pests and
              diseases, making them ideal for cultivation in India. The seeds
              are also known for their high nutritional value and are rich in
              vitamins and minerals. The seeds are easy to grow and require
              minimal maintenance, making them an ideal choice for farmers
              looking to increase their yield.
            </p>
          </div>
          <div className="w-full space-y-3">
            <h3 className="text-lg lg:text-2xl font-semibold">
              {marketplace_details.specifications}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 justify-between">
              <div className="flex flex-col items-start space-y-2 p-3 border-t">
                <h5 className="text-sm lg:text-base font-semibold text-primary">
                  {marketplace_details.brand}
                </h5>
                <p className="text-xs lg:text-sm">Vedaka</p>
              </div>
              <div className="flex flex-col items-start space-y-2 p-3 border-t">
                <h5 className="text-sm lg:text-base font-semibold text-primary">
                  {marketplace_details.flavour}
                </h5>
                <p className="text-xs lg:text-sm">Corn Seeds</p>
              </div>
              <div className="flex flex-col items-start space-y-2 p-3 border-t">
                <h5 className="text-sm lg:text-base font-semibold text-primary">
                  {marketplace_details.speciality}
                </h5>
                <p className="text-xs lg:text-sm">
                  High Yield, Pest Resistant, Disease Resistant
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2 p-3 border-t">
                <h5 className="text-sm lg:text-base font-semibold text-primary">
                  {marketplace_details.weight}
                </h5>
                <p className="text-xs lg:text-sm">
                  1 kg, 5 kg, 10 kg, 25 kg, 50 kg
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2 p-3 border-t">
                <h5 className="text-sm lg:text-base font-semibold text-primary">
                  {marketplace_details.packaging}
                </h5>
                <p className="text-xs lg:text-sm">
                  Packet, Bag, Sack, Box, Drum
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2 p-3 border-t">
                <h5 className="text-sm lg:text-base font-semibold text-primary">
                  {marketplace_details.shipping}
                </h5>
                <p className="text-xs lg:text-sm">
                  Available in India, US, UK, Canada, Australia
                </p>
              </div>
            </div>
          </div>
          {/* Availability */}
          <div className="w-full space-y-3">
            {/* <h3 className="text-lg lg:text-2xl font-semibold">
              {marketplace_details.quantity}
            </h3> */}
            <Button variant={"default"} className="w-[300px]">
              {marketplace_details.buy} - ₹1000
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Vehicle;
