import Jobs from "@/components/hiring/jobs";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/get-dictionary";
import React from "react";

const Hiring = async ({
  params,
}: {
  params: {
    lang: Locale;
  };
}) => {
  const { jobs } = await getDictionary(params.lang);
  return (
    <main className="container flex flex-col items-start p-4 gap-5 lg:gap-8 justify-start w-full">
      <div className="space-y-3">
        <h2 className="text-3xl lg:text-4xl font-semibold">{jobs.title}</h2>
        <p className="text-lg">{jobs.content}</p>
      </div>
      <Jobs lang={params.lang} />
    </main>
  );
};

export default Hiring;
