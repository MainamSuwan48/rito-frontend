import React from 'react';

function GameCardTag({ children , id}) {
  return (
    <button className='flex justify-center items-center h-[2rem] border-2 border-black text-xs transition-all px-1 text-black hover:border-primary hover:scale-105 active:scale-100'>
      {children}
    </button>
  );
}

export default GameCardTag;