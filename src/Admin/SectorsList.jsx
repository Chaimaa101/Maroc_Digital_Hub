import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchData, supprimer } from "../store/GlobalSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

function SectorList() {
  const dispatch = useDispatch();

  const sectors = useSelector((state) => state.allData.data.sectors) || [];

  useEffect(() => {
    dispatch(fetchData("sectors"));
  }, [dispatch]);


  return (
    <div className="grid grid-cols-3 gap-6 my-10">
     {sectors.map((sector, index) => (
           <div key={sector.id} className=" mx-10 bg-fuchsia-200 p-6">
              <div className={`w-20 h-20 flex items-center justify-center rounded-full mb-4`}>
                <img src={sector.image} alt="" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{sector.titre}</h3>
              <p className="text-gray-600 text-sm">{sector.description}</p>
            </div>
          ))}
    </div>
    )
    
}

export default SectorList;
