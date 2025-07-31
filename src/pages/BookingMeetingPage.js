import React, { useState } from "react";
import BookingHeader from "../components/BookingHeader";
import ReservationLegend from "../components/ReservationLegend";
import TimelineGrid from "../components/TimelineGrid";
import MyReservationStatus from "../components/MyReservationStatus";

const BookingMeetingPage = () => {
  const [currentView, setCurrentView] = useState('booking'); // 'booking' or 'reservation'

  const handleShowReservationStatus = () => {
    setCurrentView('reservation');
  };

  const handleBackToBooking = () => {
    setCurrentView('booking');
  };

  if (currentView === 'reservation') {
    return <MyReservationStatus onBack={handleBackToBooking} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">MW</span>
              </div>
              <span className="text-gray-700 font-medium">My Workspace</span>
            </div>
            <span className="text-gray-400">Message Hub</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Meeting One-off</span>
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">S</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white px-6 py-2 border-b border-gray-100">
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-blue-600 cursor-pointer">My Workspace</span>
          <span className="text-gray-400">›</span>
          <span className="text-gray-700 font-medium">Book a Meeting Room</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <BookingHeader onShowReservationStatus={handleShowReservationStatus} />
        <ReservationLegend />
        <TimelineGrid />
      </div>
    </div>
  );
};

export default BookingMeetingPage;
