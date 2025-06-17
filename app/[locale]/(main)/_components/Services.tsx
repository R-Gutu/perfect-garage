'use client'
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";

const Services = () => {
  const t = useTranslations('services');
  const serviceCount = 9;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cardVariants = {
    initial: {
      scale: 1,
      backgroundColor: "rgb(30, 30, 30)", // #1E1E1E
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgb(220, 38, 38)", // red-600
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const overlayVariants = {
    initial: {
      opacity: 0
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const imageVariants = {
    initial: {
      scale: 1,
      rotate: 0
    },
    hover: {
      scale: 1.1,
      rotate: 2,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const titleVariants = {
    initial: {
      y: 0,
      color: "rgb(255, 255, 255)"
    },
    hover: {
      y: -2,
      color: "rgb(255, 255, 255)",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="services" className="bg-[#141414] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center sm:text-end mb-8 sm:mb-12 font-montserrat"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-montserrat"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('title')}
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 font-manrope">
          {Array.from({ length: serviceCount }).map((_, idx) => {
            const isHovered = hoveredCard === idx;

            return (
              <motion.div
                key={idx}
                className="relative group cursor-pointer rounded-2xl sm:rounded-4xl overflow-hidden p-4 sm:p-6"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                onHoverStart={() => setHoveredCard(idx)}
                onHoverEnd={() => setHoveredCard(null)}
                layout
                transition={{ layout: { duration: 0.3 } }}
              >
                <div className="flex flex-col relative h-full min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] z-10">
                  <div className="flex items-start justify-between mb-2 sm:mb-4">
                    <div>
                      <motion.h3
                        className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-4 leading-tight font-montserrat pr-2"
                        variants={titleVariants}
                      >
                        {t(`list.${idx}.title`)}
                      </motion.h3>
                      <motion.p
                        variants={titleVariants}
                        className="!text-white/60" 
                      >
                        {t(`list.${idx}.description`)}
                      </motion.p>
                    </div>
                    {t.raw(`list.${idx}.hasDiscount`) && (
                      <motion.div
                        className="z-10 flex-shrink-0"
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{
                          scale: 1,
                          rotate: 0,
                          transition: {
                            delay: 0.1 * idx,
                            type: "spring",
                            stiffness: 200,
                            damping: 10
                          }
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <span className={cn(
                          "text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-300",
                          isHovered ? 'bg-[#141414]' : 'bg-red-600'
                        )}>
                          {t('discount')}
                        </span>
                      </motion.div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-auto z-10 relative">
                    <motion.p
                      className="text-sm sm:text-base font-semibold"
                      animate={{
                        color: isHovered ? "rgb(255, 255, 255)" : "rgb(209, 213, 219)" // white : gray-300
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {t(`list.${idx}.price`)}
                    </motion.p>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 right-0 w-1/2 h-1/2 sm:w-2/3 sm:h-2/3 lg:w-3/5 lg:h-3/5"
                  variants={imageVariants}
                >
                  <Image
                    src={t(`list.${idx}.image`)}
                    alt={t(`list.${idx}.title`)}
                    fill
                    className="object-contain object-bottom-right"
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl sm:rounded-2xl"
                  variants={overlayVariants}
                />

                {/* Additional glow effect for hovered card */}
                <motion.div
                  className="absolute inset-0 rounded-2xl sm:rounded-4xl"
                  animate={{
                    boxShadow: isHovered
                      ? "0 0 30px rgba(220, 38, 38, 0.3), 0 0 60px rgba(220, 38, 38, 0.1)"
                      : "0 0 0px rgba(220, 38, 38, 0)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;