import { cn } from "@/lib/utils";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Hero = ({ setModalOpen }: { setModalOpen: (bool: boolean) => void }) => {
  const t = useTranslations('hero');
  return (
    <div className="min-h-screen w-full relative flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src='/image/heroBG.png'
          fill
          alt={t("bgAlt")}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className={cn("max-w-7xl mx-auto", "max-md:flex max-md:justify-center")}>
          <div className="">
            <div className="w-fit bg-[url('/image/redBG.png')] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-8 mb-4 sm:mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide font-montserrat text-center">
                {t("brand")}
              </h1>
            </div>

            <h2 className="ml-2 sm:ml-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight uppercase font-montserrat w-full">
              {t("headline1")} <br />
              <span className="block sm:inline">{t("headline3")}</span>
            </h2>

            <p className="ml-2 sm:ml-4 text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-10 md:mb-12 leading-relaxed font-montserrat font-semibold max-w-xl lg:max-w-2xl">
              {t("subtitle")}
            </p>

            <div className="ml-2 sm:ml-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-2 cursor-pointer bg-red-600 hover:bg-red-700 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-white group text-sm sm:text-base hover:scale-105">
                <span className="font-manrope">{t("bookBtn")}</span>
                <MdKeyboardArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>

              <Link href="tel:+373(60)410999" className="w-full sm:w-auto flex items-center justify-center sm:justify-start cursor-pointer bg-transparent border border-gray-400 hover:bg-white hover:text-gray-800 transition-all duration-300 rounded-xl sm:rounded-2xl font-semibold text-white text-sm sm:text-base hover:scale-105 font-manrope h-full gap-3 px-6 sm:px-8 py-3 sm:py-4 ">
                  <BsTelephone size={16} />
                  {t("consultBtn")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent z-10"></div>
    </div>
  )
}

export default Hero