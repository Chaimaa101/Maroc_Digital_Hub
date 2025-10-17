import { motion } from "framer-motion";

const StartupCard = ({ startup,owner ,sector}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
        day: 'numeric' ,
      month: 'short', 
    
    });
  };

  const getInitials = (nom,prenom) => {
    return  nom.charAt(0).toUpperCase()+ prenom.charAt(0).toUpperCase();
  };

  return (
    <article
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group"
   
    >
 
      <motion.div 
        className="h-48 bg-cover bg-center relative overflow-hidden bg-gray-300"
        style={{ backgroundImage: `url(${startup.image})` }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-[#4b919e] text-white text-xs font-semibold px-3 py-1 rounded-full">
            {sector?.titre}
          </span>
        </div>
      </motion.div>
  
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">{formatDate(startup.createdAt)}</span>
          <span className="text-sm font-medium text-[#4b919e] bg-[#4b919e]/10 px-2 py-1 rounded">
         {startup?.ville}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-cyan-500 transition-colors">
          {startup.name}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {startup.description}
        </p>

        <div className="flex items-center pt-4 border-t border-gray-100">
          <div className="w-10 h-10 bg-gradient-to-r from-[#eaada2] to-[#ce6a6c] rounded-full flex items-center justify-center text-white font-bold mr-3">
            {getInitials(owner?.nom, owner?.prenom )}
          </div>
          <div>
            <span className="text-gray-700 font-medium block">
              {owner.nom + " " + owner.prenom}
            </span>
            <span className="text-gray-500 text-sm">
              {owner.role || 'Founder'}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default StartupCard;