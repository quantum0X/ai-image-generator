import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="text-gray-800">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button type="button" onClick={handleSurpriseMe} className="px-4 py-1 border bg-gray-500 text-white rounded-md">
            surprise
          </button>
        )}
      </div>
      <input 
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="border border-black text-black"
      required />
    </div>
  );
};

export default FormField;
