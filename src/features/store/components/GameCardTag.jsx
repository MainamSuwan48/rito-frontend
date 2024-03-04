import React from 'react';

function GameCardTag({ children }) {
  return (
    <button className='border-2 border-black p-2 transition-all text-black hover:border-primary hover:scale-105 active:scale-100'>
      {children}
    </button>
  );
}

export default GameCardTag;