import { ReactElement, useState } from "react"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Slide {
    title: string
    description: string
    image: string
}

export default function Carousel({ slides }: { slides: Slide[] }) {
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
            <div className="grid grid-cols-[40%_60%] w-[80%]">
                <div className="flex w-full justify-center items-center gap-2">
                    {slides.map((e, i) => <div
                        key={i}
                        className={cn(`bg-[#FF001D] w-[12px] h-[12px] rounded-full cursor-pointer`, { 'bg-[#0000004D]': currentSlide !== i })}
                        onClick={() => instanceRef.current?.moveToIdx(i)}
                    ></div>)}
                </div>
                <div>
                    <p className="text-[#FF001D] text-right">DESPRE NOI</p>
                    <p className="text-[50px] font-playfair font-bold text-white text-right mb-10 max-[550px]:text-[35px] whitespace-pre">{slides[currentSlide].title}</p>
                </div>
            </div>
            <div className="grid grid-cols-[10%_80%_10%] w-full">
                <div className="self-center flex justify-center">
                    <Image
                        onClick={() => instanceRef.current?.prev()}
                        src="/svgs/leftArrow.svg"
                        height={25}
                        width={15}
                        alt="right arrow"
                        className="cursor-pointer"
                    />
                </div>
                <div ref={sliderRef} className="keen-slider flex w-full ">
                    {slides.map((s, i) => (<div key={i} className='w-full keen-slider__slide grid grid-cols-2'>
                        <p className="whitespace-pre-wrap z-20 self-center py-[60px] pl-[60px] text-[#DCDCDC]">{s.description}</p>
                        <Image
                            src={"/svgs/gray_thing.svg"}
                            width={"1000"}
                            height={"700"}
                            alt='gray shape'
                            className="absolute z-10 top-0 bottom-0 left-0 w-[80%] h-full pr-[0] object-cover object-right"
                        />
                        <div className="rounded-[25px]  w-full self-end justify-self-end overflow-hidden pt-[10%] pb-[1%] flex justify-end">
                            <Image src={s.image} width={786} height={540} alt={s.title} className="object-cover w-full" />
                        </div>
                    </div>))}
                </div>
                <div className="self-center flex justify-center">
                    <Image
                        onClick={() => instanceRef.current?.next()}
                        src="/svgs/rightArrow.svg"
                        height={25}
                        width={15}
                        alt="right arrow"
                        className="cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}