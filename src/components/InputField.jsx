import React from "react";

function InputField({
  autoFocus = false,
  error,
  label,
  name,
  onChange,
  type = "text",
  value,
}) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        autoFocus={autoFocus}
        className="form-control"
        id={name}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
      />
      {error && <div className="alert alert-danger mt-1">{error}</div>}
    </div>
  );
}

export default InputField;
