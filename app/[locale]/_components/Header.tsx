'use client'
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import LanguageSwitcher from "./LanguageSwitcher"
import { useTranslations } from "next-intl"

const Header = () => {
  const t = useTranslations('header');

  const [scroll, setScroll] = useState({ y: 0, prevY: 0, dir: 'up' });
  const [scrollAmount, setScrollAmount] = useState({ oldScroll: 'up', amount: 0 });

  useEffect(() => {
    if (scroll.dir !== scrollAmount.oldScroll) {
      setScrollAmount({ oldScroll: scroll.dir, amount: 0 })
    } else {
      setScrollAmount(prev => ({ oldScroll: scroll.dir, amount: prev.amount + scroll.prevY - scroll.y }))
    }
  }, [scroll, scrollAmount.oldScroll])

  useEffect(() => {
    const onScroll = () => setScroll(prev => ({ y: window.pageYOffset, prevY: prev.y, dir: (prev.y - window.pageYOffset) < 0 ? 'down' : 'up' }));
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      <div
        className={cn(`font-inter fixed left-0 right-0 flex justify-between items-center pt-8 pl-[4%] pr-[12%] max-[690px]:px-[8%] z-50 h-[135px] transition-transform`, { 'translate-y-[-150%]': scroll.dir === 'down' && scroll.y > 100 })}
        style={{
          backgroundColor: `rgba(0, 61, 53, ${scroll.y / 200})`,
          boxShadow: `0px 0px 15px 20px rgba(0, 61, 53, ${scroll.y / 200})`
        }}
      >
        <Image src='/svgs/logo.svg' width={74} height={74} alt={"logo"} />
        <div className="flex gap-5 items-center">
          <LanguageSwitcher className="max-[690px]:hidden" />
        </div>
      </div>
      <div className="w-full h-[135px]"></div>
    </div>
  )
}

export default Header