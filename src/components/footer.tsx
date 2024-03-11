import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/get-dictionary";
import React from "react";
import CustomLink from "./custom-link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = async ({ lang }: { lang: Locale }) => {
  const { footer } = await getDictionary(lang);
  const year = new Date().getFullYear();
  return (
    <footer className="flex items-end justify-between py-2 px-4 font-light text-xs md:text-sm lg:text-base">
      <div className="flex items-center space-x-4">
        <span>
          &copy; {year} {footer.content}
        </span>
        <CustomLink
          href="/"
          lang={lang}
          className="hover:underline underline-offset-2 hidden lg:inline-block"
        >
          {footer.home}
        </CustomLink>
        <CustomLink
          href="/marketplace"
          lang={lang}
          className="hover:underline underline-offset-2 hidden lg:inline-block"
        >
          {footer.marketplace}
        </CustomLink>
        <CustomLink
          href="/rental"
          lang={lang}
          className="hover:underline underline-offset-2 hidden lg:inline-block"
        >
          {footer.rental}
        </CustomLink>
        <CustomLink
          href="/jobs"
          lang={lang}
          className="hover:underline underline-offset-2 hidden lg:inline-block"
        >
          {footer.jobs}
        </CustomLink>
        <CustomLink
          href="/contact"
          lang={lang}
          className="hover:underline underline-offset-2 hidden lg:inline-block"
        >
          {footer.contact}
        </CustomLink>
      </div>
      <div className="flex items-center space-x-4">
        {/* Email */}
        <div className="hidden lg:flex items-center space-x-4">
          <Input
            type="email"
            placeholder={footer["enter-email"]}
            className="h-9"
          />
          <Button variant="default" size={"sm"}>
            {footer.subscribe}
          </Button>
        </div>
        <CustomLink
          href="/privacy"
          lang={lang}
          className="hover:underline underline-offset-2"
        >
          {footer.privacy}
        </CustomLink>
        <CustomLink
          href="/terms"
          lang={lang}
          className="hover:underline underline-offset-2"
        >
          {footer.terms}
        </CustomLink>
      </div>
    </footer>
  );
};

export default Footer;
