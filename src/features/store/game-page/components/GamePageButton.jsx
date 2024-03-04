import React from 'react';

function GamePageButton({ children, onClick, bg, width, activeColor }) {
  return (
    <button
      onClick={onClick}
      className={`flex ${bg} ${width} items-center justify-center px-6 py-4 font-black text-neutral transition-all hover:scale-105 active:scale-100 ${activeColor}`}
    >
      {children}
    </button>
  );
}

export default GamePageButton;
