import { Locale } from "@/i18n.config";
import React from "react";
import Image from "next/image";
import { getDictionary } from "@/lib/get-dictionary";
import Tracktor from "../../../public/rental/tractors.png";
import Harvester from "../../../public/rental/harvester.avif";
import Trucks from "../../../public/rental/trucks.jpg";
import Combines from "../../../public/rental/combines.avif";
import Trailers from "../../../public/rental/trailers.webp";
import Cultivator from "../../../public/rental/cultivators.webp";
import Plough from "../../../public/rental/plough.webp";
import Planters from "../../../public/rental/planters.jpg";
import CustomLink from "../custom-link";

const Categories = async ({ lang }: { lang: Locale }) => {
  const { categories } = await getDictionary(lang);

  const vehicles = [
    {
      href: "/rental/tractors",
      img: Tracktor,
      name: categories.tractors,
      cost: categories["tractors-cost"],
    },
    {
      href: "/rental/harvesters",
      img: Harvester,
      name: categories.harvesters,
      cost: categories["harvesters-cost"],
    },
    {
      href: "/rental/trucks",
      img: Trucks,
      name: categories.trucks,
      cost: categories["trucks-cost"],
    },
    {
      href: "/rental/combines",
      img: Combines,
      name: categories.combines,
      cost: categories["combines-cost"],
    },
    {
      href: "/rental/trailers",
      img: Trailers,
      name: categories.trailers,
      cost: categories["trailers-cost"],
    },
    {
      href: "/rental/cultivators",
      img: Cultivator,
      name: categories.cultivators,
      cost: categories["cultivators-cost"],
    },
    {
      href: "/rental/ploughs",
      img: Plough,
      name: categories.ploughs,
      cost: categories["ploughs-cost"],
    },
    {
      href: "/rental/planters",
      img: Planters,
      name: categories.planters,
      cost: categories["planters-cost"],
    },
  ];
  return (
    <article className="flex flex-col gap-5 w-full">
      <h3 className="text-2xl">{categories.title}</h3>
      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 items-start justify-start w-full">
        {vehicles.map((vehicle, index) => (
          <CustomLink
            key={index}
            className="flex flex-col gap-2 items-start w-full duration-300 transform hover:scale-105 hover:shadow-lg ease-in-out active:scale-95 active:shadow-md"
            href={vehicle.href}
            lang={lang}
          >
            <Image
              src={vehicle.img}
              alt={vehicle.name}
              placeholder="blur"
              width={300}
              height={200}
              className="rounded-lg object-cover w-[300px] h-[200px]"
            />
            <h5 className="text-base text-green-600">{vehicle.name}</h5>
            <span className="text-xs md:text-sm">{vehicle.cost}</span>
          </CustomLink>
        ))}
      </section>
    </article>
  );
};

export default Categories;
