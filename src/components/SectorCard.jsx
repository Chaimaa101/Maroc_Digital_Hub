import { motion } from "framer-motion";
import { FiCreditCard, FiBook, FiHeart, FiShoppingCart, FiActivity } from "react-icons/fi";
import { GiFarmTractor, GiCityCar } from "react-icons/gi";
 import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

 

const sectors = [
  {
    id: 1,
    name: "FinTech",
    description: "Solutions innovantes pour les paiements et la banque digitale.",
    icon: <FiCreditCard size={28} />,
    color: "bg-blue-100 text-blue-800"
  },
  {
    id: 2,
    name: "AgriTech",
    description: "Technologies pour moderniser l’agriculture et améliorer la durabilité.",
    icon: <GiFarmTractor size={28} />,
    color: "bg-green-100 text-green-800"
  },
  {
    id: 3,
    name: "EdTech",
    description: "Applications et plateformes pour transformer l’éducation.",
    icon: <FiBook size={28} />,
    color: "bg-yellow-100 text-yellow-800"
  },
  {
    id: 4,
    name: "HealthTech",
    description: "Outils numériques pour améliorer la santé et les soins médicaux.",
    icon: <FiHeart size={28} />,
    color: "bg-red-100 text-red-800"
  },
  {
    id: 5,
    name: "E-Commerce",
    description: "Plateformes pour dynamiser le commerce en ligne.",
    icon: <FiShoppingCart size={28} />,
    color: "bg-purple-100 text-purple-800"
  },
  {
    id: 6,
    name: "Smart Cities",
    description: "Innovations pour rendre les villes plus intelligentes et durables.",
    icon: <GiCityCar size={28} />,
    color: "bg-pink-100 text-pink-800"
  }
];

const SectorCard = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Startup Sectors
        </h2>
  <div>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        loop={true}
        className=""
      >
        {sectors.map((sector, index) => (
           <SwiperSlide key={sector.id} className=" mx-10">
           

              <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${sector.color}`}>
                {sector.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{sector.name}</h3>
              <p className="text-gray-600 text-sm">{sector.description}</p>
            </SwiperSlide>
          ))}
         
  
      </Swiper>
    </div>

      </div>
    </section>
  );
};

export default SectorCard;
