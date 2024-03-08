import GamePlatformsResult from './GamePlatformsResult';
import GameTagsForDataInput from './GameTagsForDataInput';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { makeSlug } from '@/utils/make-slug';
import { searchPlatforms } from '@/redux/slice/games-slice';

function PlatformsCreator() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const { gamePlatformsForPublishing } = useSelector((state) => state.games);

  const handleChange = (e) => {
    setQuery(e.target.value);
    const searchTerm = makeSlug(query);
    dispatch(searchPlatforms(searchTerm));
  };
  return (
    <div className='flex w-[500px] flex-col rounded-t-md bg-base-300'>
      <div className='flex min-h-12 flex-wrap gap-2 p-2'>
        {gamePlatformsForPublishing.map((tag, index) => (
          <GameTagsForDataInput
            key={index}
            name={tag.name}
            id={tag.id}
            type='platform'
          />
        ))}
      </div>
      <input
        type='text'
        value={query}
        placeholder='Search for platforms'
        className='w-full bg-base-200 p-2 text-black'
        onChange={handleChange}
      />
      <div>
        <GamePlatformsResult />
      </div>
    </div>
  );
}

export default PlatformsCreator;
