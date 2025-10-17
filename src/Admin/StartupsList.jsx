import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, supprimer } from "../store/GlobalSlice";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify"; // ✅ Import Toast
import "react-toastify/dist/ReactToastify.css"; // ✅ Important CSS

function StartupsList() {
  const dispatch = useDispatch();

  // 🧠 We get all the data from the store
  const { data, loading, errors } = useSelector((state) => state.allData) || {};

  // 🧭 Load data when the component mounts
  useEffect(() => {
    dispatch(fetchData("users"));
    dispatch(fetchData("startups"));
    dispatch(fetchData("sectors"));
  }, [dispatch]);


  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">
              Gestion des Startups
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
                to="/addStartup"
                className="bg-[#059ac7] text-white px-4 py-2 rounded-lg hover:bg-[#4b919e] transition-colors"
              >
                + Nouvelle Startup
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
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Startup
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Catégorie
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fondateur
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.startups?.map((startup) => (
                  <tr key={startup.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="h-10 w-10">
                        <img
                          src={startup.image}
                          alt={startup.name}
                          className="object-cover rounded"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {startup.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                        {data.sectors.find(
                          (sc) => sc.id === startup.sectorId
                        )?.titre || "Inconnue"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {data.users.find((user) => user.id === startup.ownerId)
                        ?.prenom || "—"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          startup.status === "approved"
                            ? "bg-green-100 text-green-800"
                            : startup.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {startup.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          className="text-red-600 hover:text-red-900"
                          onClick={() =>
                            dispatch(
                              supprimer({ section: "startups", id: startup.id })
                            )
                          }
                        >
                          <FaTrash />
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
    </>
  );
}

export default StartupsList;
