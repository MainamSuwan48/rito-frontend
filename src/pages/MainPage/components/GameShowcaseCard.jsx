import React from 'react';
import { useNavigate } from 'react-router-dom';

function GameShowcaseCard({ gameData }) {
  const navigate = useNavigate();
  const { backgroundImageUrl, name, price, id } = gameData;

  return (
    <div className='relative flex h-[350px] min-w-[30vw] flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-black shadow-lg '>
      <div className='absolute top-2 z-10 flex w-full justify-between p-2 text-left font-babas text-2xl text-neutral'>
        <p>{name}</p>

        <span className='relative right-0 block text-xl font-normal text-neutral'>
          {price} THB
        </span>
      </div>
      <img
        onClick={() => navigate(`/game/${id}`)}
        className='relative h-[full] w-full object-cover transition-all duration-300 ease-in-out hover:scale-105'
        src={backgroundImageUrl}
      ></img>
      <div className='absolute inset-0 h-1/3 bg-gradient-to-b from-black to-transparent'></div>
    </div>
  );
}

export default GameShowcaseCard;
