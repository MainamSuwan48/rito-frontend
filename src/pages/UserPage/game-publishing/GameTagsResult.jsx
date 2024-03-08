import React from 'react';
import GameTagForPublish from './GameTagForPublish';
import { useSelector, useDispatch } from 'react-redux';
import { addTagForPublishing } from '@/redux/slice/games-slice';

function GameTagsResult() {
  const dispatch = useDispatch();
  const { gameTags } = useSelector((state) => state.games);
  const handleAddTag = (tagId, tagName) => {
    dispatch(addTagForPublishing({ tagId, tagName }));
  };
  return (
    <div className='flex flex-col'>
      {gameTags.map((tag) => (
        <GameTagForPublish
          key={tag.id}
          tag={tag}
          id={tag.id}
          onClick={() => handleAddTag(tag.id, tag.name)}
          img={tag.backgroundImageUrl}
        >
          {tag.name}
        </GameTagForPublish>
      ))}
    </div>
  );
}

export default GameTagsResult;
