import { motion } from "framer-motion";

const StartupCard = ({ startup, itemVariants }) => {
 
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getInitials = (owner) => {
    if (!owner) return 'SU';
    return owner.split(' ').map(name => name[0]).join('').toUpperCase();
  };

  return (
    <motion.article
      variants={itemVariants}
      layout
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
 
      <motion.div 
        className="h-48 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${startup.image})` }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-[#4b919e] text-white text-xs font-semibold px-3 py-1 rounded-full">
            {formatDate(startup.createdAt)}
          </span>
        </div>
      </motion.div>
  
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">{formatDate(startup.createdAt)}</span>
          <span className="text-sm font-medium text-[#4b919e] bg-[#4b919e]/10 px-2 py-1 rounded">
            {startup.sector}
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
            {getInitials(startup.owner)}
          </div>
          <div>
            <span className="text-gray-700 font-medium block">
              {startup.owner || 'Startup Owner'}
            </span>
            <span className="text-gray-500 text-sm">
              {startup.role || 'Founder'}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default StartupCard;