import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const EventCard = ({ event }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 max-w-sm"
      whileHover={{ y: -5 }}
    >
      {/* Event Image */}
      <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }}>
        {/* Category Tag */}
        <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
          {event.category}
        </div>

        {/* Date Tag */}
        <div className="absolute top-3 right-3 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-lg shadow">
          {event.date}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {event.titre}
        </h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <MapPin size={16} className="mr-2" />
          <span>{event.ville}</span>
        </div>

        {/* Event Date */}
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <Calendar size={16} className="mr-2" />
          <span>{event.date}</span>
        </div>

        {/* Participate Button */}
        <button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
          Participate
        </button>
      </div>
    </motion.div>
  );
};

export default EventCard;
