import React from 'react';
import { ChevronDownIcon, FriendIcon, ListIcon } from '@/icons';

export default function CommunutyPage() {
  return (
    <div className='flex justify-center'>
      <div className='p-[2rem]'>
        <h1 className='text-3xl font-bold text-black'> Communuty Activity </h1>

        <div className='flex gap-4 p-3'>
          <button className='flex w-auto justify-center bg-base_light p-3'>
            <p className='m-2 flex items-center gap-2'>
              Filter <ListIcon />
            </p>
          </button>
          <button className='flex w-auto justify-center bg-base_light p-3'>
            <p className='m-2 flex items-center gap-2'>
              Sort by <ChevronDownIcon />
            </p>
          </button>
          <div className='flex w-[30rem] items-center justify-center border-2 border-black'>
            <p className=' font-bold '> Search Bar </p>
            {/* <SearchBar /> */}
          </div>
          <button className=' flex w-auto items-center justify-center bg-base_dark'>
            <p className='m-4 flex items-center gap-2 text-neutral'>
              Search for Friends <FriendIcon />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
