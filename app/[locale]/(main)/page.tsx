
import { useTranslations } from "next-intl"
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import WhyUs from "./_components/WhyUs";
import Banner from "./_components/Banner";
import Team from "./_components/Team";
import Testimonials from "./_components/Testimonials";
const page = () => {
  const t = useTranslations('home');
  return (
    <div className="h-[3000px] font-inter">
      <Hero />
      <Services />
      <WhyUs />
      <Banner />
      <Team />
      <Testimonials />
    </div>

  )
}

export default page