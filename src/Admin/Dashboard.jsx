import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Données des utilisateurs
  const users = [
    { id: 1, name: 'Niketa William', location: 'Paris', status: 'active', role: 'Startup', joinDate: '2024-01-15' },
    { id: 2, name: 'Trisha Louis', location: 'London', status: 'active', role: 'Investor', joinDate: '2024-01-10' },
    { id: 3, name: 'Ana Tomas', location: 'USA', status: 'pending', role: 'Startup', joinDate: '2024-01-20' },
    { id: 4, name: 'John Smith', location: 'Berlin', status: 'active', role: 'Admin', joinDate: '2024-01-05' },
    { id: 5, name: 'Maria Garcia', location: 'Madrid', status: 'inactive', role: 'Startup', joinDate: '2024-01-12' }
  ];

  // Données des startups
  const startups = [
    { id: 1, name: 'TechInnovate', category: 'Technology', status: 'approved', founder: 'Niketa William', created: '2024-01-15' },
    { id: 2, name: 'EcoSolutions', category: 'Environment', status: 'pending', founder: 'Ana Tomas', created: '2024-01-20' },
    { id: 3, name: 'HealthTech Pro', category: 'Healthcare', status: 'approved', founder: 'Trisha Louis', created: '2024-01-10' },
    { id: 4, name: 'FinTech Plus', category: 'Finance', status: 'rejected', founder: 'John Smith', created: '2024-01-08' }
  ];

  // Données des événements
  const events = [
    { id: 1, title: 'Pitch Day 2024', date: '2024-02-15', participants: 45, status: 'upcoming' },
    { id: 2, title: 'Investor Meetup', date: '2024-02-20', participants: 32, status: 'upcoming' },
    { id: 3, title: 'Startup Workshop', date: '2024-01-25', participants: 28, status: 'completed' }
  ];

  // Statistiques
  const stats = {
    totalUsers: 125,
    totalStartups: 45,
    pendingApprovals: 12,
    forumPosts: 89
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
                      <span className="text-blue-600 text-xl">👥</span>
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
                      <span className="text-green-600 text-xl">🚀</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">En Attente</p>
                      <h3 className="text-2xl font-bold text-gray-800">{stats.pendingApprovals}</h3>
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-600 text-xl">⏳</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Posts Forum</p>
                      <h3 className="text-2xl font-bold text-gray-800">{stats.forumPosts}</h3>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 text-xl">💬</span>
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
                      <div className="text-4xl mb-2">📈</div>
                      <p className="text-gray-600">Business Graph with Stats</p>
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

export default AdminDashboard;