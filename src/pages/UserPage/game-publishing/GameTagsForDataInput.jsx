import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteDataTag } from '@/redux/slice/games-slice';

function GameTagsForDataInput({ name, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteDataTag({ tagId: id }));
  };
  return (
    <div
      onClick={handleDelete}
      className='flex-shrink-0 flex-grow-0 text-wrap rounded-md bg-primary p-2 text-xs text-neutral shadow-md transition-all hover:scale-110 active:scale-95'
    >
      {name} id{': ' + id}
    </div>
  );
}

export default GameTagsForDataInput;
