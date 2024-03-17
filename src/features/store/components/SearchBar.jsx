import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchGames } from '@/redux/slice/games-slice';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '@/icons';

export default function SearchBar({
  type = '',
  gameSearchQuery,
  setGameSearchQuery,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const makeSlug = (input) => input.toLowerCase().replaceAll(' ', '-');

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
  };

  const handleGameSearchChange = (e) => {
    setGameSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const searchTerm = makeSlug(searchQuery);
    dispatch(searchGames(gameSearchQuery));
    navigate(`/search/`);
    console.log(searchTerm);
  };

  if (type == 'community') {
    return (
      <div className='z-40 flex h-14 flex-grow *:backdrop-blur-lg'>
        <div className='flex w-full'>
          <input
            onChange={handleChange}
            type='text'
            className='flex-1 border border-base_dark px-12 py-4'
            placeholder='search for posts ...'
          />

          <button className='flex-shrink-0 bg-base_dark px-12 py-4  text-neutral transition-all hover:bg-primary  active:bg-primary_mute'>
            Search
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='z-30 flex h-14 flex-grow *:backdrop-blur-lg'>
      <div className='flex w-full'>
        <input
          onChange={handleGameSearchChange}
          type='text'
          className='flex-1 border border-base_dark px-12 py-4'
          placeholder='search your games here...'
        />
        <button
          onClick={handleSearch}
          className='flex-shrink-0 bg-base_dark px-12 py-4  text-neutral transition-all hover:bg-primary  active:bg-primary_mute'
        >
          Search
        </button>
      </div>
    </div>
  );
}
