import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlatforms } from '@/redux/slice/games-slice';
import { useEffect } from 'react';
import GameTagForPublish from './GameTagForPublish';
import { addPlatformForPublishing } from '@/redux/slice/games-slice';

function GamePlatformsResult() {
  const dispatch = useDispatch();
  const { filteredPlatforms } = useSelector((state) => state.games);

  useEffect(() => {
    if (filteredPlatforms.length === 0) {
      dispatch(getAllPlatforms());
    }
  }, [filteredPlatforms]);

  const handleAddPlatform = (platformId, platformName) => {
    dispatch(addPlatformForPublishing({ platformId, platformName }));
  };
  

  return (
    <div className='flex min-h-12 flex-col bg-red-500'>
      {filteredPlatforms &&
        filteredPlatforms.map((platform) => (
          <GameTagForPublish
            key={platform.id}
            tag={platform}
            id={platform.id}
            img={
              'https://png.pngtree.com/background/20230519/original/pngtree-display-of-old-games-and-consoles-picture-image_2652598.jpg'
            }
            onClick={() => handleAddPlatform(platform.id, platform.name)}
          >
            {platform.name}
          </GameTagForPublish>
        ))}
    </div>
  );
}

export default GamePlatformsResult;
