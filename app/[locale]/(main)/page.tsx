
'use client'
import Hero from "./_components/Hero";
import Slides from "./_components/Slides";
import Services from "./_components/Services";
import WhyUs from "./_components/WhyUs";
import Banner from "./_components/Banner";
import Team from "./_components/Team";
import Testimonials from "./_components/Testimonials";
import LogoSlider from "./_components/LogoSlider";
import HowWeWork from "./_components/HowWeWork";
import Modal from "./_components/Modal";
import { useState } from "react";
const Page = () => {
    const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className="font-inter">
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
      <Hero setModalOpen={setModalOpen} />
      <Slides />
      <Services />
      <WhyUs />
      <LogoSlider />
      <HowWeWork />
      <Banner setModalOpen={setModalOpen} />
      <Team />
      <Testimonials />
    </div>

  )
}

export default Page