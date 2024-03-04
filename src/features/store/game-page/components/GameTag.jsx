import React from 'react';

function GameTag({ children }) {
  return (
    <div className='z-10 mx-2 my-2 flex h-10 select-none items-center justify-center rounded-lg border-2 border-secondary bg-secondary px-4 text-xl font-bold transition-all hover:scale-105 active:scale-95 active:bg-secondary_mute'>
      {children}
    </div>
  );
}

export default GameTag;
