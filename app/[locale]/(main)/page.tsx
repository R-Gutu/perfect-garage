
import Hero from "./_components/Hero";
import Slides from "./_components/Slides";
import Services from "./_components/Services";
import WhyUs from "./_components/WhyUs";
import Banner from "./_components/Banner";
import Team from "./_components/Team";
import Testimonials from "./_components/Testimonials";
import LogoSlider from "./_components/LogoSlider";
import HowWeWork from "./_components/HowWeWork";
const page = () => {
  return (
    <div className="font-inter">
      <Hero />
      <Slides />
      <Services />
      <WhyUs />
      <LogoSlider />
      <HowWeWork />
      <Banner />
      <Team />
      <Testimonials />
    </div>

  )
}

export default page