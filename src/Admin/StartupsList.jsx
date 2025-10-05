import React from 'react'

function StartupsList() {
     const startups = [
    { id: 1, name: 'TechInnovate', category: 'Technology', status: 'approved', founder: 'Niketa William', created: '2024-01-15' },
    { id: 2, name: 'EcoSolutions', category: 'Environment', status: 'pending', founder: 'Ana Tomas', created: '2024-01-20' },
    { id: 3, name: 'HealthTech Pro', category: 'Healthcare', status: 'approved', founder: 'Trisha Louis', created: '2024-01-10' },
    { id: 4, name: 'FinTech Plus', category: 'Finance', status: 'rejected', founder: 'John Smith', created: '2024-01-08' }
  ];

  return (
    <>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Gestion des Startups</h3>
                  <div className="flex space-x-2">
                    <select className="border border-gray-300 rounded-lg px-3 py-2">
                      <option>Toutes les catégories</option>
                      <option>Technology</option>
                      <option>Environment</option>
                      <option>Healthcare</option>
                      <option>Finance</option>
                    </select>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      + Nouvelle Startup
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Startup</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fondateur</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {startups.map(startup => (
                      <tr key={startup.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{startup.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                            {startup.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {startup.founder}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            startup.status === 'approved' ? 'bg-green-100 text-green-800' : 
                            startup.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'
                          }`}>
                            {startup.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-green-600 hover:text-green-900">Valider</button>
                            <button className="text-blue-600 hover:text-blue-900">Modifier</button>
                            <button className="text-red-600 hover:text-red-900">Rejeter</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          
    </>
  )
}

export default StartupsList
