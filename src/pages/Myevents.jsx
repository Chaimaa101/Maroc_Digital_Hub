import React, { useEffect } from 'react'
import { fetchData } from '../store/GlobalSlice';
import {useDispatch ,useSelector} from "react-redux"
import EventCard from '../components/EventCard';

function Myevents() {
    
  const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth)

  const events = useSelector((state) => state.allData.data.evenements) || [];
 const mine = events.filter(ev => ev?.participants.includes(user.id));

  useEffect(() => {
    dispatch(fetchData("evenements"));
  }, [dispatch]);
  return (
    <>
      {mine.length > 0 ?(
         <>
          <div className="min-h-screen bg-gray-50 flex justify-center py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
        {mine?.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
         </>
      ):(
         <>
         <div className=' my-30 flex justify-center bg-gray-200 p-20 text-xl text-black'> Aucune evenements</div>
         </>
      )
      
    }
    </>
  )
}

export default Myevents
