import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface TeamMember {
  name: string
  role: string
  image: string
  alt: string
}

const TeamSection = () => {
  const t = useTranslations('teamSection');
  const members = t.raw('members') as TeamMember[];

  return (
    <div className="bg-[#141414] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 font-montserrat">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-5xl mb-6 sm:mb-8 font-montserrat">
            {t('title')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed font-manrope">
              {t('description')}
            </p>
          </div>
          <div className="w-64 h-1 bg-white mx-auto mt-6 sm:mt-8"></div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {members.map((member, idx: number) => (
            <div key={idx} className="group cursor-pointer flex"> {/* Add flex here */}
              <div className="border-16 border-[#FF001D] rounded-3xl sm:rounded-4xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col w-full"> {/* Add flex flex-col w-full */}
                <div className="relative overflow-hidden bg-transparent flex-shrink-0"> {/* Add flex-shrink-0 */}
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

                <div className="text-center p-6 sm:p-8 bg-[#FF001D] flex-grow flex flex-col justify-center"> {/* Add flex-grow flex flex-col justify-center */}
                  <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2 font-montserrat">
                    {member.name}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base font-semibold tracking-wider font-manrope">
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