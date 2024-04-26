"use client";
import { Locale } from "@/i18n.config";
import React from "react";
import CustomLink from "./custom-link";
import { getDictionary } from "@/lib/get-dictionary";
import { Button } from "./ui/button";
import { MobileModeToggle } from "./mode-toggle";
import LocaleSwitcher from "./locale-switcher";
import { signOut, useSession } from "next-auth/react";
import { LogOut } from "lucide-react";
const MobileNavbar = ({
  navigation,
  lang,
}: {
  navigation: Awaited<ReturnType<typeof getDictionary>>["navigation"];
  lang: Locale;
}) => {
  const session = useSession();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="flex-col justify-center flex z-40 w-6 h-8 lg:hidden focus:outline-none transition-all duration-300 ease-out gap-1"
        onClick={handleClick}
        name="menu"
      >
        <span
          className={`bg-[#474747] dark:bg-white transition-all duration-300 ease-out block h-[2.5px] w-6 rounded-sm ${
            isOpen
              ? "rotate-45 translate-y-[3px] bg-[#1f1f1f] dark:bg-white"
              : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-[#474747] dark:bg-white transition-all duration-300 ease-out block h-[2.5px] w-6 rounded-sm ${
            isOpen
              ? "-rotate-45 -translate-y-[3px] bg-[#1f1f1f] dark:bg-white"
              : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-accent/60 z-10`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center space-y-5">
            <CustomLink lang={lang} href="/">
              <Button
                variant={"link"}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-accent-foreground"
              >
                FarmEase
              </Button>
            </CustomLink>
            <CustomLink
              lang={lang}
              href="/hiring"
              className="hover:underline underline-offset-2 text-accent-foreground"
            >
              <Button
                variant={"link"}
                onClick={() => setIsOpen(false)}
                className="text-accent-foreground text-lg"
              >
                {navigation.hiring}
              </Button>
            </CustomLink>
            <CustomLink
              lang={lang}
              href="/marketplace/seeds"
              className="hover:underline underline-offset-2"
            >
              <Button
                variant={"link"}
                onClick={() => setIsOpen(false)}
                className="text-accent-foreground text-lg"
              >
                {navigation.marketplace}
              </Button>
            </CustomLink>
            <CustomLink
              lang={lang}
              href="/rental"
              className="hover:underline underline-offset-2"
            >
              <Button
                variant={"link"}
                onClick={() => setIsOpen(false)}
                className="text-accent-foreground text-lg"
              >
                {navigation.rental}
              </Button>
            </CustomLink>
            <CustomLink
              lang={lang}
              href="/ai"
              className="hover:underline underline-offset-2"
            >
              <Button
                variant={"link"}
                onClick={() => setIsOpen(false)}
                className="text-accent-foreground text-lg"
              >
                {navigation.ai}
              </Button>
            </CustomLink>
            <MobileModeToggle />
            <LocaleSwitcher lang={lang} />
            {!session ? (
              <>
                <CustomLink href="/signup" lang={lang}>
                  <Button variant={"default"} onClick={() => setIsOpen(false)}>
                    {navigation.signup}
                  </Button>
                </CustomLink>
                <CustomLink href="/login" lang={lang}>
                  <Button variant={"outline"} onClick={() => setIsOpen(false)}>
                    {navigation.login}
                  </Button>
                </CustomLink>
              </>
            ) : (
              // Logout Button
              <Button
                onClick={() => async () => {
                  await signOut({ redirect: false });
                }}
                className="flex w-full items-center"
              >
                <LogOut className="mr-2 h-4 w-4" /> Sign Out
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
