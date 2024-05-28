import React from "react";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/get-dictionary";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://farmease-frontend.vercel.app/"),
  title: "Privacy Policy",
  description:
    "Farmease is a platform that connects farmers with the best agricultural machinery and equipment. We are committed to protecting your privacy. Read our privacy policy to learn more.",
};

export default async function Privacy({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { footer } = await getDictionary(lang);
  return (
    <main className="container flex flex-col items-start my-4 p-4 gap-5 lg:gap-10 justify-start w-full">
      <h1 className="text-3xl lg:text-4xl font-semibold -mb-4">
        {footer.privacy}
      </h1>
      <p className="text-lg">
        We are committed to protecting your privacy. We will only use the
        information that we collect about you lawfully in accordance with the
        Data Protection Act 1998 and GDPR. We collect information about you for
        two reasons: firstly, to process your order and second, to provide you
        with the best possible service. We will not e-mail you in the future
        unless you have given us your consent. We will give you the chance to
        refuse any marketing email from us or from another trader in the future.
      </p>
      <p className="text-lg">
        We will never collect sensitive information about you without your
        explicit consent. The information we hold will be accurate and up to
        date. You can check the information that we hold about you by emailing
        us. If you find any inaccuracies, we will delete or correct it promptly.
      </p>
      <p className="text-lg">
        The personal information which we hold will be held securely in
        accordance with our internal security policy and the law. If we intend
        to transfer your information outside the EEA European Economic Area we
        will always obtain your consent first.
      </p>
      <p className="text-lg">
        We may use technology to track the patterns of behavior of visitors to
        our site. This can include using a &quot;cookie&quot; which would be
        stored on your browser. You can usually modify your browser to prevent
        this happening. The information collected in this way can be used to
        identify you unless you modify your browser settings.
      </p>
    </main>
  );
}
