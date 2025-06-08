import Image from 'next/image';

const Banner = () => {
  return (
    <div className="bg-[#222222] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
    <div className="bg-red-500 text-white p-8 rounded-2xl max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight font-montserrat">
            Vă așteptăm pentru
            <br />
            o diagnosticare
            <br />
            completă a mașinii
            <br />
            dumneavoastră la
            <br />
            <span className="underline">600 lei</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 font-manrope">
            <button className="cursor-pointer bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Programați-vă
            </button>
            <button className="cursor-pointer border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors">
              Consultație
            </button>
          </div>
        </div>

        {/* Right Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-manrope">
          {/* Feature 1: Modern Equipment */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 flex items-center justify-center">
              {/* Replace with your actual diagnostic equipment icon */}
              <Image 
                src="/svg/banner1.svg" 
                alt="Echipamente moderne" 
                width={64} 
                height={64}
                className="filter brightness-0 invert"
              />
            </div>
            <h3 className="font-bold text-lg">Echipamente moderne</h3>
            <p className="text-sm opacity-90">
              Folosim tehnologie de top din Italia pentru o diagnosticare precisă și rapidă.
            </p>
          </div>

          {/* Feature 2: Performance Lifts */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 flex items-center justify-center">
              {/* Replace with your actual car lift icon */}
              <Image 
                src="/svg/banner2.svg" 
                alt="Lifturi performante" 
                width={64} 
                height={64}
                className="filter brightness-0 invert"
              />
            </div>
            <h3 className="font-bold text-lg">Lifturi performante</h3>
            <p className="text-sm opacity-90">
              Ridicăm orice tip de mașină - până la 5 tone - în siguranță totală.
            </p>
          </div>

          {/* Feature 3: Accessible Prices */}
          <div className="flex flex-col items-center text-center space-y-3 sm:col-span-2">
            <div className="w-16 h-16 flex items-center justify-center">
              {/* Replace with your actual target/price icon */}
              <Image 
                src="/svg/banner3.svg" 
                alt="Prețuri accesibile" 
                width={64} 
                height={64}
                className="filter brightness-0 invert"
              />
            </div>
            <h3 className="font-bold text-lg">Prețuri accesibile</h3>
            <p className="text-sm opacity-90">
              Oferim cel mai bun raport calitate-preț. Fără costuri ascunse.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;