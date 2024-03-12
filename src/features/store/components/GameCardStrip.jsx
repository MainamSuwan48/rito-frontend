import React from 'react';
import GameCardTag from './GameCardTag';
import { useNavigate } from 'react-router-dom';
import { HeartIcon, TrashIcon } from '@/icons';
import { useDispatch ,useSelector } from 'react-redux';
import { deleteItem } from '@/redux/slice/cart-slice';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export default function GameCardStrip({
  gameData,
  type = 'normal',
  cartId,
  userId,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function convertToDate(dateObj) {
    let date = new Date(dateObj);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
  }

  const { backgroundImageUrl, name, price, gameTags, id, gameCollections } =
    gameData;

  console.log(gameData, gameCollections, 'gameData in GameCardStrip');

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
    <div className=' flex  bg-base-300 bg-opacity-80 shadow-lg'>
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
          <div className='flex h-full flex-col justify-between p-2'>
            <Popover>
              <PopoverTrigger className='cursor-pointer select-none border-2 p-2 font-extrabold text-base_dark transition-all hover:border-primary hover:text-primary active:scale-100'>
                View Game Keys
              </PopoverTrigger>
              <PopoverContent className='w-full bg-opacity-80 bg-gradient-to-b from-black/50'>
                <div className='flex flex-col gap-2'>
                  {/* reversing the order so it show the lastest order first */}
                  {[...gameCollections].reverse().map((collection) => (
                    <div
                      key={collection.id}
                      className='flex flex-col gap-1 border-b-2 border-b-primary p-1'
                    >
                      <div className='font-bold'>
                        {convertToDate(collection.createdAt)}
                      </div>
                      <div className='flex items-center justify-center font-bold'>
                        GameKey:
                        <div className='bg-base_dark p-1 font-bold text-white'>
                          {collection.gameKey}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
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
