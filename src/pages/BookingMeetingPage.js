import React from "react";
import BookingHeader from "../components/BookingHeader";
import ReservationLegend from "../components/ReservationLegend";
import TimelineGrid from "../components/TimelineGrid";

const BookingMeetingPage = () => {
  return (
    <div className="p-4">
      <BookingHeader />
      <ReservationLegend />
      <TimelineGrid />
    </div>
  );
};

export default BookingMeetingPage;
