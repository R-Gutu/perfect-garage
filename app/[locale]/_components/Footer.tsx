"use client"
import Image from "next/image"
import Link from "next/link";
import { useTranslations } from "next-intl"
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

const NAV_KEYS = [
  { key: "about", id: "about" },
  { key: "services", id: "services" },
  { key: "whyUs", id: "whyUs" },
  { key: "reviews", id: "testimonials" },
  { key: "howWeWork", id: "howWeWork" },
  { key: "contact", id: "footer" }
];

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="footer" className="bg-black grid grid-cols-[50%_50%] max-[800px]:grid-cols-1 max-[800px]:gap-10 mt-[50px] rounded-t-[50px] p-[40px] max-[800px]:p-[20px] font-montserrat overflow-hidden">
      <div className="flex flex-col gap-10 animate-[slideInLeft_0.8s_ease-out]">
        <div className="">
          <Image src="/svgs/footer_logo.svg" width={80} height={80} alt={t("logoAlt")} />
        </div>
        <p className="text-[#8F9FA3] w-1/2 max-[800px]:w-full ">
          {t("description")}
        </p>
      </div>

      <div className="flex flex-col justify-between gap-[100px] row-span-2 animate-[slideInRight_0.8s_ease-out]">
        {/* i18n menu */}
        <div className="flex flex-wrap items-center min-[800px]:gap-y-10 max-[1290px]:grid max-[1290px]:grid-cols-3 max-[800px]:flex max-[800px]:items-start gap-2 w-full justify-between text-[#8F9FA3] max-[800px]:flex-col">
          {NAV_KEYS.map(({ key, id }, index) => (
            <p
              className="cursor-pointer text-center max-[800px]:text-left relative transition-all duration-300 hover:text-white hover:scale-105 hover:-translate-y-1 group max-w-[200px]"
              key={key}
              onClick={() => scrollToId(id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {t(`nav.${key}`)}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>
          ))}
        </div>

        <div className="flex w-full">
          <div className="flex flex-col gap-10">
            <div className="transform transition-all duration-300 hover:translate-x-2 hover:scale-105 group">
              <p className="font-bold text-[20px] transition-colors duration-300 group-hover:text-blue-400 text-white">
                {t("contacts.heading")}
              </p>

              <p className="font-bold text-[18px] transition-colors duration-300 group-hover:text-green-400 text-white">
                {t("contacts.phone")}
              </p>
              <Link href={"tel:+37360410999"} className="text-[#8F9FA3] text-nowrap max-[400px]:text-[12px] transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                {t("contacts.phoneNumbers.0")}
              </Link>
              <div className="flex gap-4 mt-4">
                <Link target="blank" href="https://www.facebook.com/perfectgarage.md/" className="transform transition-all duration-300 hover:scale-125 hover:rotate-12 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] cursor-pointer">
                  <Image src="/svg/facebook.svg" width={50} height={50} alt="facebook" />
                </Link>
                <Link target="blank" href="https://www.instagram.com/perfect.garage.md/" className="transform transition-all duration-300 hover:scale-125 hover:rotate-12 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.7)] cursor-pointer">
                  <Image src="/svg/instagram.svg" width={50} height={50} alt="instagram" />
                </Link>
                <Link target="blank" href={"https://wa.me/37360410999"} className="transform transition-all duration-300 hover:scale-125 hover:rotate-12 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.7)] cursor-pointer">
                  <Image src="/svg/whatsapp.svg" width={50} height={50} alt="whatsapp" />
                </Link>
              </div>
            </div>

            <div className="transform transition-all duration-300 hover:translate-x-2 hover:scale-105 group">
              <p className="font-bold text-[18px] transition-colors duration-300 text-white group-hover:text-yellow-400">
                {t("contacts.workingHours")}
              </p>
              <p className="text-[#8F9FA3] text-nowrap max-[400px]:text-[12px] transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                {t("contacts.workingTime.0")}<br />
                {t("contacts.workingTime.1")}
              </p>
            </div>

            <div className="transform transition-all duration-300 hover:translate-x-2 hover:scale-105 group">
              <p className="font-bold text-[18px] transition-colors duration-300 group-hover:text-purple-400 text-white">
                {t("contacts.addresses")}
              </p>
              <p className="text-[#8F9FA3] text-nowrap max-[400px]:text-[12px] transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                <Link href={"https://maps.app.goo.gl/c92TEf83FD8EVgrQ6"}>{t("contacts.addressList.0")}</Link> <br />
                <Link href={"https://maps.app.goo.gl/itDLJ8koM8G3KSDt9"}>{t("contacts.addressList.1")}</Link>
              </p>
            </div>
          </div>
          <div className="self-end justify-self-end text-right w-full text-white">
            <p className="">
              {t("languagesTitle")}
            </p>
            <div className="flex justify-end gap-5">
              <Link href="/ru" className={cn(`text-[#8F9FA3] cursor-pointer transition-all duration-300 hover:text-blue-400 hover:scale-110 hover:-translate-y-1`, { 'text-white': locale === "ru" })}>
                {t("languageRU")}
              </Link>
              <Link href="/ro" className={cn(`text-[#8F9FA3] cursor-pointer transition-all duration-300 hover:text-blue-400 hover:scale-110 hover:-translate-y-1`, { 'text-white': locale === "ro" })}>
                {t("languageRO")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center animate-[slideInUp_0.8s_ease-out] max-[800px]:justify-center">
        <div className="max-[800px]:text-center w-full text-[#8F9FA3] pr-[15%] max-[800px]:px-[15%]">
          {t.rich("copyright", {
            link: (chunks) => <Link className="hover:text-[#836FFF] transition-all duration-700" href={"https://www.quant-apps.com/"} target="blank">{chunks}</Link>
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}