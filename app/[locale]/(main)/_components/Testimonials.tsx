import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "ALEXANDRU",
      avatar: "/image/testimonial1.png",
      rating: 5,
      text: "Nu am nicio reclamație la adresa profesionalismului de la Perfect Garage. Recunosc sincer, am apelat la serviciile acestui service pentru prima dată. Înainte, mergeam la diverse service-uri, chiar și la service-urile dealerilor auto oficiali, și am fost mereu dezamăgit de rezultat. Lăsam acolo jumătate din salariu, iar mașina se strica după doar două săptămâni. Acum, îmi întrețin mașina doar în mâinile experților de la Perfect Garage – sunt sigur că este pe mâini bune! Mă bucur că am găsit, în sfârșit, un service de încredere!"
    },
    {
      id: 2,
      name: "DENIS",
      avatar: "/image/testimonial2.png",
      rating: 5,
      text: "Am căutat mult timp un service auto de calitate, unde să pot lăsa mașina pe mâinile unor profesioniști adevărați. Mulți au refuzat să se ocupe de problema mea, propunând direct să-mi schimbe motorul. Băieții de la Perfect Garage și-au făcut treaba 100%, mi-au explicat clar care a fost cauza defecțiunii și mi-au reparat motorul exact la timp. Am economisit bani și sunt super mulțumit."
    },
    {
      id: 3,
      name: "VASILII",
      avatar: "/image/testimonial3.png",
      rating: 5,
      text: "Un service auto excelent, servicii de calitate foarte bună, profesioniști la nivel înalt. Acum, pentru orice problemă sau defecțiune, acolo merg și îi recomand prietenilor. În concluzie, un service bun la prețuri corecte, îl recomand tuturor!"
    },
    {
      id: 4,
      name: "NINA",
      avatar: "/image/testimonial4.png",
      rating: 5,
      text: "Diagnosticarea a fost făcută super rapid și calitativ. Băieții de la service și-au făcut treaba la cel mai înalt nivel, având grijă de fiecare detaliu. Vă recomand tuturor service-ul auto Perfect Garage – chiar oferă servicii bune la un preț accesibil! Data viitoare, sigur tot la voi vin!"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`text-lg ${index < rating ? 'text-red-500' : 'text-gray-400'}`}
      >
        ★
      </span>
    ));
  };

  const renderTestimonialCard = (testimonial: typeof testimonials[0], isFullHeight = false) => (
    <div className={`border-2 border-red-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 ${isFullHeight ? 'h-full' : ''} flex flex-col`}>
      {/* User Info */}
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
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
      
      {/* Testimonial Text */}
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-manrope flex-grow">
        {testimonial.text}
      </p>
    </div>
  );

  return (
    <div className="bg-[#222222] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-start mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-white text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-montserrat">
            Oamenii au încredere în serviciile noastre
          </h2>
        </div>

        {/* Testimonials Flex - 3 columns */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
          
          {/* First Column - One testimonial (Alexandru) */}
          <div className="flex-1 flex">
            {renderTestimonialCard(testimonials[0], true)}
          </div>

          {/* Second Column - Two testimonials (Denis and Vasilii) */}
          <div className="flex-1 space-y-6 sm:space-y-8 lg:space-y-10">
            {renderTestimonialCard(testimonials[1])}
            {renderTestimonialCard(testimonials[2])}
          </div>

          {/* Third Column - One testimonial (Nina) */}
          <div className="flex-1 flex">
            {renderTestimonialCard(testimonials[3], true)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;