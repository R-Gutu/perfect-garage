import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations('services');
  const serviceCount = 8;

  return (
    <section id="services" className="bg-[#222222] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center sm:text-end mb-8 sm:mb-12 font-montserrat">
          <p className="text-red-500 text-lg sm:text-xl font-semibold tracking-wide uppercase mb-2">
            {t('subtitle')}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-montserrat">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 font-manrope">
          {Array.from({ length: serviceCount }).map((_, idx) => {
            const featured = !!t.raw(`list.${idx}.featured`);
            return (
              <div
                key={idx}
                className={`relative group cursor-pointer transition-all duration-300 hover:scale-105 ${
                  featured 
                    ? 'bg-red-600 hover:bg-red-700 sm:col-span-2 lg:col-span-1' 
                    : 'bg-[#1E1E1E] hover:bg-[#1E1E1E]/80'
                } rounded-2xl sm:rounded-4xl overflow-hidden p-4 sm:p-6`}
              >
                <div className="flex flex-col relative h-full min-h-[180px] sm:min-h-[200px] lg:min-h-[220px]">
                  <div className="flex items-start justify-between mb-2 sm:mb-4">
                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-4 leading-tight font-montserrat pr-2">
                      {t(`list.${idx}.title`)}
                    </h3>
                    {t.raw(`list.${idx}.hasDiscount`) && (
                      <div className="z-10 flex-shrink-0">
                        <span className={cn(
                          "text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full whitespace-nowrap",
                          featured ? 'bg-[#141414]' : 'bg-red-600'
                        )}>
                          {t('discount')}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-auto z-10 relative">
                    <p className={`text-sm sm:text-base font-semibold ${
                      featured ? 'text-white' : 'text-gray-300'
                    }`}>
                      {t(`list.${idx}.price`)}
                    </p>
                  </div>
                </div>
                  
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 sm:w-2/3 sm:h-2/3 lg:w-3/5 lg:h-3/5">
                  <Image
                    src={t(`list.${idx}.image`)}
                    alt={t(`list.${idx}.title`)}
                    fill
                    className="object-contain object-bottom-right"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
              </div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Services;