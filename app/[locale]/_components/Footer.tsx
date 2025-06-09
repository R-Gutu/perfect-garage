"use client"
import Image from "next/image"
import { useTranslations } from "next-intl"

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

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="footer" className="bg-black grid grid-cols-[60%_40%] max-[800px]:grid-cols-1 max-[800px]:gap-10 mt-[50px] rounded-t-[50px] p-[40px] max-[800px]:p-[20px] font-montserrat">
      <div className="flex flex-col gap-10">
        <Image src="/svgs/footer_logo.svg" width={80} height={80} alt={t("logoAlt")} />
        <p className="text-[#8F9FA3] w-1/2 max-[800px]:w-full">{t("description")}</p>
      </div>
      <div className="flex flex-col justify-between gap-[100px] row-span-2">
        {/* i18n menu */}
        <div className="flex flex-wrap gap-2 w-full justify-between text-[#8F9FA3] max-[800px]:flex-col">
          {NAV_KEYS.map(({ key, id }) => (
            <p className="cursor-pointer" key={key} onClick={() => scrollToId(id)}>
              {t(`nav.${key}`)}
            </p>
          ))}
        </div>
        <div className="flex w-full">
          <div className="flex flex-col gap-10">
            <div>
              <p className="font-bold text-[20px]">{t("contacts.heading")}</p>
              <p className="font-bold text-[18px]">{t("contacts.phone")}</p>
              <p className="text-[#8F9FA3] text-nowrap max-[400px]:text-[12px]">
                {t("contacts.phoneNumbers.0")}<br />
                {t("contacts.phoneNumbers.1")}<br />
                {t("contacts.phoneNumbers.2")}
              </p>
            </div>
            <div>
              <p className="font-bold text-[18px]">{t("contacts.workingHours")}</p>
              <p className="text-[#8F9FA3] text-nowrap max-[400px]:text-[12px]">
                {t("contacts.workingTime.0")}<br />
                {t("contacts.workingTime.1")}
              </p>
            </div>
            <div>
              <p className="font-bold text-[18px]">{t("contacts.addresses")}</p>
              <p className="text-[#8F9FA3] text-nowrap max-[400px]:text-[12px]">
                {t("contacts.addressList.0")}<br />
                {t("contacts.addressList.1")}
              </p>
            </div>
          </div>
          <div className="self-end justify-self-end text-right w-full text-white">
            <p>{t("languagesTitle")}</p>
            <div className="flex justify-end gap-5">
              <p>{t("languageRU")}</p>
              <p className="text-[#8F9FA3]">{t("languageRO")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end">
        <div className="grid grid-cols-2 gap-2">
          <Image src="/svgs/facebook.svg" width={50} height={50} alt="facebook" className="cursor-pointer" />
          <p></p>
          <Image src="/svgs/instagram.svg" width={50} height={50} alt="instagram" className="cursor-pointer" />
          <p></p>
          <Image src="/svgs/telegram.svg" width={50} height={50} alt="telegram" className="cursor-pointer" />
          <Image src="/svgs/whatsapp.svg" width={50} height={50} alt="whatsapp" className="cursor-pointer" />
        </div>
        <div className="self-end text-center justify-self-center w-full text-[#8F9FA3] px-[15%]">
          {t("copyright")}
        </div>
      </div>
    </div>
  )
}