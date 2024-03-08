import React from 'react';
import GameTagsCreatorSearchBar from './GameTagsCreatorSearchBar';
import GameTagsResult from './GameTagsResult';
import GameTagsForDataInput from './GameTagsForDataInput';
import { useSelector, useDispatch } from 'react-redux';

function GameTagsCreator() {
  const dispatch = useDispatch();
  const { gameTagsForPublishing } = useSelector((state) => state.games);

  const test = () => {
    console.log(
      gameTagsForPublishing,
      'gameTagsForPublishing in GameTagsCreator'
    );
  };

  return (
    <div onClick={test} className='flex w-[500px] flex-col bg-base-300'>
      <div className='flex flex-wrap gap-2 p-2 min-h-12 rounded-t-md'>
        {gameTagsForPublishing.map((tag, index) => (
          <GameTagsForDataInput key={index} name={tag.name} id={tag.id} />
        ))}
      </div>
      <GameTagsCreatorSearchBar />
      <div>
        <GameTagsResult />
      </div>
    </div>
  );
}

export default GameTagsCreator;
