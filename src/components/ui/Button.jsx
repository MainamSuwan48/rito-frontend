import React from "react";

function Button({ type, children, onClick }) {
  return (
    <button type={type} onClick={onClick} className="transition-all p-2 bg-primary text-base-100 text-2xl font-black mt-4 hover:bg-secondary active:translate-x-1">
      {children}
    </button>
  );
}

export default Button;
