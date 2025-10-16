import React, { useEffect } from 'react'
import { fetchData } from '../store/GlobalSlice';
import {useDispatch ,useSelector} from "react-redux"
import EventCard from '../components/EventCard';

function Evenements() {
    
  const dispatch = useDispatch();
  const events = useSelector((state) => state.allData.data.evenements) || [];

  useEffect(() => {
    dispatch(fetchData("evenements"));
  }, [dispatch]);
  return (
    <>
       <div className="min-h-screen bg-gray-50 flex justify-center py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Evenements
