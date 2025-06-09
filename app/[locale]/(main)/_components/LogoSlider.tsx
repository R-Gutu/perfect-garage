'use client'
import Slider from 'react-infinite-logo-slider'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function LogoSlider() {
    const t = useTranslations('logoSlider')
    return (
        <div className='py-[30px]'>
            <p className='font-bold font-montserrat text-[45px] text-center pb-[30px]'>{t('title')}</p>
            <Slider
                width='4000px'
                duration={20}
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