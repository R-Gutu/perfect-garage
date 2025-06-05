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
        className={cn(`font-inter fixed left-0 right-0 flex justify-between items-center  px-[4%] max-[690px]:px-[8%] z-50 h-[100px] transition-transform`, { 'translate-y-[-150%]': scroll.dir === 'down' && scroll.y > 100 })}
        style={{
          backgroundColor: `rgba(0, 0, 0, ${Math.max(scroll.y / 200, 0.2)})`
        }}
      >
        <Image src='/svgs/logo.svg' width={74} height={74} alt={"logo"} />
        <div className="flex gap-10">
          <ul className="flex gap-5 items-center text-nowrap">
            <li className="cursor-pointer font-inter">DESPRE NOI</li>
            <li className="cursor-pointer font-inter">SERVICII</li>
            <li className="cursor-pointer font-inter">DE CE NOI</li>
            <li className="cursor-pointer font-inter">RECENZII</li>
            <li className="cursor-pointer font-inter">CUM LUCRĂM CU CLIENȚII</li>
            <li className="cursor-pointer font-inter">CONTACTE</li>
          </ul>
          <div className="flex items-center">
            <LanguageSwitcher className="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header