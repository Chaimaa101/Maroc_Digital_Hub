import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchData } from "../store/GlobalSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SectorCard = () => {
  const dispatch = useDispatch();
  const sectors = useSelector((state) => state.allData.data.sectors) || [];
  const startups = useSelector((state) => state.allData.data.startups) || [];

  useEffect(() => {
    dispatch(fetchData("startups"));
    dispatch(fetchData("sectors"));
  }, [dispatch]);

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Startup Sectors
        </h2>
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
  
          {sectors.map((sector) => (
          
            <SwiperSlide key={sector.id}  className=" mx-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-50 rounded-xl overflow-hidden shadow-lg cursor-pointer "
                style={{
                  backgroundImage: `url(${sector.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
               
              >
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center p-4">
                  <h3 className="text-white text-lg font-semibold">
                    {sector.titre}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {startups.filter((startup) => sector.id === startup.sectorId).length} startups
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SectorCard;
