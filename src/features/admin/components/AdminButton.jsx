import React from 'react';
const classBtn = {
  edit: 'bg-warning text-base_dark active:bg-[#DEB319]',
  delete: 'bg-error text-white active:bg-primary_mute',
  confirm: 'bg-success text-base_dark active:bg-[#a5c215]',
};

export default function AdminButton({ children, mode, width, onClick }) {
  return (
    <button
      className={`${classBtn[mode]} flex items-center justify-center px-6 py-2.5 ${width} font-medium transition-all hover:scale-105 active:scale-100`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
