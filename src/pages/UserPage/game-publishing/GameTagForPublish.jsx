import React from 'react';

function GameTagForPublish({ children, img, id, onClick }) {
  return (
    <div className='relative flex h-12 w-full items-center justify-center text-sm text-black'>
      <img
        // alt={children}
        src={img}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <div
        onClick={onClick}
        className='text-md z-10 flex w-full select-none items-center justify-center bg-base_dark bg-opacity-75 py-2 text-neutral transition-all hover:w-1/2 hover:text-primary active:bg-opacity-35 active:text-primary_mute'
      >
        {children}
      </div>
    </div>
  );
}

export default GameTagForPublish;
