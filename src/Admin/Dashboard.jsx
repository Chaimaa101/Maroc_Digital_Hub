import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector ,useDispatch} from "react-redux";
import { fetchData } from '../store/GlobalSlice';
import { FaCreativeCommons, FaEnvelopeOpenText, FaFastForward, FaPeopleCarry, FaSass, FaStoreAlt } from 'react-icons/fa';
import { FaBusinessTime, FaFaceSadTear, FaPeopleGroup, FaPeopleRobbery, FaSection } from 'react-icons/fa6';

const Dashboard = () => {
    const dispatch = useDispatch();

    const startups = useSelector((state) => state.allData.data.startups) || [];
    const evenements = useSelector((state) => state.allData.data.evenements) || [];
    const sectors = useSelector((state) => state.allData.data.sectors) || [];
    const users = useSelector((state) => state.allData.data.users) || [];

  useEffect(() => {
    dispatch(fetchData("startups"));
    dispatch(fetchData("evenements"));
    dispatch(fetchData("sectors"));
    dispatch(fetchData("users"));
  }, [dispatch]);
  

  const stats = {
    totalUsers: users.length,
    totalStartups: startups.length,
    totalEvents: evenements.length,
    totalSectors: sectors.length
  };

  return (
    <div className="flex h-screen bg-gray-50">
     
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
       

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
     
            <div className="space-y-6">
              {/* Cartes de statistiques */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Utilisateurs Totaux</p>
                      <h3 className="text-2xl font-bold text-gray-800">{stats.totalUsers}</h3>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-xl"><FaPeopleGroup/></span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Startups</p>
                      <h3 className="text-2xl font-bold text-gray-800">{stats.totalStartups}</h3>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 text-xl"><FaStoreAlt /></span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Evenements</p>
                      <h3 className="text-2xl font-bold text-gray-800">{stats.totalEvents}</h3>
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-600 text-xl"><FaEnvelopeOpenText /></span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Secteurs</p>
                      <h3 className="text-2xl font-bold text-gray-800">{stats.totalSectors}</h3>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 text-xl"><FaBusinessTime/></span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Graphique et Transactions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Graphique d'audience */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Audience Overview</h3>
                  <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2"></div>
                      <p className="text-gray-600">Graphs</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
 
        </main>
      </div>
    </div>
  );
};

export default Dashboard;