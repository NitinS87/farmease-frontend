import Image from "next/image";
import React from "react";
import CustomLink from "../custom-link";
import { Button } from "../ui/button";
import { Locale } from "@/i18n.config";
import BannerImage from "../../../public/home/banner.png";
import { getDictionary } from "@/lib/get-dictionary";

const Banner = async ({ lang }: { lang: Locale }) => {
  const { home } = await getDictionary(lang);

  return (
    <article className="relative w-full">
      <Image
        src={BannerImage}
        alt="FarmEase"
        quality={100}
        priority={true}
        className="w-full h-[550px] object-cover rounded-lg"
      />
      <div className="absolute bottom-0 left-0 px-10 py-5 flex flex-col items-start justify-start gap-8 text-white">
        <h2 className="text-3xl md:text-5xl font-semibold">{home.title}</h2>
        <h6>{home.content}</h6>
        <CustomLink href="/signup" lang={lang}>
          <Button variant="default">{home.cta}</Button>
        </CustomLink>
      </div>
    </article>
  );
};

export default Banner;
