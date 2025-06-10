'use client'
import Slider from 'react-infinite-logo-slider'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function LogoSlider() {
    const t = useTranslations('logoSlider')
    return (
        <div className='py-[30px]'>
            <p className='text-white font-bold font-montserrat px-3 text-center pb-[30px] text-[25px] sm:text-[30px] sm:px-[15%] md:text-[45px]'>
                {t('title')}
            </p>
            <Slider
                width='4000px'
                duration={80}
                pauseOnHover={false}
                blurBorders={false}
                blurBorderColor={'#000'}
            >
                <Slider.Slide>
                    <Image src={`/svgs/cars/cars.svg`} width={4000} height={200} alt={t('carsAlt')} className='h-full' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={`/svgs/cars/cars.svg`} width={4000} height={200} alt={t('carsAlt')} className='h-full' />
                </Slider.Slide>
            </Slider>
        </div>
    )
}