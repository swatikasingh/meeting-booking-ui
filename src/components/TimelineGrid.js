import React from "react";
import RoomRow from "./RoomRow";

const rooms = ["Ajanta", "Hampi", "Incheon", "Ulsan"];

const bookings = {
  Ajanta: [{ time: "08:00", title: "GTTC DSM" }],
  Hampi: [{ time: "11:30", title: "Sprint Review" }],
  Incheon: [{ time: "13:00", title: "Design Discussion" }],
};

const TimelineGrid = () => {
  const hours = Array.from({ length: 14 }, (_, i) => 7 + i); // 7 AM to 8 PM

  return (
    <div className="overflow-x-auto border rounded">
      <div className="min-w-[1000px]">
        <div className="grid grid-cols-[200px_repeat(14,1fr)] text-sm bg-gray-100 sticky top-0 z-10">
          <div className="p-2 font-semibold">Rooms</div>
          {hours.map((hr) => (
            <div key={hr} className="p-2 text-center border-l">{hr}:00</div>
          ))}
        </div>

        {rooms.map((room) => (
          <RoomRow key={room} room={room} bookings={bookings[room] || []} />
        ))}
      </div>
    </div>
  );
};

export default TimelineGrid;
