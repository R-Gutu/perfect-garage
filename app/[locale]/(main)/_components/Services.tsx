import { cn } from "@/lib/utils";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Reparația suspensiei/direcției",
      price: "DE LA 600 lei",
      image: "/image/service1.png",
      hasDiscount: true,
      size: "normal"
    },
    {
      id: 2,
      title: "Diagnosticarea, repararea și încărcarea cu freon a sistemelor de aer condiționat",
      price: "de la 200 lei",
      image: "/image/service2.png",
      hasDiscount: false,
      size: "normal"
    },
    {
      id: 3,
      title: "Reparația sistemului de frânare",
      price: "de la 300 lei",
      image: "/image/service3.png",
      hasDiscount: true,
      size: "normal"
    },
    {
      id: 4,
      title: "Reparația sistemului de evacuare și a tobei",
      price: "de la 200 lei",
      image: "/image/service4.png",
      hasDiscount: true,
      size: "normal"
    },
    {
      id: 5,
      title: "Reparația sistemului de alimentare cu combustibil",
      price: "de la 300 lei",
      image: "/image/service5.png",
      hasDiscount: true,
      size: "large",
      featured: true
    },
    {
      id: 6,
      title: "Reglarea geometriei roților",
      price: "de la 200 lei",
      image: "/image/service6.png",
      hasDiscount: false,
      size: "normal"
    },
    {
      id: 7,
      title: "Reparația instalației electrice a automobilului",
      price: "DE LA 600 lei",
      image: "/image/service7.png",
      hasDiscount: true,
      size: "normal"
    },
    {
      id: 8,
      title: "Schimb de ulei",
      price: "de la 200 lei",
      image: "/image/service8.png",
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

             {/* Service Content */}
              <div className="flex flex-col relative">
                {/* Service Title */}
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white text-xl md:text-2xl font-semibold mb-4 leading-tight font-montserrat">
                    {service.title}
                    </h3>
                    {/* Discount Badge */}
                    {service.hasDiscount && (
                        <div className="z-10">
                        <span className={cn(" text-white text-xs font-bold px-3 py-1 rounded-full", `${service.featured ? 'bg-[#141414]' : 'bg-red-600'}`)}>
                            REDUCERE
                        </span>
                        </div>
                    )}
                </div>

                {/* Service Image */}
                <div className="absolute inset-0 w-full h-full">
                  <div className="bottom-0 right-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Service Price */}
                <div className="flex items-center justify-between mt-20">
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