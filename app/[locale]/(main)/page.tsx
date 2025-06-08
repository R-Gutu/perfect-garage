
import { useTranslations } from "next-intl"
import Hero from "./_components/Hero";
import Slides from "./_components/Slides";
const page = () => {
  const t = useTranslations('home');
  return (
    <div className="h-[3000px] font-inter">
      <Hero />
      <Slides />
    </div>

  )
}

export default page