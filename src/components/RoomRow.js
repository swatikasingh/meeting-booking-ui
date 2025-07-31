import React from "react";
import moment from "moment";

const RoomRow = ({ room, bookings }) => {
  const startHour = 7;

  const getPosition = (timeStr) => {
    const m = moment(timeStr, "HH:mm");
    return m.hour() - startHour;
  };

  return (
    <div className="grid grid-cols-[200px_repeat(14,1fr)] border-t text-sm items-center h-16">
      <div className="px-4">{room}</div>
      {Array.from({ length: 14 }).map((_, i) => (
        <div key={i} className="border-l h-full"></div>
      ))}

      {bookings.map((b, idx) => (
        <div
          key={idx}
          className="absolute text-xs px-2 py-1 rounded bg-blue-300 shadow"
          style={{
            left: `${getPosition(b.time) * 60 + 200}px`,
            top: "auto",
            height: "2.5rem",
            width: "100px",
          }}
        >
          {b.time} <br />
          {b.title}
        </div>
      ))}
    </div>
  );
};

export default RoomRow;
