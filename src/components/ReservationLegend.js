import React from "react";

const legends = [
  { color: "bg-green-400", label: "Reservation Possible" },
  { color: "bg-yellow-400", label: "Waiting for Approval" },
  { color: "bg-blue-400", label: "Complete Reservation" },
  { color: "bg-purple-400", label: "Video Conference" },
  { color: "bg-red-400", label: "Approval Required" },
];

const ReservationLegend = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Reservation Status</h3>
      <div className="flex flex-wrap gap-6">
        {legends.map(({ color, label }) => (
          <div key={label} className="flex items-center gap-2 text-sm">
            <div className={`w-3 h-3 rounded-full ${color}`} />
            <span className="text-gray-600">{label}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded border border-gray-300 bg-white" />
          <span className="text-gray-600">Not Available</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 bg-gray-200 rounded" />
          <span className="text-gray-600">Out of Service</span>
        </div>
      </div>
    </div>
  );
};

export default ReservationLegend;
