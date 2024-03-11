import React from 'react';
import GameCardTag from './GameCardTag';
import { useNavigate } from 'react-router-dom';
import { HeartIcon, TrashIcon } from '@/icons';
import { useDispatch } from 'react-redux';
import { deleteItem } from '@/redux/slice/cart-slice';

export default function GameCardStrip({ gameData, type = 'normal', cartId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { backgroundImageUrl, name, price, gameTags, id } = gameData;

  if (type == 'wishlist') {
    return (
      <div className='flex select-none flex-col border-b bg-base-300 shadow-lg'>
        <img
          onClick={() => navigate(`/game/${id}`)}
          className='h-[6rem] w-[25rem] cursor-pointer object-cover transition-all'
          src={backgroundImageUrl}
        />
        <div className='flex w-full items-center justify-between'>
          <div
            onClick={() => navigate(`/game/${id}`)}
            className='flex h-full cursor-pointer items-center p-3 font-bold transition-all hover:text-primary active:text-primary_mute'
          >
            {name}
          </div>
          <div
            onClick={() => navigate(`/game/${id}`)}
            className='flex h-full cursor-pointer items-center gap-2 p-3 text-black'
          >
            {price} Baht
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=' flex  bg-base-300 shadow-lg'>
      <img
        onClick={() => navigate(`/game/${id}`)}
        className='h-[6rem] w-[25rem] cursor-pointer object-cover transition-all hover:scale-105 active:scale-100'
        src={backgroundImageUrl}
      />
      <div className='flex w-full justify-between'>
        <div className='flex flex-col justify-between p-4'>
          <div>
            <h2 className='font-bold text-black'>{name}</h2>
            <div className='mt-2 flex gap-2'>
              {gameTags.slice(0, 3).map((tag, index) => (
                <GameCardTag key={tag.tag.id} name={tag.tag.name}>
                  {tag.tag.name}
                </GameCardTag>
              ))}
            </div>
          </div>
        </div>

        {type == 'normal' && (
          <div className='flex items-end'>
            <button className='top-14 flex flex-row gap-1 bg-base_dark'>
              {/* <p className='bg-lime-400 p-3 font-bold text-black'>{id}</p> */}
              <p
                onClick={() => navigate(`/game/${id}`)}
                className='p-3 font-bold text-white transition-all hover:bg-primary hover:text-black active:bg-primary_mute'
              >
                {price} Baht
              </p>
            </button>
          </div>
        )}

        {type === 'cart' && (
          <div className='flex gap-2'>
            <div className='flex h-full items-center font-medium'>
              <p>{gameData.price.toLocaleString()} baht</p>
            </div>
            <div
              className='flex h-full items-center bg-error px-3'
              role='button'
              onClick={() => dispatch(deleteItem(cartId))}
            >
              <TrashIcon className='stroke-white' />
            </div>
          </div>
        )}

        {type === 'profile' && (
          <div className=''>
            <div className='flex flex-col justify-end p-2'>
              <div className='font-bold'>
                Bought: {new Date(gameData.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        )}
        {type === 'wishlist' && (
          <div>
            <HeartIcon className='h-6 w-6 transition-all hover:scale-125 hover:fill-primary active:scale-100' />
          </div>
        )}
      </div>
    </div>
  );
}
