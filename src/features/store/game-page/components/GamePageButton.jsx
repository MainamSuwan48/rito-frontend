import React from 'react';

function GamePageButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className='flex h-20 items-center justify-center rounded-lg border-2 border-neutral bg-primary px-4 py-2 text-3xl font-black text-neutral transition-all hover:scale-105 active:scale-95 active:bg-primary_mute'
    >
      {children}
    </button>
  );
}

export default GamePageButton;
