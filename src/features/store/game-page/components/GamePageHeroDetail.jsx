import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import GamePageButton from './GamePageButton';
import { HeartIcon } from '@/icons';

function GamePageHeroDetail({ gameData }) {
  const { name, platforms, genres, released, metacritic } = gameData;

  {
    /* =============== < This will convert date to a readable string > =============== */
  }
  function convertToDate(obj) {
    let date = new Date(obj);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  let date = convertToDate(released);

  console.log(date, 'date**************************');

  return (
    <>
      <div className='flex h-[400px] w-2/5 flex-col justify-between gap-2 border-2 border-primary bg-base_light text-center'>
        <div className='flex flex-col gap-2 overflow-auto'>
          <div className='w-full bg-base-100 p-4'>
            <p className='text-left font-semibold'>Details</p>
          </div>

          <div className='flex flex-col gap-4 px-4 py-2'>
            <div className='flex flex-col gap-2 text-left'>
              <span className='font-bold text-black'>Released Date </span>
              <p className='text-sm text-black'>{date}</p>
            </div>
            <div className='flex flex-col gap-2 text-left'>
              <span className='font-bold text-black'>Platforms </span>
              <p className='text-sm text-black'>
                {platforms.map((platform) => `${platform.platform.name}, `)}
              </p>
            </div>
            <div className='flex flex-col gap-2 text-left'>
              <span className='font-bold text-black'>Genres </span>
              <p className='text-sm text-black'>
                {genres.length === 1
                  ? genres[0].name
                  : genres.map((genre) => `${genre.name}, `)}
              </p>
            </div>
            <div className='flex flex-col gap-2 text-left'>
              <span className='font-bold text-black'>Metacritic </span>
              <p className='text-sm text-black'>{metacritic}</p>
            </div>
          </div>
        </div>
        <div className='flex w-full justify-between'>
          <GamePageButton
            bg='bg-primary'
            width='w-1/4'
            activeColor='active:bg-primary_mute'
          >
            <HeartIcon />
          </GamePageButton>
          <GamePageButton
            bg='bg-secondary'
            width='w-3/4'
            activeColor='active:bg-secondary_mute'
          >
            ADD TO CART
          </GamePageButton>
        </div>
      </div>
    </>
  );
}

export default GamePageHeroDetail;
