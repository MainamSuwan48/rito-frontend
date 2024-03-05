import React from 'react';
import GameCardTag from './GameCardTag';
import { useNavigate } from 'react-router-dom';

export default function GameCardStrip({ gameData }) {
  const navigate = useNavigate();

  const { backgroundImageUrl, name, price, gameTags, id } = gameData;
  console.log(gameTags, 'tags in card strip');
  return (
    <div className='flex bg-white'>
      <img
        className='h-[6rem] w-[25rem] object-cover'
        src={backgroundImageUrl}
      />
      <div 
      className='flex justify-between w-full'
      >
        <div className='flex flex-col justify-between p-4'>
          <div>
            <h2 className='font-bold text-black'>{name}</h2>
            <div className='mt-2 flex gap-2'>
              {gameTags.slice(0, 3).map((tag, index) => (
                <GameCardTag key={tag.tag.id} id={tag.tag.id}>
                  {tag.tag.name}
                </GameCardTag>
              ))}
            </div>
          </div>
        </div>
        <div className='flex items-end'>
          <button className='top-14 flex flex-row gap-1 bg-base_dark'>
            {/* <p className='bg-lime-400 p-3 font-bold text-black'>{id}</p> */}
            <p
              onClick={() => navigate(`/game/${id}`)}
              className='p-3 font-bold transition-all hover:bg-primary hover:text-black active:bg-primary_mute'
            >
              {price} Baht
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
