import { Locale } from "@/i18n.config";
import React from "react";
import {
  ArrowRightCircle,
  ListCollapse,
  RectangleEllipsis,
  SquareMousePointer,
  WalletCards,
  WalletMinimal,
} from "lucide-react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { getDictionary } from "@/lib/get-dictionary";
const Steps = async ({ lang }: { lang: Locale }) => {
  const stepsImg = [
    {
      img: RectangleEllipsis,
    },
    {
      img: SquareMousePointer,
    },
    {
      img: WalletCards,
    },
    {
      img: ListCollapse,
    },
    {
      img: WalletMinimal,
    },
    {
      img: ArrowRightCircle,
    },
    {
      img: ReloadIcon,
    },
  ];

  const { steps } = await getDictionary(lang);
  return (
    <article className="flex flex-col gap-5 w-full">
      <div className="space-y-1">
        <h3 className="text-2xl">{steps.title}</h3>
        <h6>{steps.content}</h6>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 items-start justify-start w-full">
        {stepsImg.map((step, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-start w-full border rounded-lg p-4 duration-300 transform hover:scale-105 hover:shadow-lg ease-in-out"
          >
            <step.img
              width={40}
              height={40}
              strokeWidth={1.2}
              className="rounded-lg w-full"
            />
            <h5 className="text-base text-green-600">
              {(steps as { [key: string]: string })[`step${index + 1}-title`]}
            </h5>
            <span className="text-xs md:text-sm">
              {(steps as { [key: string]: string })[`step${index + 1}-content`]}
            </span>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Steps;
