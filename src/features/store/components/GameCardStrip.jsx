import React from 'react';
import GameCardTag from './GameCardTag';

export default function GameCardStrip({gameData}) {
  return (
    <div className='flex bg-white'>
      <img
        className='h-[6rem] w-[25rem] object-cover'
        src='https://cdn.akamai.steamstatic.com/steam/apps/1623730/capsule_616x353.jpg?t=1705662211'
      />
      <div className='flex flex-col justify-between p-4'>
        <div>
          <h2 className='font-bold text-black'>Palworld</h2>
          <div className='mt-2 flex gap-2'>
            <button className='border border-black bg-white p-1'>
              <p className='text-black'>kids</p>
            </button>
            <button className='border border-black bg-white p-1'>
              <p className='text-black'>open world</p>
            </button>
            <button className='border border-black bg-white p-1'>
              <p className='text-black'>creativity</p>
            </button>
          </div>
        </div>

      </div>
      <div className='flex items-end'>
        <button className='top-14 flex flex-row gap-1 bg-base_dark'>
          <p className='bg-lime-400 p-3 font-bold text-black'> -100% </p>
          <p className='p-3 font-bold'>1,500 Baht</p>
        </button>
      </div>
    </div>
  );
}
