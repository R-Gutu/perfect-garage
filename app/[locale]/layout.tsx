import type { Metadata } from "next";
import { Inter, Manrope, Montserrat } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
// import Widget from "./_components/Widget";
import { domAnimation, LazyMotion } from "motion/react"
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter'
})

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope'
})

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: "Perfect Garage",
  description: "Diagnostică Detaliată, Soluții Rapide și Eficiente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${manrope.variable} ${inter.variable} antialiased`}>
      <GoogleTagManager gtmId="GTM-5WG3WLMM" />
      <body>
        <LazyMotion features={domAnimation}>
          <NextIntlClientProvider >
            <Header />
            {children}
            <Footer />
            {/* <Widget /> */}
          </NextIntlClientProvider>
        </LazyMotion>
      </body>
    </html>
  );
}
