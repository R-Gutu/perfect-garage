'use client'
import Carousel from './Carousel';
import { useTranslations } from 'next-intl';

export default function Slides() {
    const t = useTranslations('aboutSlides');

    const slideCount = t.raw('slides').length;

    const slides = Array.from({ length: slideCount }).map((_, idx) => ({
        title: t(`slides.${idx}.title`),
        description: t(`slides.${idx}.description`),
        image: t(`slides.${idx}.image`)
    }));

    return (
        <div id='about' className='flex flex-col justify-center items-center py-20 w-full relative overflow-hidden'>
            <Carousel slides={slides} />
            <div className='text-white max-[940px]:translate-y-[15px] translate-y-[-15px] grid grid-cols-4 max-[700px]:grid-cols-2 max-[500px]:grid-cols-1 w-full bg-[linear-gradient(180deg,_#FF001D_0%,_#59010B_178.69%)] font-montserrat'>
                <div className='flex flex-col items-center text-center'>
                    <p className='font-bold text-[80px] max-[900px]:text-[60px]'>{t("stats.0.value")}</p>
                    <p className='translate-y-[-15px]'>{t("stats.0.label")}</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <p className='font-bold text-[80px] max-[900px]:text-[60px]'>{t("stats.1.value")}</p>
                    <p className='translate-y-[-15px]'>{t("stats.1.label")}</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <p className='font-bold text-[80px] max-[900px]:text-[60px]'>{t("stats.2.value")}</p>
                    <p className='translate-y-[-15px]'>{t("stats.2.label")}</p>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <p className='font-bold text-[80px] max-[900px]:text-[60px]'>{t("stats.3.value")}</p>
                    <p className='translate-y-[-15px]'>{t("stats.3.label")}</p>
                </div>
            </div>
        </div>
    )
}