import React from 'react';
import GameTagsCreator from './UserPage/game-publishing/GameTagsCreator';
import PlatformsCreator from './UserPage/game-publishing/PlatformsCreator';
import GenreCreator from './UserPage/game-publishing/GenresCreator';
import CreateGamePage from './PublishGamePage/CreateGamePage';

export default function DevPage() {
  return (
    <CreateGamePage />
    // <div className='flex gap-4'>
    //   <GameTagsCreator />
    //   <PlatformsCreator />
    //   <GenreCreator />
    // </div>
  );
}
