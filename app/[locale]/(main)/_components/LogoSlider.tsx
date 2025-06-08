'use client'
import Slider from 'react-infinite-logo-slider'
import Image from 'next/image'
import { div } from 'framer-motion/client'
export default function LogoSlider() {
    return (
        <div className='py-[30px]'>
            <p className='font-bold font-montserrat text-[45px] text-center pb-[30px]'>Servicii de întreținere și reparații ca la producătorii oficiali</p>
            <Slider
                width='4000px'
                duration={20}
                pauseOnHover={false}
                blurBorders={false}
                blurBorderColor={'#000'}
            >
                <Slider.Slide>
                    <Image src={`/svgs/cars/cars.svg`} width={4000} height={200} alt='car logo' className='h-full' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={`/svgs/cars/cars.svg`} width={4000} height={200} alt='car logo' className='h-full' />
                </Slider.Slide>
            </Slider>
        </div>
    )
}