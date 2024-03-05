import React from 'react';
import Box from '../../../assets/Img/BOX.png';

export default function GameCardStrip() {
  return (
    <div className='flex bg-white'>
      <img
        className='h-[6rem] w-[25rem] object-cover'
        src={backgroundImageUrl}
      />
      <div className='flex w-full justify-between'>
        <div className='flex flex-col justify-between p-4'>
          <div>
            <h2 className='font-bold text-black'>{name}</h2>
            <div className='mt-2 flex gap-2'>
              {gameTags.slice(0, 3).map((tag, index) => (
                <GameCardTag key={tag.tag.id} id={tag.tag.id}>
                  {tag.tag.name}
                </GameCardTag>
              ))}
            </div>
          </div>
        </div>

        {/* ========= < PriceGame > ========= */}
        <div className='card-actions'>
          <button className='flex w-[30rem] bg-base_dark'>
            <p className='rounded-bl-md bg-lime-400 p-3 font-bold text-black hover:bg-lime-300'>
              -100%
            </p>
            <p className='p-3 font-bold'>1,500 Baht</p>
            <p className=' bg-primary p-3'> ♡♥ </p>
            <p className=' flex justify-center rounded-br-md bg-secondary p-3 font-bold text-black'>
              BUY&nbsp;
              <img className='h-[1rem] w-[1rem]' src={Box} />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
