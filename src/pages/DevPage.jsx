import GameCard from '@/features/store/components/GameCard';
import GameCardStrip from '@/features/store/components/GameCardStrip';
import React from 'react';

function DevPage() {
  return (
    <>
      <div className='flex flex-col items-center justify-center ga[-2'>
        <h1 className='text-4xl font-bold'>Dev Page</h1>
        <GameCard />
        <GameCardStrip />
      </div>
    </>
  );
}

export default DevPage;
