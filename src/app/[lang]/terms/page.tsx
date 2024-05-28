import React from "react";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/get-dictionary";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://farmease-frontend.vercel.app/"),
  title: "Terms of Service",
  description:
    "Farmease is a platform that connects farmers with the best agricultural machinery and equipment. Read our terms of service to learn more.",
};

export default async function Terms({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { footer } = await getDictionary(lang);
  return (
    <main className="container flex flex-col items-start my-4 p-4 gap-5 lg:gap-10 justify-start w-full">
      <h1 className="text-3xl lg:text-4xl font-semibold -mb-4">
        {footer.terms}
      </h1>
      <ul className="list-disc pl-6">
        <li className="text-lg">
          By using the Farmease website, you agree to the following terms of
          service:
        </li>
        <li className="text-lg">
          You must be at least 18 years old to use the website.
        </li>
        <li className="text-lg">
          You must provide accurate and complete information when creating an
          account.
        </li>
        <li className="text-lg">
          You are responsible for maintaining the security of your account
          password.
        </li>
        <li className="text-lg">
          You are responsible for all activities that occur under your account.
        </li>
        <li className="text-lg">
          You may not use the website for any illegal or unauthorized purpose.
        </li>
        <li className="text-lg">
          You may not use the website to harass, abuse, or harm others.
        </li>
        <li className="text-lg">
          You may not use the website to send spam or other unsolicited
          messages.
        </li>
        <li className="text-lg">
          You may not use the website to transmit any viruses or other harmful
          code.
        </li>
        <li className="text-lg">
          You may not use the website to violate any laws in your jurisdiction.
        </li>
        <li className="text-lg">
          You may not use the website to infringe upon the intellectual property
          rights of others.
        </li>
        <li className="text-lg">
          You may not use the website to impersonate any person or entity.
        </li>
        <li className="text-lg">
          You may not use the website to collect or store personal data about
          other users.
        </li>
        <li className="text-lg">
          You may not use the website to interfere with its operation.
        </li>
        <li className="text-lg">
          You may not use the website to engage in any other activity that
          violates the terms of service.
        </li>
      </ul>
    </main>
  );
}
