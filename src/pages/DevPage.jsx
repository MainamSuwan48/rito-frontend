import GameCard from '@/features/store/components/GameCard';
import GameCardStrip from '@/features/store/components/GameCardStrip';
import React from 'react';


import GameStorePage from './StorePage/GameStorePage';

import SideBar from '@/features/store/components/SideBar';

import SearchBar from '@/features/store/components/SearchBar';

function DevPage() {
  return (

    <div>
      <SearchBar />
   <div className='m-4'>
      <SearchBar />

<div className='flex flex-col gap-4'>
      {/* =============== < Game 1 > =============== */}
      <div className='flex h-14 w-full justify-between p-6 text-neutral'>
        <img
          className='h-14 w-[14rem]'
          src='https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/capsule_616x353.jpg?t=1707904340'
        />
        <div className='h-14 w-full flex justify-between bg-base_light pl-4 text-black'>
          <h1 className='flex m-2 font-bold hover:text-danger'> Palworld </h1>
          <div className='flex p-1'>
            <button className='w-auto border-2 border-black p-1 m-2 hover:scale-105'>Funny</button>
            <button className='w-auto border-2 border-black p-1 m-2 hover:scale-105'>Open World</button>
            <button className='w-auto border-2 border-black p-1 m-2 hover:scale-105'>RPG</button>
          </div>
          <div className='flex justify-end'>
            <p className='flex items-center mr-2'> 559 Baht </p>
            <button className='flex items-center bg-danger p-2 text-neutral hover:scale-105 '>
              DELETE
            </button>
          </div>
        </div>
      </div>

      {/* =============== < Game 2 > =============== */}
      <div className='flex h-14 w-full justify-between p-6 text-neutral'>
        <img
          className='h-14 w-[14rem] bg-primary'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'
        />
        <div className='h-14 w-full flex justify-between bg-base_light pl-4 text-black'>
          <h1 className='flex m-2 font-bold hover:text-danger'> Pokemon </h1>
          <div className='flex p-1'>
            <button className='w-auto border-2 border-black p-1 m-2 hover:scale-105'>Funny</button>
            <button className='w-auto border-2 border-black p-1 m-2 hover:scale-105'>Open World</button>
            <button className='w-auto border-2 border-black p-1 m-2 hover:scale-105'>RPG</button>
          </div>
          <div className='flex justify-end'>
          <p className='flex items-center mr-2'> 129 Baht </p>
            <button className='flex items-center bg-danger p-2 text-neutral hover:scale-105 '>
              DELETE
            </button>
          </div>
        </div>
      </div>
      </div>


    </div>
  );
}

export default DevPage;
