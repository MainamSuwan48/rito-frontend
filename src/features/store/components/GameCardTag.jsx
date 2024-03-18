import React from 'react';
import { makeSlug } from '@/utils/make-slug';
import { useDispatch } from 'react-redux';
import { searchGames, clearSearch } from '@/redux/slice/games-slice';
import { useNavigate } from 'react-router-dom';


function GameCardTag({ children, name }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const slugQuery = makeSlug(name);
  const search = (query) => {
    dispatch(searchGames(query));
    navigate(`/search/`);
  };
  return (
    <button
      onClick={() => search(slugQuery)}
      className='flex h-[2rem] items-center justify-center border-2 border-black px-1 text-xs text-black transition-all hover:scale-105 hover:border-primary active:scale-100'
    >
      {children}
    </button>
  );
}

export default GameCardTag;
