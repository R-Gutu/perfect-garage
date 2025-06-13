import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface Testimonial {
  name: string
  avatar: string
  rating: number
  text: string
  link: string
}

const Testimonials = () => {
  const t = useTranslations('testimonials');
  const testimonials = t.raw('list') as Testimonial[];

  const renderStars = (rating: number) => (
    Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`text-lg ${index < rating ? 'text-red-500' : 'text-gray-400'}`}
      >
        ★
      </span>
    ))
  );
  const renderTestimonialCard = (testimonial: Testimonial, isFullHeight = false) => (
    <Link href={testimonial.link} target='blank' id='testimonials' className={`border-2 border-red-500 rounded-2xl sm:rounded-3xl p-4 sm:p-4 lg:p-6 ${isFullHeight ? 'h-full' : ''} flex flex-col cursor-pointer hover:scale-110 transition-transform`}>
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 overflow-hidden mr-4 flex-shrink-0">
          <Image
            src={testimonial.avatar}
            alt={`${testimonial.name} avatar`}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-white text-lg sm:text-xl font-bold font-montserrat">
            {testimonial.name}
          </h3>
          <div className="flex mt-1">
            {renderStars(testimonial.rating)}
          </div>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-manrope flex-grow">
        {testimonial.text}
      </p>
    </Link>
  );

  return (
    <div className="bg-[#222222] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[95%] mx-auto">
        <div className="text-start mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-white text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-montserrat">
            {t("title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6 sm:gap-8 lg:gap-10 items-start">
          <div className="flex">
            {renderTestimonialCard(testimonials[0], true)}
          </div>
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {renderTestimonialCard(testimonials[1])}
            {renderTestimonialCard(testimonials[2])}
          </div>
          <div className="flex">
            {renderTestimonialCard(testimonials[3], true)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;