import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { useDispatch,useSelector } from "react-redux";
import { participate } from "../store/GlobalSlice";
import { requireAuth } from "../services/requireAuth";
import { useState } from "react";


const EventCard = ({ event }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false);

  const handleParticipation = (action) => {
    requireAuth(user, async () => {
      try {
        setLoading(true);
        await dispatch(
          participate({ ownerid: user.id, eventid: event.id, action })
        ).unwrap();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    });
  };

  const isParticipating = event?.participants.includes(user.id);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all h-96 w-72 duration-300 max-w-sm"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 bg-cover bg-center bg-gray-300" style={{ backgroundImage: `url(${event.image})` }}>

    
        <div className="absolute top-3 right-3 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-lg shadow">
          {event.date}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {event.titre}
        </h3>

        <div className="flex items-center text-gray-600 text-sm mb-2">
          <MapPin size={16} className="mr-2" />
          <span>{event.ville + " - " + event.place}</span>
        </div>

        <div className="flex items-center text-gray-600 text-sm mb-4">
          <Calendar size={16} className="mr-2" />
          <span>{event.date}</span>
        </div>
<button
          onClick={() =>
            handleParticipation(isParticipating ? "departiciper" : "participer")
          }
          disabled={loading}
          className={`w-full py-2 px-4 rounded-lg text-white transition-colors ${
            isParticipating
              ? "bg-red-400 hover:bg-red-700"
              : "bg-violet-600 hover:bg-violet-800"
          } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading
            ? "Chargement..."
            : isParticipating
            ? "Départiciper"
            : "Participer"}
        </button>
      </div>
    </motion.div>
  );
};

export default EventCard;
