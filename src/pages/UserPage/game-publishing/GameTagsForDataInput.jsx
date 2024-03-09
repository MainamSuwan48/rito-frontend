import React from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteDataTag,
  deleteDataGenre,
  deleteDataPlatform,
} from '@/redux/slice/games-slice';

function GameTagsForDataInput({ name, id, type = 'tag' }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (type === 'tag') {
      dispatch(deleteDataTag({ tagId: id }));
    } else if (type === 'platform') {
      dispatch(deleteDataPlatform({ platformId: id }));
    } else {
      dispatch(deleteDataGenre({ genreId: id }));
    }
  };
  return (
    <div
      onClick={handleDelete}
      className='flex-shrink-0 flex-grow-0 text-wrap rounded-md bg-primary p-2 text-xs text-neutral shadow-md transition-all hover:scale-110 active:scale-95'
    >
      {name}
    </div>
  );
}

export default GameTagsForDataInput;
