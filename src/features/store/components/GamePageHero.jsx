import React from 'react';
import GamePageCarousel from './GamePageCarousel';
import GamePageDetail from './GamePageHeroDetail';


function GamePageHero({ gameData }) {
  const { name } = gameData;
  return (
    <div className='bg-base-300'>
      <div className='flex flex-col'>
        <div className='text-primary-100 m-4 flex h-full items-start justify-end text-left text-5xl font-extrabold animate-pulse'>
          {name}
        </div>
        <div className='text-primary-100 mx-4 flex h-full w-full items-start justify-center gap-2 p-8'>
          <GamePageCarousel images={gameData.short_screenshots} />
          <GamePageDetail gameData={gameData} />
        </div>
      </div>      
    </div>
  );
}

export default GamePageHero;
