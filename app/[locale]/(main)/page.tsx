
import { useTranslations } from "next-intl"
import Hero from "./_components/Hero";
const page = () => {
  const t = useTranslations('home');
  return (
    <div className="h-[3000px] font-inter">
      <Hero />
    </div>

  )
}

export default page