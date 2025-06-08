import Image from 'next/image';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "ANDREI",
      role: "MOTORIST",
      image: "/image/team1.png",
      alt: "Andrei - Motorist"
    },
    {
      id: 2,
      name: "GHEORGHE",
      role: "MECANIC",
      image: "/image/team2.png",
      alt: "Gheorghe - Mecanic"
    },
    {
      id: 3,
      name: "VALERIU",
      role: "ELECTRICIAN",
      image: "/image/team3.png",
      alt: "Valeriu - Electrician"
    }
  ];

  return (
    <div className="bg-[#222222] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 font-montserrat">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-5xl mb-6 sm:mb-8 font-montserrat">
            CUNOAȘTEȚÍ ECHIPA{' '}
            <span className=" font-bold">NOASTRĂ DE TOP</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed font-manrope">
              Suntem o echipă dedicată, pasionată de excelență și mereu pregătită să depășească 
              așteptările. Fiecare membru contribuie cu talentul și energia sa pentru a transforma ideile 
              în rezultate remarcabile.
            </p>
          </div>
          
          {/* Decorative line */}
          <div className="w-64 h-1 bg-white mx-auto mt-6 sm:mt-8"></div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="group cursor-pointer"
            >
              {/* Card Container */}
              <div className="border-16 border-[#F5F5F5] rounded-3xl sm:rounded-4xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                
                <div className="relative overflow-hidden bg-transparent">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center p-6 sm:p-8 bg-[#F5F5F5]">
                  <h3 className="text-black text-2xl sm:text-3xl font-bold mb-2 font-montserrat">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base font-semibold tracking-wider font-manrope">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;