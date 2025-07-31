import React from "react";
import { DatePicker, TimePicker, Input, Button, Select } from "antd";
import moment from "moment";

const BookingHeader = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">📅 Book a Meeting Room</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>My Reservation Status</span>
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">!</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-6 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Building & Floor</label>
          <div className="space-y-2">
            <Select 
              className="w-full" 
              placeholder="Select Building"
              defaultValue="Phoenix"
            >
              <Select.Option value="Phoenix">Phoenix</Select.Option>
              <Select.Option value="Orion">Orion</Select.Option>
            </Select>
            <Select 
              className="w-full" 
              placeholder="Select Floor"
              defaultValue="Floor 3"
            >
              <Select.Option value="Floor 1">Floor 1</Select.Option>
              <Select.Option value="Floor 2">Floor 2</Select.Option>
              <Select.Option value="Floor 3">Floor 3</Select.Option>
              <Select.Option value="Floor 4">Floor 4</Select.Option>
              <Select.Option value="Floor 5">Floor 5</Select.Option>
              <Select.Option value="Floor 6">Floor 6</Select.Option>
              <Select.Option value="Floor 7">Floor 7</Select.Option>
            </Select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
          <DatePicker 
            className="w-full" 
            placeholder="No appointment"
            defaultValue={moment("2023-05-08")}
            format="DD MMM YYYY"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
          <TimePicker.RangePicker 
            className="w-full" 
            format="HH:mm"
            defaultValue={[moment("11:00", "HH:mm"), moment("11:30", "HH:mm")]}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Seats</label>
          <Select 
            className="w-full" 
            placeholder="1-2 people"
            defaultValue="1-2 people"
          >
            <Select.Option value="1-2 people">1-2 people</Select.Option>
            <Select.Option value="3-5 people">3-5 people</Select.Option>
            <Select.Option value="5+ people">5+ people</Select.Option>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Conference room</label>
          <Select 
            className="w-full" 
            placeholder="Type here"
          >
            <Select.Option value="Meeting Room A">Meeting Room A</Select.Option>
            <Select.Option value="Meeting Room B">Meeting Room B</Select.Option>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Supplies</label>
          <Select 
            className="w-full" 
            placeholder="Type here"
          >
            <Select.Option value="Projector">Projector</Select.Option>
            <Select.Option value="Whiteboard">Whiteboard</Select.Option>
          </Select>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button type="primary" className="bg-blue-500 hover:bg-blue-600 border-blue-500 px-8">
          Search
        </Button>
      </div>
    </div>
  );
};

export default BookingHeader;
