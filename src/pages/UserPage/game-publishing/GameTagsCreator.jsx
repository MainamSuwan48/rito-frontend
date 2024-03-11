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
    <div
      onClick={test}
      className='flex w-full flex-col rounded-t-md bg-base-300 p-2 gap-1'
    >
      <div className='flex min-h-12 gap-2 p-2 items-start justify-start flex-wrap align-content-start'>
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
