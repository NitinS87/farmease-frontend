import React, { FC } from "react";
import Bajra from "../../../../../public/marketplace/bajra.jpg";
import Corn from "../../../../../public/marketplace/corn.jpg";
import Jowar from "../../../../../public/marketplace/jowar.webp";
import Muskmelon from "../../../../../public/marketplace/muskmelon.jpg";
import Pea from "../../../../../public/marketplace/pea.webp";
import Soyabean from "../../../../../public/marketplace/soyabean.jpg";
import Tomato from "../../../../../public/marketplace/tomato.jpg";
import Wheat from "../../../../../public/marketplace/wheat.jpg";
import Image from "next/image";
import CustomLink from "@/components/custom-link";
import Search from "@/components/search";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n.config";
import { cn } from "@/lib/utils";

type MarketPlaceProps = {
  params: {
    category: string;
    lang: Locale;
  };
  searchParams?: {
    query?: string;
    page?: string;
  };
};

const MarketplacePage: FC<MarketPlaceProps> = async ({
  params,
  searchParams,
}) => {
  const { marketplace_categories } = await getDictionary(params.lang);

  const seeds = [
    {
      link: "/marketplace/seeds/corn",
      title: "Golden Harvest Corn Seeds",
      price: 5000,
      img: Corn,
    },
    {
      link: "/marketplace/seeds/soyabean",
      title: "Soyabean Seeds",
      price: 2050,
      img: Soyabean,
    },
    {
      link: "/marketplace/seeds/jowar",
      title: "Jowar Seeds",
      price: 1000,
      img: Jowar,
    },
    {
      link: "/marketplace/seeds/wheat",
      title: "Wheat Seeds",
      price: 2500,
      img: Wheat,
    },
    {
      link: "/marketplace/seeds/bajra",
      title: "Bajra Seeds",
      price: 1500,
      img: Bajra,
    },
    {
      link: "/marketplace/seeds/pea",
      title: "Pea Seeds",
      price: 16000,
      img: Pea,
    },
    {
      link: "/marketplace/seeds/tomato",
      title: "Tomato Seeds",
      price: 6000,
      img: Tomato,
    },
    {
      link: "/marketplace/seeds/muskmelon",
      title: "Muskmelon Seeds",
      price: 20000,
      img: Muskmelon,
    },
  ];
  return (
    <main className="container flex flex-col items-start p-4 gap-5 lg:gap-8 justify-start w-full">
      <nav className="flex items-center space-x-6 border-b w-full overflow-x-auto">
        <CustomLink
          className={cn(
            "px-4 py-2 border-2 transform duration-300 ease-in-out border-transparent hover:border-b-border hover:rounded-lg",
            params.category === "seeds" && "border-b-2 border-b-border"
          )}
          href="/marketplace/seeds"
          lang={params.lang}
        >
          {marketplace_categories.seeds}
        </CustomLink>
        <CustomLink
          href="/marketplace/fertilizers"
          lang={params.lang}
          className={cn(
            "px-4 py-2 border-2 transform duration-300 ease-in-out border-transparent hover:border-b-border hover:rounded-lg",
            params.category === "fertilizers" && "border-b-2 border-b-border"
          )}
        >
          {marketplace_categories.fertilizers}
        </CustomLink>
        <CustomLink
          href="/marketplace/pesticides"
          lang={params.lang}
          className={cn(
            "px-4 py-2 border-2 transform duration-300 ease-in-out border-transparent hover:border-b-border hover:rounded-lg",
            params.category === "pesticides" && "border-b-2 border-b-border"
          )}
        >
          {marketplace_categories.pesticides}
        </CustomLink>
        <CustomLink
          href="/marketplace/tools"
          lang={params.lang}
          className={cn(
            "px-4 py-2 border-2 transform duration-300 ease-in-out border-transparent hover:border-b-border hover:rounded-lg",
            params.category === "tools" && "border-b-2 border-b-border"
          )}
        >
          {marketplace_categories.tools}
        </CustomLink>
        <CustomLink
          href="/marketplace/storage"
          lang={params.lang}
          className={cn(
            "px-4 py-2 border-2 transform duration-300 ease-in-out border-transparent hover:border-b-border hover:rounded-lg",
            params.category === "storage" && "border-b-2 border-b-border"
          )}
        >
          {marketplace_categories.storage}
        </CustomLink>
      </nav>
      <Search placeholder={"Search " + params.category} />
      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 items-start justify-center">
        {seeds.map((seed, index) => (
          <CustomLink
            href={seed.link}
            lang={params.lang}
            key={index}
            className="flex flex-col gap-2 justify-center hover:scale-105 duration-200 ease-in-out"
          >
            <Image
              src={seed.img}
              alt={seed.title}
              className="rounded-lg h-[200px] w-full object-cover"
              placeholder="blur"
            />
            <span className="text-sm md:text-base">{seed.title}</span>
            <span className="text-sm md:text-base text-primary">
              ₹{seed.price}
            </span>
          </CustomLink>
        ))}
      </section>
    </main>
  );
};

export default MarketplacePage;
