import { ReactElement, useState } from "react"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

interface Slide {
    title: string
    description: string
    image: string
}

export default function Carousel({ slides }: { slides: Slide[] }) {
    const t = useTranslations('carousel');
    const [currentSlide, setCurrentSlide] = useState(0)

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            initial: 0,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            loop: true
        },
        [
            // add plugins here
        ]
    )

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex justify-between max-[940px]:grid-cols-1 w-[80%] mb-[35px]">
                <div className="flex w-[50%] justify-center items-center gap-2 max-[940px]:hidden">
                    {slides.map((e, i) => <div
                        key={i}
                        className={cn(`bg-[#FF001D] w-[12px] h-[12px] rounded-full cursor-pointer`, { 'bg-[#0000004D]': currentSlide !== i })}
                        onClick={() => instanceRef.current?.moveToIdx(i)}
                    ></div>)}
                </div>
                <div className="w-full text-center sm:text-end mb-8 sm:mb-12 font-montserrat">
                    <p className="text-red-500 text-lg sm:text-xl font-semibold tracking-wide uppercase mb-2">
                        {t('about-us')}
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-montserrat">
                        {slides[currentSlide].title}
                    </h2>
                </div>
                {/* <div className=" font-montserrat">
                    <p className="text-[#FF001D] text-[20px] text-right">{}</p>
                    <p className="text-[50px] max-[1060px]:text-[40px] max-[650px]:text-[30px] font-playfair font-bold text-white text-right mb-10 whitespace-pre max-[500px]:text-[25px] max-[400px]:text-[20px]">{slides[currentSlide].title}</p>
                </div> */}
            </div>
            <div className="grid grid-cols-[10%_80%_10%] max-[940px]:grid-cols-1 w-full">
                <div className="self-center flex justify-center max-[940px]:hidden">
                    <Image
                        onClick={() => instanceRef.current?.prev()}
                        src="/svgs/leftArrow.svg"
                        height={25}
                        width={25}
                        alt="right arrow"
                        className="cursor-pointer"
                    />
                </div>
                <div ref={sliderRef} className="keen-slider flex w-full">
                    {slides.map((s, i) => (<div key={i} className='w-full keen-slider__slide grid grid-cols-2 max-[940px]:grid-cols-1'>
                        <p className="whitespace-pre-wrap z-20 self-center py-[60px] pl-[60px] max-[940px]:px-[20px] text-[#DCDCDC]">{s.description}</p>
                        <Image
                            src={"/svgs/gray_thing.svg"}
                            width={1000}
                            height={1000}
                            alt='gray shape'
                            className="max-[940px]:hidden absolute z-10 top-0 bottom-0 left-0 w-[80%] h-full pr-[0] object-cover object-right"
                        />
                        <div className="max-[940px]:order-first rounded-[25px] w-full self-end justify-self-end overflow-hidden h-[90%] mb-[1%] flex justify-end">
                            <Image src={s.image} width={786} height={540} alt={s.title} className="object-cover h-full w-full" />
                        </div>
                    </div>))}
                </div>
                <div className="self-center flex justify-center max-[940px]:hidden">
                    <Image
                        onClick={() => instanceRef.current?.next()}
                        src="/svgs/rightArrow.svg"
                        height={25}
                        width={25}
                        alt="right arrow"
                        className="cursor-pointer"
                    />
                </div>
            </div>
            <div className="flex w-full justify-center items-center gap-2">
                {slides.map((e, i) => <div
                    key={i}
                    className={cn(`bg-[#FF001D] w-[12px] h-[12px] rounded-full cursor-pointer`, { 'bg-[#0000004D]': currentSlide !== i })}
                    onClick={() => instanceRef.current?.moveToIdx(i)}
                ></div>)}
            </div>
        </div>
    )
}