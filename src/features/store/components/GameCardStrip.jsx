import React from 'react';
import GameCardTag from './GameCardTag';
import { useNavigate } from 'react-router-dom';
import { TrashIcon } from '@/icons';
import { useDispatch } from 'react-redux';
import { deleteItem } from '@/redux/slice/cart-slice';

export default function GameCardStrip({ gameData, type = '', cartId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { backgroundImageUrl, name, price, gameTags, id } = gameData;
  return (
    <div className='flex bg-white'>
      <img
        onClick={() => navigate(`/game/${id}`)}
        className='h-[6rem] w-[25rem] object-cover hover:scale-105 transition-all active:scale-100 cursor-pointer'
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

        {type !== 'cart' && (
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
      </div>
    </div>
  );
}
