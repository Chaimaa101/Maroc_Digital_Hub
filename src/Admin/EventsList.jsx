import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchData, supprimer } from "../store/GlobalSlice";
import { FaTrash } from "react-icons/fa";

function EventsList() {
  const dispatch = useDispatch();
  const { data, loading, errors } = useSelector((state) => state.allData) || {};

  useEffect(() => {
    dispatch(fetchData("evenements"));
  }, [dispatch]);
  return (
    <div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">
              Gestion des evenements
            </h3>
            <div className="flex space-x-2">
              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option>Toutes les catégories</option>
                <option>Technology</option>
                <option>Environment</option>
                <option>Healthcare</option>
                <option>Finance</option>
              </select>
              <Link
                to="/addEvent"
                className="bg-[#eaada2] text-[#222e53] px-4 py-2 rounded-lg hover:bg-[#ce6a6c] transition-colors"
              >
                + Nouvelle Evénements
              </Link>
            </div>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Evenements
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Participants
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ville
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.evenements.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {event.titre}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                      {event.date}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {event?.participants.length}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {event.ville}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        className="text-red-600 hover:text-red-900"
                        onClick={() =>
                          dispatch(
                            supprimer({ section: "evenements", id: event.id })
                          )
                        }
                      > <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
         )}
      </div>
           
    </div>
  );
}

export default EventsList;
