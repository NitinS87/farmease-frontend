import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { Locale } from "@/i18n.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FarmEase",
  description:
    "FarmEase - One stop solution for all your farming needs. Hire skilled labour, rent vehicles and buy/sell farm products.",
};

export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "hi" }];
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header lang={params.lang} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}