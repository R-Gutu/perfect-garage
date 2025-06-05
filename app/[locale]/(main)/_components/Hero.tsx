import Image from "next/image";
import { BsChatText } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <div className="h-screen w-full relative flex items-center overflow-hidden">

      <div className="absolute inset-0 z-0">
        <Image 
          src='/image/heroBG.png' 
          fill
          alt="Perfect Garage Background" 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        {/* <div className="w-2 h-32 bg-red-600 mb-8"></div> */}
        
        <div className="max-w-2xl">
          <div className="w-fit bg-[url('/image/redBG.png')] bg-cover bg-center flex items-center justify-center px-8 mb-4">
            <h1 className="text-5xl font-bold text-white tracking-wide font-montserrat">
              PERFECT GARAGE
            </h1>
          </div>
          
          <h2 className="ml-4 text-5xl font-bold text-white mb-4 leading-tight uppercase font-montserrat">
            ANI DE EXPERIENȚĂ<br />
            PENTRU<br />
            AUTOMOBILUL DVS.
          </h2>
          
          <p className="ml-4 text-xl text-gray-200 mb-12 leading-relaxed font-montserrat font-semibold">
            Diagnostică Detaliată, Soluții Rapide și Eficiente.
          </p>
          
          <div className="ml-4 flex flex-col sm:flex-row items-start gap-4">
            <button className="flex items-center gap-2 cursor-pointer bg-red-600 hover:bg-red-700 transition-colors duration-300 px-8 py-4 rounded-2xl font-semibold text-white group">
              <span className="font-manrope">Programați-vă</span>
              <MdKeyboardArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            
            <button className="flex items-center gap-3 cursor-pointer bg-transparent border border-gray-400 hover:bg-white hover:text-gray-800 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-white">
              <BsChatText size={16} />
              <span className="font-manrope">Consultație</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent z-10"></div>
    </div>
  )
}

export default Hero