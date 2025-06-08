import Image from 'next/image';

const Banner = () => {
  return (
    <div className="bg-[#222222] py-4 sm:py-8 lg:py-12 xl:py-16 px-2 sm:px-4 lg:px-6 xl:px-8">
      <div className="bg-[#FF001D] text-white p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 rounded-xl sm:rounded-2xl max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
          
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight font-montserrat">
              Vă așteptăm pentru
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              o diagnosticare
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              completă a mașinii
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              dumneavoastră la
              <br />
              <span className="underline text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">600 lei</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 font-manrope pt-2">
              <button className="cursor-pointer bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base w-full sm:w-auto">
                Programați-vă
              </button>
              <button className="cursor-pointer border border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-white hover:text-red-500 transition-colors text-sm sm:text-base w-full sm:w-auto">
                Consultație
              </button>
            </div>
          </div>

          {/* Right Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 font-manrope order-1 lg:order-2">
            
            {/* Feature 1: Modern Equipment */}
            <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-col space-y-2 sm:space-y-3 lg:space-y-0 lg:space-x-4 xl:space-x-0 xl:space-y-3 items-start lg:items-center xl:items-start">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
                <Image 
                  src="/svg/banner1.svg" 
                  alt="Echipamente moderne" 
                  width={48} 
                  height={48}
                  className="filter brightness-0 invert w-full h-full sm:w-16 sm:h-16"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Echipamente moderne</h3>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  Folosim tehnologie de top din Italia pentru o diagnosticare precisă și rapidă.
                </p>
              </div>
            </div>

            {/* Feature 2: Performance Lifts */}
            <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-col space-y-2 sm:space-y-3 lg:space-y-0 lg:space-x-4 xl:space-x-0 xl:space-y-3 items-start lg:items-center xl:items-start">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
                <Image 
                  src="/svg/banner2.svg" 
                  alt="Lifturi performante" 
                  width={48} 
                  height={48}
                  className="filter brightness-0 invert w-full h-full sm:w-16 sm:h-16"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Lifturi performante</h3>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                  Ridicăm orice tip de mașină - până la 5 tone - în siguranță totală.
                </p>
              </div>
            </div>

            {/* Feature 3: Accessible Prices */}
            <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-col space-y-2 sm:space-y-3 lg:space-y-0 lg:space-x-4 xl:space-x-0 xl:space-y-3 items-start lg:items-center xl:items-start sm:col-span-2 lg:col-span-1 xl:col-span-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
                <Image 
                  src="/svg/banner3.svg" 
                  alt="Prețuri accesibile" 
                  width={48} 
                  height={48}
                  className="filter brightness-0 invert w-full h-full sm:w-16 sm:h-16"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Prețuri accesibile</h3>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed max-w-none sm:max-w-[280px] lg:max-w-none">
                  Oferim cel mai bun raport calitate-preț. Fără costuri ascunse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;