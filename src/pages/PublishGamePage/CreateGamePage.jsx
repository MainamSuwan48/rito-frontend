import React from 'react';
import CreateGameContainer from '@/features/publish-game/components/CreateGameContainer';

function CreateGamePage() {
  return (
    <div className='grid grid-cols-12 gap-12 px-[128px] py-12'>
      <CreateGameContainer />
    </div>
  );
}

export default CreateGamePage;
