import React from 'react';
import GameGenresResult from './GameGenresResult';
import { useSelector } from 'react-redux';
import GameTagsForDataInput from './GameTagsForDataInput';

function GenreCreator() {
  const { genresForPublishing } = useSelector((state) => state.games);

  return (
    <div className='flex w-full flex-col rounded-t-md bg-base-300'>
      <div className='flex min-h-12 flex-wrap gap-2 p-2'>
        {genresForPublishing.map((tag, index) => (
          <GameTagsForDataInput
            key={index}
            name={tag.name}
            id={tag.id}
            type='genre'
          />
        ))}
      </div>
      <div>
        <GameGenresResult />
      </div>
    </div>
  );
}

export default GenreCreator;
