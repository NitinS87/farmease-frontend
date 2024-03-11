import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/get-dictionary";
import React, { FC } from "react";
import CustomLink from "../custom-link";
import Image from "next/image";
import SaveTime from "../../../public/home/reason/save-time.png";
import IncreaseYield from "../../../public/home/reason/increase-yield.png";
import Efficiency from "../../../public/home/reason/efficiency.png";
import Sustainability from "../../../public/home/reason/sustainability.png";

type ReasonProps = {
  lang: Locale;
};

const Reason: FC<ReasonProps> = async ({ lang }) => {
  const { why } = await getDictionary(lang);

  const reasons = [
    {
      img: IncreaseYield,
    },
    {
      img: SaveTime,
    },
    {
      img: Sustainability,
    },
    {
      img: Efficiency,
    },
  ];
  return (
    <article className="flex flex-col gap-5 w-full">
      <h2 className="text-3xl font-semibold">{why.title}</h2>
      <h6>{why.content}</h6>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-5 items-start justify-start w-full">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-start w-full"
          >
            <Image
              src={reason.img}
              alt={
                (why as { [key: string]: string })[`benefit${index + 1}-title`]
              }
              placeholder="blur"
              className="rounded-lg w-full"
            />
            <h5 className="text-base">
              {(why as { [key: string]: string })[`benefit${index + 1}-title`]}
            </h5>
            <span className="text-green-400 text-xs md:text-sm">
              {
                (why as { [key: string]: string })[
                  `benefit${index + 1}-content`
                ]
              }
            </span>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Reason;
