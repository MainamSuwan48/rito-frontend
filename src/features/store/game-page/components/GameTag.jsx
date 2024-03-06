import React from 'react';
import { makeSlug } from '@/utils/make-slug';
import { useDispatch } from 'react-redux';
import { searchGames } from '@/redux/slice/games-slice';
import { useNavigate } from 'react-router-dom';

function GameTag({ children, name }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const slugQuery = makeSlug(name);
  const search = (query) => {
    navigate('/search');
    dispatch(searchGames(query));
  };
  return (
    <div
      onClick={() => search(slugQuery)}
      className='z-10 mx-2 my-2 flex h-10 select-none items-center justify-center rounded-sm border-2 border-secondary bg-secondary px-4 text-xl font-semibold transition-all hover:scale-105 active:scale-100 active:bg-secondary_mute'
    >
      {children}
    </div>
  );
}

export default GameTag;
