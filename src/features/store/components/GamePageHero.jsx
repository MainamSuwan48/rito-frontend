import React from 'react';
import GamePageCarousel from './GamePageCarousel';
import GamePageDetail from './GamePageDetail';

function GamePageHero({ gameData }) {
  const { name } = gameData;
  return (
    <div className='h-screen bg-base-300'>
      <div className='flex flex-col bg-base_dark'>
        <div className='text-primary-100 m-8 flex h-full items-start justify-end text-left text-5xl font-extrabold'>
          {name}
        </div>
        <div className='text-primary-100 mx-4 flex h-full items-start justify-center gap-2 bg-black p-8'>
          <GamePageCarousel images={gameData.short_screenshots} />
          <GamePageDetail gameData={gameData} />
        </div>
      </div>
    </div>
  );
}

export default GamePageHero;
