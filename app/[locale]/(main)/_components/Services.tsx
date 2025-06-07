import Image from "next/image";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Reparația suspensiei/direcției",
      price: "DE LA 600 lei",
      image: "/image/suspension.png",
      hasDiscount: true,
      size: "normal"
    },
    {
      id: 2,
      title: "Diagnosticarea, repararea și încărcarea cu freon a sistemelor de aer condiționat",
      price: "de la 200 lei",
      image: "/image/air-conditioning.png",
      hasDiscount: false,
      size: "normal"
    },
    {
      id: 3,
      title: "Reparația sistemului de frânare",
      price: "de la 300 lei",
      image: "/image/braking-system.png",
      hasDiscount: true,
      size: "normal"
    },
    {
      id: 4,
      title: "Reparația sistemului de evacuare și a tobei",
      price: "de la 200 lei",
      image: "/image/exhaust-system.png",
      hasDiscount: true,
      size: "normal"
    },
    {
      id: 5,
      title: "Reparația sistemului de alimentare cu combustibil",
      price: "de la 300 lei",
      image: "/image/fuel-system.png",
      hasDiscount: true,
      size: "large",
      featured: true
    },
    {
      id: 6,
      title: "Reglarea geometriei roților",
      price: "de la 200 lei",
      image: "/image/wheel-alignment.png",
      hasDiscount: false,
      size: "normal"
    },
    {
      id: 7,
      title: "Reparația instalației electrice a automobilului",
      price: "DE LA 600 lei",
      image: "/image/electrical-repair.png",
      hasDiscount: true,
      size: "normal"
    },
    {
      id: 8,
      title: "Schimb de ulei",
      price: "de la 200 lei",
      image: "/image/oil-change.png",
      hasDiscount: false,
      size: "normal"
    }
  ];

  return (
    <section className="bg-[#222222] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-end mb-12 font-montserrat">
          <p className="text-red-500 text-xl font-semibold tracking-wide uppercase mb-2">
            CE OFERIM
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-montserrat">
            Serviciile Noastre
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-manrope">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative group cursor-pointer transition-all duration-300 hover:scale-105  ${
                service.featured 
                  ? 'bg-red-600 hover:bg-red-700' 
                  : 'bg-[#1E1E1E] hover:bg-[#1E1E1E]/80'
              } rounded-2xl overflow-hidden p-6`}
            >
              {/* Discount Badge */}
              {service.hasDiscount && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    REDUCERE
                  </span>
                </div>
              )}

              {/* Service Content */}
              <div className="flex flex-col h-full">
                {/* Service Title */}
                <h3 className="text-white text-lg md:text-xl font-semibold mb-4 leading-tight font-montserrat">
                  {service.title}
                </h3>

                {/* Service Image */}
                <div className="flex-1 flex items-center justify-center mb-6 relative">
                  <div className="relative w-full h-32 md:h-40">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Service Price */}
                <div className="mt-auto">
                  <p className={`text-sm font-semibold ${
                    service.featured ? 'text-white' : 'text-gray-300'
                  }`}>
                    {service.price}
                  </p>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;