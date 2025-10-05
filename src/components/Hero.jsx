import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    backgroundImage: "src/assets/HOME1.jpg",
    content: (
      <div className="absolute bottom-[10%] left-16 flex flex-col gap-6">
        <h1 className="text-white capitalize font-bold text-6xl sm:text-8xl">
          Connect. Innovate. Grow.
        </h1>
        <p className="text-[#bed3c3] capitalize font-semibold text-base">
          Digital Hub
        </p>
        <Link
          to="/startups"
          aria-label="View All"
          className="inline-block w-fit py-2 px-6 font-light uppercase 
                     text-[#222e53] bg-[#bed3c3] rounded-full transition-all 
                     duration-300 border border-[#bed3c3] active:scale-90 
                     hover:bg-transparent hover:text-white"
        >
          Découvrir les Startups
        </Link>
      </div>
    ),
  },
  {
    backgroundImage: "src/assets/HOME2.jpg",
    content: (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-1/4 flex flex-col items-center gap-4">
        <h1 className="text-4xl md:text-5xl font-bold uppercase text-center tracking-wide text-white">
          Just Landed
        </h1>
        <div className="w-10 h-[3px] bg-[#eaada2]"></div>
        <p className="text-lg md:text-xl text-center capitalize text-white">
          Découvrez les startups qui transforment le Maroc
        </p>
        <Link
          to="/startups"
          aria-label="Shop Now"
          className="py-2 px-6 font-semibold uppercase text-white 
                     bg-[#4b919e] transition-all duration-300 
                     border border-[#4b919e] active:scale-90 
                     hover:bg-white hover:text-[#4b919e]"
        >
          Explorer
        </Link>
      </div>
    ),
  },
  {
    backgroundImage: "src/assets/HOME3.jpg",
    content: (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-[40%] lg:left-1/3 flex flex-col items-center md:items-start gap-4">
        <h1 className="font-normal text-center md:text-left text-white uppercase tracking-wide text-4xl sm:text-8xl mb-8">
          Participez
        </h1>
        <h4 className="font-bold text-[#eaada2] uppercase tracking-wide text-2xl mb-8">
          aux événements qui font bouger l’écosystème
        </h4>
        <Link
          to="/evenements"
          aria-label="Voir les Événements"
          className="py-2 px-6 font-semibold uppercase text-white 
                     bg-[#222e53] transition-all duration-300 
                     border border-[#222e53] active:scale-90 
                     hover:bg-white hover:text-[#222e53]"
        >
          Voir les Événements
        </Link>
      </div>
    ),
  },
  {
    backgroundImage: "src/assets/HOME4.jpg",
    content: (
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        <p className="text-white capitalize font-semibold text-3xl mb-2">
          Lancez ou explorez une startup
        </p>
        <Link
          to="/startups"
          aria-label="Créer une Startup"
          className="inline-block w-fit py-2 px-6 uppercase 
                     bg-[#4b919e] text-white rounded-full transition-all 
                     duration-300 border border-[#4b919e] active:scale-90 
                     hover:bg-transparent hover:text-[#4b919e]"
        >
          Créer une Startup
        </Link>
      </div>
    ),
  },
];

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="w-full h-[85vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            {slide.content}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
