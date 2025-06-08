
import { useTranslations } from "next-intl"
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import WhyUs from "./_components/WhyUs";
import Banner from "./_components/Banner";
const page = () => {
  const t = useTranslations('home');
  return (
    <div className="h-[3000px] font-inter">
      <Hero />
      <Services />
      <WhyUs />
      <Banner />
    </div>

  )
}

export default page