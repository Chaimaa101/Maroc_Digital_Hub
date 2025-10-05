import React from 'react'
import { Link } from 'react-router-dom';

function EventsList() {
      const events = [
    { id: 1, title: 'Pitch Day 2024', date: '2024-02-15', participants: 45, status: 'upcoming' },
    { id: 2, title: 'Investor Meetup', date: '2024-02-20', participants: 32, status: 'upcoming' },
    { id: 3, title: 'Startup Workshop', date: '2024-01-25', participants: 28, status: 'completed' }
  ];

  return (
    <div>
         <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Gestion des evenements</h3>
                  <div className="flex space-x-2">
                    <select className="border border-gray-300 rounded-lg px-3 py-2">
                      <option>Toutes les catégories</option>
                      <option>Technology</option>
                      <option>Environment</option>
                      <option>Healthcare</option>
                      <option>Finance</option>
                    </select>
                    <Link to="/addEvent" className="bg-[#eaada2] text-[#222e53] px-4 py-2 rounded-lg hover:bg-[#ce6a6c] transition-colors">
                      + Nouvelle Evénements
                    </Link>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evenements</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participants</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {events.map(startup => (
                      <tr key={startup.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{startup.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                            {startup.date}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {startup.participants}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            startup.status === 'upcoming' ? 'bg-green-100 text-green-800' : 
                            startup.status === 'completed' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'
                          }`}>
                            {startup.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
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
          
      
    </div>
  )
}

export default EventsList
