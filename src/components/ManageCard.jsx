import React from 'react'
import { FaDownload, FaHeart } from 'react-icons/fa'

function EventCard({event}) {
  return (
    <>

    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="relative">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-44 object-cover"
        />
        {/* Price / Free badge */}
        <span className="absolute top-2 left-2 bg-white px-3 py-1 text-xs font-bold text-gray-800 rounded-md shadow">
          {event.price === 0 ? "FREE" : `$${event.price.toFixed(2)}`}
        </span>
        {/* Icons */}
        <div className="absolute top-2 right-2 flex gap-2">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <FaDownload className="text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-red-100">
            <FaHeart className="text-red-500" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Date */}
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <span className="font-bold text-purple-600">
            {event.date.month.toUpperCase()}
          </span>
          <span className="text-lg font-bold">{event.date.day}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mt-1">{event.name}</h3>

        {/* Location */}
        <p className="text-gray-500 text-sm">{event.location}</p>

        {/* Join button */}
        <button className="mt-4 w-full bg-gradient-to-r from-green-400 to-teal-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition">
          Join Event
        </button>
      </div>
    </div>
 
    </>
  )
}

export default EventCard
