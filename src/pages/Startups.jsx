import { useMemo } from 'react';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StartupCard from "../components/StartupCard";
import FilterBar from "../components/FilterBar";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../store/GlobalSlice";


const Startups = () => {
  const [activeSector, setActiveSector] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

    const dispatch = useDispatch();

  const startups = useSelector((state) => state.allData.data.startups) || [];
  const sectors = useSelector((state) => state.allData.data.sectors) || [];
  const users = useSelector((state) => state.allData.data.users) || [];
 
  useEffect(() => {
    dispatch(fetchData("users"));
    dispatch(fetchData("startups"));
    dispatch(fetchData("sectors"));
  }, [dispatch]);


  const filteredStartups = useMemo(() => {
    if (activeSector) {
        return startups.filter(startup => startup.sectorId === activeSector.id);
    }
    return startups;
}, [activeSector, startups]);


  return (
    <div className="container mx-auto px-4 py-8">
      <FilterBar
        sectors={sectors}
        activeSector={activeSector}
        setActiveSector={setActiveSector}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
      {filteredStartups.map((startup) => (
          
          <StartupCard
            key={startup.id}
            startup={startup}
            owner={users.find(user => user.id === startup.ownerId) || null}
            sector={sectors.find(sc => sc.id === startup.sectorId) || null}

          />
        ))}
      </motion.div>

      {filteredStartups.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No startups found for the selected filter.</p>
        </div>
      )}
    </div>
  );
};

export default Startups;