import Banner from "@/components/home/banner";
import Offer from "@/components/home/offer";
import { Locale } from "@/i18n.config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main className="container flex flex-col items-start my-5 p-4 gap-10 justify-start w-full">
      <Banner lang={lang} />
      <Offer lang={lang} />
    </main>
  );
}
