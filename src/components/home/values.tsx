import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/get-dictionary";
import { Handshake, Heart, LineChart, ShieldCheck, Users } from "lucide-react";
import React from "react";

const Values = async ({ lang }: { lang: Locale }) => {
  const { values } = await getDictionary(lang);

  const items = [
    {
      icons: <Heart />,
    },
    {
      icons: <Globe />,
    },
    {
      icons: <LineChart />,
    },
    {
      icons: <Handshake />,
    },
    {
      icons: <Users />,
    },
    {
      icons: <ShieldCheck />,
    },
  ];
  return (
    <article className="flex flex-col gap-5 w-full">
      <h2 className="text-3xl font-semibold">{values.title}</h2>
      <h6>{values.content}</h6>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-5 items-start justify-start w-full">
        {items.map((value, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-start w-full border rounded-2xl p-4 hover:scale-105 duration-300 ease-in-out"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full">
              {value.icons}
            </div>
            <h5 className="text-base">
              {(values as { [key: string]: string })[`value${index + 1}-title`]}
            </h5>
            <span className="text-xs md:text-sm">
              {
                (values as { [key: string]: string })[
                  `value${index + 1}-content`
                ]
              }
            </span>
          </div>
        ))}
      </section>
    </article>
  );
};

export function Globe(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Vector - 0"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C15.3848 19.75 19.75 15.3848 19.75 10C19.7443 4.61758 15.3824 0.255684 10 0.25ZM18.25 10C18.2508 11.0584 18.0471 12.107 17.65 13.0881L13.4594 10.5109C13.2812 10.401 13.0819 10.3298 12.8744 10.3019L10.735 10.0131C10.1323 9.93453 9.54117 10.2249 9.235 10.75H8.4175L8.06125 10.0131C7.86166 9.59732 7.48093 9.29723 7.03 9.20031L6.28 9.03813L7.01313 7.75H8.57969C8.83318 7.7495 9.08245 7.68501 9.30437 7.5625L10.4528 6.92875C10.5537 6.87251 10.648 6.80522 10.7341 6.72812L13.2569 4.44625C13.7779 3.97931 13.9049 3.21324 13.5625 2.60313L13.5288 2.54219C16.4101 3.90842 18.2477 6.81115 18.25 10ZM11.4353 1.87562L12.25 3.33437L9.72719 5.61625L8.57969 6.25H7.01313C6.47644 6.24921 5.98022 6.53521 5.71187 7L4.89344 8.42781L3.94187 5.89281L4.9675 3.4675C6.80317 2.04914 9.15178 1.47049 11.4362 1.87375L11.4353 1.87562ZM1.75 10C1.74875 8.77377 2.02233 7.56284 2.55062 6.45625L3.61375 9.29406C3.79378 9.77151 4.20418 10.1247 4.70312 10.2316L6.71219 10.6637L7.06938 11.4062C7.32224 11.9214 7.84551 12.2484 8.41938 12.25H8.55812L7.88031 13.7716C7.63621 14.3192 7.74165 14.9596 8.14844 15.4L8.16156 15.4131L10 17.3069L9.81812 18.2444C5.33749 18.1401 1.75743 14.4818 1.75 10ZM11.3669 18.1356L11.4728 17.5909C11.5611 17.1217 11.422 16.6384 11.0978 16.2878C11.0932 16.2837 11.0888 16.2793 11.0847 16.2747L9.25 14.3819L10.5344 11.5L12.6737 11.7887L16.96 14.425C15.7042 16.3971 13.6721 17.7453 11.3669 18.1356Z"
        fill="white"
      />
    </svg>
  );
}

export default Values;