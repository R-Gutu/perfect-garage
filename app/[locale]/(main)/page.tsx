
import { useTranslations } from "next-intl"
import Hero from "./_components/Hero";
import Services from "./_components/Services";
const page = () => {
  const t = useTranslations('home');
  return (
    <div className="h-[3000px] font-inter">
      <Hero />
      <Services />
    </div>

  )
}

export default page