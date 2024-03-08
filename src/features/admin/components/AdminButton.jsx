import React from 'react';
const classBtn = {
  edit: 'bg-warning',
  delete: 'bg-error',
  confirm: 'bg-success',
};

export default function AdminButton({ children, mode }) {
  return (
    <button className={`${classBtn[mode]} px-6 py-2.5`}>{children}</button>
  );
}
