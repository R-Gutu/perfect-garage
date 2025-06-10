'use client'
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import LanguageSwitcher from "./LanguageSwitcher"
import { useTranslations } from "next-intl"

const NAV_ITEMS = [
  { key: "about", id: "about" },
  { key: "services", id: "services" },
  { key: "whyUs", id: "whyUs" },
  { key: "reviews", id: "testimonials" },
  { key: "howWeWork", id: "howWeWork" },
  { key: "contact", id: "footer" }
];

const Header = () => {
  const t = useTranslations('header');

  const [scroll, setScroll] = useState({ y: 0, prevY: 0, dir: 'up' });
  const [scrollAmount, setScrollAmount] = useState({ oldScroll: 'up', amount: 0 });
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToId = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <div className="relative">
      <div
        className={cn(`font-inter fixed left-0 right-0 flex justify-between items-center px-[4%] max-[690px]:px-[8%] z-50 h-[100px] transition-transform`, { 'translate-y-[-150%]': scroll.dir === 'down' && scroll.y > 100 })}
        style={{
          backgroundColor: `rgba(0, 0, 0, ${Math.max(scroll.y / 200, 0.2)})`
        }}
      >
        <Image src='/svgs/logo.svg' width={74} height={74} alt="logo" />
        <Image
          src={menuOpen ? '/svgs/close.svg' : '/svgs/burger.svg'}
          onClick={() => setMenuOpen(prev => !prev)}
          width={55}
          height={55}
          alt="burger"
          className="cursor-pointer min-[1000px]:hidden" />
        <div className="flex gap-10 max-[1000px]:hidden">
          <ul className="flex gap-5 items-center text-nowrap">
            {NAV_ITEMS.map(({ key, id }) => (
              <li
                className="cursor-pointer font-inter hover:text-[#FF001D] duration-250 hover:scale-105 transition-all"
                onClick={() => scrollToId(id)}
                key={key}
              >
                {t(`nav.${key}`)}
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <LanguageSwitcher className="" />
          </div>
        </div>
      </div>
      {
        menuOpen && (
          <ul className="min-[1000px]:hidden bg-black pt-[100px] pb-[20px] z-20 fixed no-doc-scroll top-0 left-0 right-0 flex flex-col gap-5 items-center text-nowrap">
            {NAV_ITEMS.map(({ key, id }) => (
              <li
                className="cursor-pointer font-inter"
                onClick={() => scrollToId(id)}
                key={key}
              >
                {t(`nav.${key}`)}
              </li>
            ))}
          </ul>
        )
      }
    </div>
  )
}

export default Header