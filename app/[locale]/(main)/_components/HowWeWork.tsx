import Image from "next/image"
import { useTranslations } from "next-intl"

export default function HowWeWork() {
    const t = useTranslations("howWeWork");

    return (
        <div id="howWeWork" className="font-montserrat text-center">
            <p className="text-white font-bold text-[25px] md:text-[45px] sm:text-[36px] xs:text-[28px]">{t("title")}</p>
            <p className="text-[#FF001D] text-[20px] md:text-[20px] sm:text-[18px] xs:text-[16px]">{t("subtitle")}</p>
            <div className="grid grid-cols-[2fr_1fr_2fr_1fr_2fr] px-[100px] max-[900px]:px-[10px] max-[900px]:grid-cols-1 max-[425px]:mt-[30px]">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-white">
                    <Image src="/svgs/phone.svg" width={150} height={150} alt={t("steps.0.iconAlt")} className="max-[900px]:w-[100px] max-[425px]:w-[60px]" />
                    <p className="font-bold text-[20px]">{t("steps.0.title")}</p>
                    <p>{t("steps.0.desc")}</p>
                </div>
                <div className="flex justify-center py-[20px] min-[900px]:hidden">
                    <Image src="/svgs/down_path.svg" width={15} height={15} alt="path" className="max-[425px]:w-[7px]" />
                </div>
                <div className="flex items-center translate-y-[-11%] max-[900px]:hidden">
                    <Image src="/svgs/right_path.svg" width={200} height={200} alt="path" />
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center text-white">
                    <Image src="/svgs/calendar.svg" width={150} height={150} alt={t("steps.1.iconAlt")} className="max-[900px]:w-[100px] max-[425px]:w-[60px]"/>
                    <p className="font-bold text-[20px]">{t("steps.1.title")}</p>
                    <p>{t("steps.1.desc")}</p>
                </div>
                <div className="flex justify-center py-[20px] min-[900px]:hidden">
                    <Image src="/svgs/down_path.svg" width={15} height={15} alt="path" className="max-[425px]:w-[7px]"  />
                </div>
                <div className="flex items-center translate-y-[-11%] max-[900px]:hidden">
                    <Image src="/svgs/right_path.svg" width={200} height={200} alt="path" />
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center text-white">
                    <Image src="/svgs/wrench.svg" width={150} height={150} alt={t("steps.2.iconAlt")} className="max-[900px]:w-[100px] max-[425px]:w-[60px]"/>
                    <p className="font-bold text-[20px]">{t("steps.2.title")}</p>
                    <p>{t("steps.2.desc")}</p>
                </div>
            </div>
        </div>
    )
}