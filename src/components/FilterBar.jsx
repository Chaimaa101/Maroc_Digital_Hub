import { motion } from "framer-motion";

const FilterBar = ({ 
  sectors, 
  activeSector, 
  setActiveSector,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 space-y-6 lg:space-y-0">
      {/* Sector Buttons */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-3 overflow-x-auto pb-2 scrollbar-hide"
      >
      
        <motion.button
          key="all"
          variants={filterVariants}
          onClick={() => setActiveSector(null)}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
            activeSector === null
              ? 'bg-[#4b919e] text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All Sectors
        </motion.button>
        
        {sectors.map((sector) => (
          <motion.button
            key={sector.id}
            variants={filterVariants}
            onClick={() => setActiveSector(sector)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
              activeSector?.id === sector.id
                ? 'bg-[#4b919e] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {sector.titre}
          </motion.button>
        ))}
      </motion.div>

    </div>
  );
};

export default FilterBar;