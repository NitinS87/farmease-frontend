import CustomLink from "@/components/custom-link";
import Jobs from "@/components/hiring/jobs";
import { Button } from "@/components/ui/button";
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
    <main className="container flex flex-col items-start p-4 gap-5 lg:gap-8 justify-start w-full min-h-[calc(100%_-_8rem)]">
      <div className="space-y-3">
        <h2 className="text-3xl lg:text-4xl font-semibold">{jobs.title}</h2>
        <p className="text-lg">{jobs.content}</p>
      </div>
      <Jobs lang={params.lang} />
      {/* Want to create a Job */}
      <div className="space-y-3">
        <h2 className="text-3xl lg:text-4xl font-semibold">{jobs.create}</h2>
        <p className="text-lg">{jobs.create_content}</p>
        <CustomLink lang={params.lang} href="/hiring/create">
          <Button variant={"default"}>{jobs.create}</Button>
        </CustomLink>
      </div>
    </main>
  );
};

export default Hiring;
