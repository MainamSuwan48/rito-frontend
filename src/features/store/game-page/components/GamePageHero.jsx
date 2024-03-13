import React from 'react';
import GamePageCarousel from './GamePageCarousel';
import GamePageDetail from './GamePageHeroDetail';

function GamePageHero({ gameData }) {
  const { name, price, screenshots, backgroundImageUrl } = gameData;
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between px-8'>
        <div className='text-primary-100 flex h-full items-start font-rubik text-5xl font-extrabold'>
          {name}
        </div>
        <div className='bg-base_dark bg-opacity-80 p-2 font-rubik text-[42px] font-bold text-primary'>
          {new Intl.NumberFormat().format(price)} {'\u0E3F'}
          {/* {price} ฿ */}
        </div>
      </div>
      <div className='text-primary-100 flex h-full w-full items-start justify-center gap-4 p-8'>
        <GamePageCarousel mainImage={backgroundImageUrl} images={screenshots} />
        <GamePageDetail gameData={gameData} />
      </div>
    </div>
  );
}

export default GamePageHero;
