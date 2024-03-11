import React from 'react';
import GamePageCarousel from './GamePageCarousel';
import GamePageDetail from './GamePageHeroDetail';

function GamePageHero({ gameData }) {
  const { name, price, screenshots, backgroundImageUrl } = gameData;
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between px-8'>
        <div className='font-rubik text-primary-100 flex h-full items-start text-5xl font-extrabold'>
          {name}
        </div>
        <div className='font-rubik text-[42px] font-bold text-primary bg-base_dark p-2 rounded-md bg-opacity-80'>{price}{" "}฿</div>
      </div>
      <div className='text-primary-100 flex h-full w-full items-start justify-center gap-4 p-8'>
        <GamePageCarousel mainImage={backgroundImageUrl} images={screenshots} />
        <GamePageDetail gameData={gameData} />
      </div>
    </div>
  );
}

export default GamePageHero;
