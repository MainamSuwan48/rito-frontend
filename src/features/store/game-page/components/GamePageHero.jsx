import React from 'react';
import GamePageCarousel from './GamePageCarousel';
import GamePageDetail from './GamePageHeroDetail';

function GamePageHero({ gameData }) {
  const { name, price,screenshots } = gameData;
  return (
    <div>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between px-8'>
          <div className='text-primary-100 flex h-full animate-pulse items-start text-5xl font-extrabold'>
            {name}
          </div>
          <div className='text-[42px] font-extrabold text-primary'>
            {price}฿
          </div>
        </div>
        <div className='text-primary-100 flex h-full w-full items-start justify-center gap-4 p-8'>
    
          <GamePageCarousel images={screenshots} />
          <GamePageDetail gameData={gameData} />
        </div>
      </div>
    </div>
  );
}

export default GamePageHero;
