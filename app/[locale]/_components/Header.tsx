'use client'
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LanguageSwitcher from "./LanguageSwitcher"
import { useTranslations } from "next-intl"
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link"

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
    setScroll({ y: window.pageYOffset, prevY: window.pageYOffset, dir: 'up' })
  }, [])

  useEffect(() => {
    const onScroll = () => setScroll(prev => ({ y: window.pageYOffset, prevY: prev.y, dir: (prev.y - window.pageYOffset) < 0 ? 'down' : 'up' }));
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menuVariants = {
    closed: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1],
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative">
      <div
        className={cn(`font-inter fixed left-0 right-0 flex justify-between items-center px-[4%] max-[690px]:px-[8%] z-50 h-[100px]`)}
        style={{
          backgroundColor: `rgba(0, 0, 0, ${Math.max(scroll.y / 200, 0.2)})`
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Image src='/svgs/logo.svg' width={74} height={74} alt="logo" />
        </motion.div>

        <motion.div
          className="flex flex-col [&>p]:flex [&>p]:gap-3 max-[550px]:text-[10px] max-[380px]:text-[8px]"
        >
          <Link href={"tel:+37360410999"} className="flex gap-2 hover:scale-105 hover:text-red-500 transition-all"><FaPhoneAlt />+373 60 410 999</Link>
          <Link href={"https://maps.app.goo.gl/c92TEf83FD8EVgrQ6"} target="blank" className="flex gap-2 hover:scale-105 hover:text-red-500 transition-all"><FaMapMarkerAlt />{t('address1')}</Link>
          <Link href={"https://maps.app.goo.gl/hE2q5VmtMrEcjJpQA"} target="blank" className="flex gap-2 hover:scale-105 hover:text-red-500 transition-all"><FaMapMarkerAlt />{t('address2')}</Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={menuOpen ? '/svgs/close.svg' : '/svgs/burger.svg'}
            onClick={() => setMenuOpen(prev => !prev)}
            width={55}
            height={55}
            alt="burger"
            className="cursor-pointer min-[1180px]:hidden"
          />
        </motion.div>

        <div className="flex gap-10 max-[1180px]:hidden">
          <ul className="flex gap-5 items-center text-nowrap">
            {NAV_ITEMS.map(({ key, id }) => (
              <motion.li
                key={key}
                className="cursor-pointer font-inter"
                onClick={() => scrollToId(id)}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  transition: { duration: 0.2 },
                  color: '#FF001D'
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t(`nav.${key}`)}
              </motion.li>
            ))}
          </ul>
          <div className="flex items-center">
            <LanguageSwitcher className="" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              className="min-[1180px]:hidden fixed inset-0 bg-black/50 z-10"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setMenuOpen(false)}
            />

            {/* Mobile menu */}
            <motion.div
              className="min-[1180px]:hidden fixed top-0 left-0 right-0 z-20 overflow-hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="bg-gradient-to-b from-black via-gray-900 to-black pt-[100px] pb-[40px] shadow-2xl">
                <motion.ul
                  className="flex flex-col gap-6 items-center text-nowrap px-8"
                  variants={menuVariants}
                >
                  {NAV_ITEMS.map(({ key, id }, index) => (
                    <motion.li
                      key={key}
                      className="cursor-pointer font-inter text-white text-lg hover:text-[#FF001D] transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10 w-full text-center max-w-[500px]"
                      onClick={() => scrollToId(id)}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.05,
                        x: 10,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      custom={index}
                    >
                      {t(`nav.${key}`)}
                    </motion.li>
                  ))}

                  {/* Language switcher in mobile menu */}
                  <motion.div
                    className="mt-4 pt-4 border-t border-white/20"
                    variants={itemVariants}
                  >
                    <LanguageSwitcher className="text-white" />
                  </motion.div>
                </motion.ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header