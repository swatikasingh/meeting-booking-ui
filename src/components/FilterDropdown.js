import React from "react";
import { Select } from "antd";

const FilterDropdown = ({ label, options }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <Select className="w-full" placeholder={`Select ${label}`}>
        {options.map((opt) => (
          <Select.Option key={opt} value={opt}>
            {opt}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default FilterDropdown;
