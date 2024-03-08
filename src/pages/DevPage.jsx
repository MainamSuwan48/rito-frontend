import GameTag from '@/features/store/game-page/components/GameTag';
import React from 'react';
import GameTagsCreator from './UserPage/game-publishing/GameTagsCreator';
import PlatformsCreator from './UserPage/game-publishing/PlatformsCreator';
import GenreCreator from './UserPage/game-publishing/GenresCreator';

function DevPage() {
  return (
    <div className='flex gap-2'>
      <GameTagsCreator />
      <PlatformsCreator />
      <GenreCreator />
    </div>
  );
}

export default DevPage;
