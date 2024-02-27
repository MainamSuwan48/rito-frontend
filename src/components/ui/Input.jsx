import React from "react";

function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  errorMessage = null,
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        // แต่งเองได้อันนี้
        className="transition-all p-2 border-2 border-primary  bg-transparent focus:outline-none focus:border-2 focus:box-border"
      />
      {errorMessage ? (
        <small className="text-red-500 -my-4">{errorMessage}</small>
      ) : null}
    </>
  );
}

export default Input;
