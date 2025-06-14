'use client'
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { BsTelephone } from "react-icons/bs";

const Banner = ({ setModalOpen }: { setModalOpen: (bool: boolean) => void }) => {
  const t = useTranslations('banner');
  return (
    <div className="bg-[#222222] py-4 sm:py-8 lg:py-12 xl:py-16 px-2 sm:px-4 lg:px-6 xl:px-8">

      <div className="bg-[#FF001D] text-white p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 rounded-xl sm:rounded-2xl max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight font-montserrat">
              {t('headline')}
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl bg-white text-black"><span className='line-through'>600</span>&nbsp;{t('price')}</span>
              <br />
              <span className='text-[23px]'>{t('headline2')}</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 font-manrope pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="cursor-pointer bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-all text-sm sm:text-base w-full sm:w-auto hover:scale-105 duration-200">
                {t('bookBtn')}
              </button>
              <Link href="tel:+373(60)410999" className="flex items-center justify-center gap-2 cursor-pointer border border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-white duration-200 hover:text-red-500 transition-all text-sm sm:text-base w-full sm:w-auto hover:scale-105">
                <BsTelephone size={16} />{t('consultBtn')}
              </Link>
            </div>
          </div>
          {/* Right Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 font-manrope order-1 lg:order-2">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx}
                className={`flex flex-col sm:flex-col lg:flex-row xl:flex-col space-y-2 sm:space-y-3 lg:space-y-0 lg:space-x-4 xl:space-x-0 xl:space-y-3 items-start lg:items-center xl:items-start`}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={t(`features.${idx}.icon`)}
                    alt={t(`features.${idx}.iconAlt`)}
                    width={48}
                    height={48}
                    className="filter brightness-0 invert w-full h-full sm:w-16 sm:h-16"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{t(`features.${idx}.title`)}</h3>
                  <p className="text-xs sm:text-sm opacity-90 leading-relaxed">{t(`features.${idx}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;