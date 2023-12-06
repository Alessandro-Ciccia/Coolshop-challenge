import React from "react";

const Input = ({ disabled, value, onChange }) => {
  return (
    <input
      className="border-2 rounded-md p-1 focus:shadow-lg focus:outline-none w-36"
      disabled={disabled}
      type="number"
      value={value}
      onChange={onChange}
      min={0}
    />
  );
};

export default Input;
