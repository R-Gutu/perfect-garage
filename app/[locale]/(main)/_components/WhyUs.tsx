import Image from "next/image"
import { useTranslations } from "next-intl"

const WhyUs = () => {
  const t = useTranslations('whyUs');
  const whyusList = t.raw('list') as {
    title: string,
    description: string,
    image: string,
  }[];

  return (
    <section id="whyUs" className="bg-[#222222] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center sm:text-start mb-8 sm:mb-12 font-montserrat max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-montserrat">
            {t('title')}
          </h2>
          <p className="text-red-500 text-lg sm:text-xl font-semibold tracking-wide uppercase mb-2">
            {t('subtitle1')}<br />
            {t('subtitle2')}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12 font-montserrat max-w-7xl mx-auto">
            <div className="flex-shrink-0 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-md">
                <Image src="/image/whyus.png" alt={t('illustrationAlt')} width={400} height={600} className="w-full h-auto" />
            </div>
            <div className="flex flex-col w-full lg:w-2/3">
            {whyusList.map((item, index) => (
            <div key={index} className="rounded-xl cursor-pointer transition-colors duration-300 hover:bg-[#292929] flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-12 py-1">
                <div className="flex-shrink-0 flex items-center justify-center">
                    <Image
                        src={item.image} 
                        alt={item.title} 
                        width={64} 
                        height={64} 
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
                    />
                </div>
                <div className="flex flex-col flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{item.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">{item.description}</p>
                </div>
            </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default WhyUs