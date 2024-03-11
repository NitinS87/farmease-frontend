import Help from "@/components/help";
import Categories from "@/components/rentals/categories";
import Steps from "@/components/rentals/steps";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/get-dictionary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rentals",
  description:
    "Rent your vehicle with us. We offer the best prices and the best service.",
};

export default async function Rentals({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { categories } = await getDictionary(lang);
  return (
    <main className="container flex flex-col items-start my-4 p-4 gap-5 lg:gap-10 justify-start w-full">
      <h1 className="text-3xl lg:text-4xl font-semibold -mb-4">
        {categories["main-title"]}
      </h1>
      <Categories lang={lang} />
      <Steps lang={lang} />
      <Help lang={lang} />
    </main>
  );
}
