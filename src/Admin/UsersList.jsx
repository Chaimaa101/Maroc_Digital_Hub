import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { fetchData, supprimer } from "../store/GlobalSlice";
import { useDispatch } from "react-redux";

function UsersList() {
    const dispatch = useDispatch();
  const { data, loading, errors } = useSelector((state) => state.allData) || {};


  useEffect(() => {
    dispatch(fetchData("users"));
  }, [dispatch]);
  return (
    <>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Gestion des Utilisateurs</h3>
                  <button className="bg-[#eda3a4] text-gray-600 px-4 py-2 rounded-lg hover:bg-[#ce6a6c] transition-colors">
                    + Nouvel Utilisateur
                  </button>
                </div>
              </div>
                {loading ? (
          <div className="p-6 text-center text-gray-600">Chargement...</div>
        ) : errors ? (
          <div className="p-6 text-center text-red-600">{errors}</div>
        ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilisateur</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Inscription</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {data.users.map(user => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-[#eaada2] to-[#6a99ce] rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                             { user.nom.charAt(0).toUpperCase()+ user.prenom.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{user.nom + " "+ user.prenom}</div>

                            </div>
                          </div>
                        </td>
                       
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            user.role === 'admin' ? 'text-black bg-indigo-300' : 
                            user.role === 'startup' ? 'text-black bg-green-200' : 
                            user.role === 'investor' ? 'text-black bg-orange-200' : 
                            'bg-gray-200 text-black'
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.createdAt}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">Modifier</button>
                            <button className="text-red-600 hover:text-red-900">Supprimer</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
               )}
            </div>
        
    </>
  )
}

export default UsersList
