import React from 'react'
import EventCard from '../components/ManageCard';

function Evenements() {
    
const events = [
  {
    id: 1,
    name: "Indonesia - Korea Conference",
    location: "Soekarno, Yogyakarta, Indonesia",
    image: "src/assets/HOME3.jpg",
    price: 10,
    date: { month: "Sep", day: 18 },
  },
  {
    id: 2,
    name: "Dream World Wide in Jakarta",
    location: "Seohanna, Yogyakarta, Indonesia",
    image: "src/assets/HOME3.jpg",
    price: 0,
    date: { month: "Sep", day: 17 },
  },
  {
    id: 3,
    name: "Pesta Kembang Api Terbesar",
    location: "Seohanna, Yogyakarta, Indonesia",
    image: "src/assets/HOME3.jpg",
    price: 12,
    date: { month: "Sep", day: 16 },
  },
];

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
