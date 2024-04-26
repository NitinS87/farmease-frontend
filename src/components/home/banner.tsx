import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Locale } from "@/i18n.config";
import BannerImage from "../../../public/home/banner.png";
import { getDictionary } from "@/lib/get-dictionary";
import { signIn } from "@/auth";

const Banner = async ({ lang }: { lang: Locale }) => {
  const { home } = await getDictionary(lang);

  return (
    <article className="relative w-full">
      <Image
        src={BannerImage}
        alt="FarmEase"
        placeholder="blur"
        quality={100}
        priority={true}
        className="w-full h-[550px] object-cover rounded-lg"
      />
      <div className="absolute bottom-0 left-0 px-5 md:px-10 py-5 flex flex-col items-start justify-start gap-6 text-white">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-3xl md:text-5xl font-semibold">{home.title}</h2>
          <span>{home.content}</span>
        </div>
        <Button
          variant="default"
          onClick={async () => {
            "use server";
            await signIn();
          }}
        >
          {home.cta}
        </Button>
      </div>
    </article>
  );
};

export default Banner;
