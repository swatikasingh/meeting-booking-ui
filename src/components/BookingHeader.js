import React from "react";
import { DatePicker, TimePicker, Input, Button } from "antd";
import FilterDropdown from "./FilterDropdown";

const BookingHeader = () => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold mb-4">Book a Meeting Room</h2>
      <div className="grid grid-cols-6 gap-4">
        <FilterDropdown label="Building & Floor" options={["Phoenix - Floor 3", "Other"]} />
        <DatePicker className="w-full" />
        <TimePicker.RangePicker className="w-full" format="HH:mm" />
        <FilterDropdown label="Seats" options={["1-2", "3-5", "5-6"]} />
        <Input placeholder="Conference Room" />
        <Input placeholder="Supplies" />
      </div>
      <div className="text-right mt-4">
        <Button type="primary">Search</Button>
      </div>
    </div>
  );
};

export default BookingHeader;
