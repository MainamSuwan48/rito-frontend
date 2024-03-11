import React from 'react';
import { ChevronDownIcon, FriendIcon, ListIcon } from '@/icons';
import SearchBar from '@/features/store/components/SearchBar';
import AddFriendsModal from './AddFriendsModal';


export default function CommunitySearchBar() {

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
          <SearchBar type="community" />
          <AddFriendsModal/>        
        </div>
      </div>
    </div>
  );
}
