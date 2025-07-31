import React from "react";
import moment from "moment";

const RoomRow = ({ room, isLast }) => {
  const startHour = 7;
  const totalHours = 15;

  const getPosition = (timeStr) => {
    const hour = parseInt(timeStr.split(':')[0]);
    const minute = parseInt(timeStr.split(':')[1]);
    return ((hour - startHour) + (minute / 60)) / totalHours * 100;
  };

  const getDuration = (duration) => {
    return (duration / totalHours) * 100;
  };

  return (
    <div className={`relative ${!isLast ? 'border-b border-gray-200' : ''}`}>
      <div className="grid grid-cols-[200px_repeat(15,1fr)] min-h-[60px] items-center">
        {/* Room Info */}
        <div className="p-4 border-r border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">{room.name}</h4>
              <p className="text-xs text-gray-500">👥 {room.capacity}</p>
            </div>
          </div>
        </div>

        {/* Time Slots */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i} 
            className="border-r border-gray-200 last:border-r-0 h-full min-h-[60px] hover:bg-blue-50 cursor-pointer transition-colors"
          />
        ))}
      </div>

      {/* Booking Blocks */}
      {room.bookings.map((booking, idx) => (
        <div
          key={idx}
          className="absolute top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded px-3 py-2 shadow-sm z-10"
          style={{
            left: `calc(200px + ${getPosition(booking.time)}%)`,
            width: `${getDuration(booking.duration)}%`,
            minWidth: '100px',
          }}
        >
          <div className="text-xs font-medium">{booking.time}</div>
          <div className="text-xs opacity-90">{booking.title}</div>
        </div>
      ))}
    </div>
  );
};

export default RoomRow;
