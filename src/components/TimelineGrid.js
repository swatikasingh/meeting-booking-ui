import React from "react";
import RoomRow from "./RoomRow";

const rooms = [
  { 
    name: "Ajanta", 
    capacity: "20", 
    bookings: [
      { time: "08:00", duration: 2, title: "GTTC DSM" }
    ] 
  },
  { 
    name: "Hampi", 
    capacity: "25", 
    bookings: [
      { time: "11:30", duration: 1.5, title: "Sprint Review" }
    ] 
  },
  { 
    name: "Incheon", 
    capacity: "10", 
    bookings: [
      { time: "13:00", duration: 1.5, title: "Design Discussion" }
    ] 
  },
  { 
    name: "Ulsan", 
    capacity: "15", 
    bookings: [] 
  },
];

const TimelineGrid = () => {
  const hours = [
    "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM",
    "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM"
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Search Results Header */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">
          Showing search results for Phoenix, floor 3
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Displaying meeting rooms opened from 7 AM to 9 PM
        </p>
      </div>

      {/* Timeline Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[1200px]">
          {/* Header Row with Time Slots */}
          <div className="grid grid-cols-[200px_repeat(15,1fr)] bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
            <div className="p-3 font-medium text-gray-700 border-r border-gray-200">
              Rooms
            </div>
            {hours.map((hour, index) => (
              <div key={hour} className="p-2 text-center text-xs font-medium text-gray-600 border-r border-gray-200 last:border-r-0">
                {hour}
              </div>
            ))}
          </div>

          {/* Room Rows */}
          {rooms.map((room, index) => (
            <RoomRow 
              key={room.name} 
              room={room} 
              isLast={index === rooms.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineGrid;
