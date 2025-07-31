import React from "react";

const legends = [
  { color: "bg-green-400", label: "Reservation Possible" },
  { color: "bg-yellow-400", label: "Waiting for Approval" },
  { color: "bg-blue-400", label: "Complete Reservation" },
  { color: "bg-purple-400", label: "Video Conference" },
];

const ReservationLegend = () => {
  return (
    <div className="flex flex-wrap gap-4 my-4">
      {legends.map(({ color, label }) => (
        <div key={label} className="flex items-center gap-2 text-sm">
          <span className={`w-4 h-4 inline-block rounded ${color}`} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default ReservationLegend;
