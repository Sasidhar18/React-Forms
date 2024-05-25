import React from "react";

export default function Input({ type, id, error, label, ...rest }) {
  return (
    <div className="control no-margin">
      <label htmlFor="email">{label}</label>
      <input type={type} id={id} {...rest} />
      {error && (
        <div className="control-error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
