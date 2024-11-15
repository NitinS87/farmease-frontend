import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/get-dictionary";
import Image from "next/image";
import React from "react";
import Storage from "../../../public/home/offer/storage.png";
import Labour from "../../../public/home/offer/labour.png";
import Tractor from "../../../public/home/offer/tractor.png";
import SeedsAndFertilizers from "../../../public/home/offer/seeds-and-fertilizers.png";
import Produce from "../../../public/home/offer/produce.png";
import Truck from "../../../public/home/offer/truck.png";
import Weather from "../../../public/home/offer/weather.png";
import CustomLink from "../custom-link";

const Services = async ({ lang }: { lang: Locale }) => {
  const { offer } = await getDictionary(lang);
  const offers = [
    {
      title: offer.labour,
      img: Labour,
      link: "/hiring",
    },
    {
      title: offer.tractor,
      img: Tractor,
      link: "/rental/tractor",
    },
    {
      title: offer.buy,
      img: SeedsAndFertilizers,
      link: "/marketplace/seeds",
    },
    // {
    //   title: offer.sell,
    //   img: Produce,
    //   link: "/marketplace",
    // },
    {
      title: offer.rent,
      img: Truck,
      link: "/rental/truck",
    },

    {
      title: offer.weather,
      img: Weather,
      link: "/chat",
    },
  ];
  return (
    <article className="flex flex-col gap-5">
      <h2 className="text-3xl font-semibold">{offer.title}</h2>
      <h6>{offer.content}</h6>
      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 items-start justify-center">
        {offers.map((offer, index) => (
          <CustomLink
            href={offer.link}
            lang={lang}
            key={index}
            className="flex flex-col gap-2 items-center justify-center hover:scale-105 duration-200 ease-in-out"
          >
            <Image
              src={offer.img}
              alt={offer.title}
              className="rounded-lg"
              placeholder="blur"
            />
            <span className="text-sm md:text-base">{offer.title}</span>
          </CustomLink>
        ))}
      </section>
    </article>
  );
};

export default Services;
