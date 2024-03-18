import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function PublishGameRequestingCard({ game }) {
  const navigate = useNavigate();
  console.log(game);
  return (
    <div
      className='flex items-center justify-between gap-12 overflow-hidden bg-neutral p-2.5 text-base_dark transition-all hover:scale-95'
      onClick={() => navigate(`/game/${game.id}`)}
      role='button'
    >
      <img
        className='h-[6rem] w-[12rem] cursor-pointer object-cover transition-all hover:scale-105 active:scale-100'
        src={game.backgroundImageUrl}
        alt='backgroundImage'
      />
      <div className=' flex flex-1 flex-col gap-2.5 font-semibold'>
        <p>{game.name}</p>
      </div>
      <div className='flex flex-1 flex-col gap-1.5 text-sm'>
        <p>User Id : {game.publisherId}</p>
        <p>Username : {game.user.username}</p>
        <p>Published : {format(game.createdAt, 'PP')}</p>
      </div>
      <div className='flex flex-1 flex-col items-center justify-center gap-1.5 '>
        <p>{game.price.toLocaleString()} Baht</p>
      </div>
    </div>
  );
}
