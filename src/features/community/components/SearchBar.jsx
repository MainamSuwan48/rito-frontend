import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchGames } from '@/redux/slice/games-slice';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '@/icons';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function SearchBar({ type = '' }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const makeSlug = (input) => input.toLowerCase().replaceAll(' ', '-');

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const searchTerm = makeSlug(searchQuery);
    dispatch(searchGames(searchTerm));
    navigate(`/search/`);
    console.log(searchTerm);
  };

  const toggleSort = () => {
    if (type === 'search') {
      return dispatch(reverseSearchedGames());
    }
    dispatch(reverseGames());
  };

  if (type == 'community') {
    return (
      <div className='z-10 flex h-12 flex-grow *:backdrop-blur-lg'>
        <div className='flex w-full'>
          <input
            onChange={handleChange}
            type='text'
            className='flex-1 border border-base_dark px-12 py-4'
            placeholder='search post...'
          />

          <button className='flex-shrink-0 bg-base_dark px-12 py-4  text-neutral transition-all hover:bg-primary  active:bg-primary_mute'>
            Search
          </button>
          <div className='flex h-12 items-center justify-center'>
            <Select onValueChange={(value) => sortSearched(value)} className=''>
              <SelectTrigger className='h-12 w-[160px] rounded-none'>
                <SelectValue placeholder='Sort By' />
              </SelectTrigger>
              <SelectContent>
                {/* sort by created at */}
                <SelectItem value='id'>Latest Post</SelectItem>
                {/* sort by updated at */}
                <SelectItem value='name'>Latest Active</SelectItem>
                {/* sort by Most Like, View(opt) */}
                <SelectItem value='releasedDate'>Trending Post</SelectItem>
                {/* sort by Relation friend */}
                <SelectItem value='releasedDate'>Fried's Post</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* <button className='flex-shrink-0 bg-base_dark px-12 py-4  text-neutral transition-all hover:bg-primary  active:bg-primary_mute'>
            Search
          </button> */}
        </div>
      </div>
    );
  }

  return (
    <div className='z-30 flex h-12 flex-grow *:backdrop-blur-lg'>
      <div className='flex w-full'>
        <input
          onChange={handleChange}
          type='text'
          className='flex-1 border border-base_dark px-12 py-4'
          placeholder='search your games here...'
        />
        <button
          onClick={handleSearch}
          className='flex-shrink-0 bg-base_dark px-10 py-4  text-neutral transition-all hover:bg-primary  active:bg-primary_mute'
        >
          Search
        </button>
      </div>
    </div>
  );
}
