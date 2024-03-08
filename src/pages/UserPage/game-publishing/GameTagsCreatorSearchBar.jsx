import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchTags } from '@/redux/slice/games-slice';

function GameTagsCreatorSearchBar({ type = 'tags' }) {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const makeSlug = (input) => input.toLowerCase().replaceAll(' ', '-');

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
  };

  const handleSearchTags = () => {
    const searchTerm = makeSlug(searchQuery);
    dispatch(searchTags(searchTerm));
    console.log(searchTerm);
  };

  if (type === 'tags') {
    return (
      <div className='flex w-[500px]'>
        <input
          onChange={handleChange}
          type='text'
          className='h-12 flex-1 border border-base_dark px-12 py-4'
          placeholder='search your games here...'
        />
        <button
          onClick={handleSearchTags}
          className='h-12 flex-shrink-0 border border-base_dark bg-base_dark px-12 py-4  text-neutral transition-all hover:bg-primary  active:bg-primary_mute'
        >
          Search
        </button>
      </div>
    );
  }
}

export default GameTagsCreatorSearchBar;
