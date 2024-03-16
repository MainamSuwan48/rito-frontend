import React from 'react';

function GameShowcaseCard({ gameData }) {
  return (
    <div className='relative flex h-[350px] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-black shadow-lg '>
      <div className='absolute top-2 z-10 p-2 text-left text-neutral'>
        RED DEAD REDEMPTION 2
      </div>
      <img
        className='relative h-full w-full object-cover transition-all duration-300 ease-in-out hover:scale-105'
        src='https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg'
      ></img>
      <div className='absolute inset-0 h-1/3 bg-gradient-to-b from-black to-transparent'></div>
    </div>
  );
}

export default GameShowcaseCard;
