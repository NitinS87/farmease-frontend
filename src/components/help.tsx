import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/get-dictionary";
import React from "react";
import { Button } from "./ui/button";
import CustomLink from "./custom-link";

const Help = async ({ lang }: { lang: Locale }) => {
  const { help } = await getDictionary(lang);
  return (
    <div className="flex flex-col items-start gap-5 w-full">
      <div className="space-y-1">
        <h5 className="text-3xl">{help.title}</h5>
        <p>{help.content}</p>
      </div>
      <CustomLink href="/contact" lang={lang}>
        <Button variant={"outline"}>{help["help-cta"]}</Button>
      </CustomLink>
    </div>
  );
};

export default Help;
