import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import LocaleSwitcher from "./locale-switcher";
import CustomLink from "./custom-link";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/get-dictionary";
import MobileNavbar from "./mobile-navbar";

const Header = async ({ lang }: { lang: Locale }) => {
  const { navigation } = await getDictionary(lang);

  return (
    <nav className="flex items-center h-12 md:h-16 px-5 lg:px-10 py-3 justify-between gap-5 border-b">
      <CustomLink
        href="/"
        lang={lang}
        className="text-lg md:text-2xl font-bold"
      >
        FarmEase
      </CustomLink>
      <div className="hidden lg:flex items-center space-x-5">
        <CustomLink
          href="/hiring"
          lang={lang}
          className="hover:underline underline-offset-2"
        >
          {navigation.hiring}
        </CustomLink>
        <CustomLink
          href="/marketplace"
          lang={lang}
          className="hover:underline underline-offset-2"
        >
          {navigation.marketplace}
        </CustomLink>
        <CustomLink
          href="/rental"
          lang={lang}
          className="hover:underline underline-offset-2"
        >
          {navigation.rental}
        </CustomLink>
        <ModeToggle />
        <LocaleSwitcher lang={lang} />
        <CustomLink href="/signup" lang={lang}>
          <Button variant={"default"}>{navigation.signup}</Button>
        </CustomLink>
        <CustomLink href="/login" lang={lang}>
          <Button variant={"outline"}>{navigation.login}</Button>
        </CustomLink>
      </div>
      <MobileNavbar lang={lang} navigation={navigation} />
    </nav>
  );
};

export default Header;
