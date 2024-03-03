import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function GamePageHeroDetail({ gameData }) {
  const { name, platforms, genres, released } = gameData;

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
      <div className='flex h-96  w-1/3 flex-col gap-2 rounded-xl border-2 border-primary bg-base-100 p-5 text-center'>
        <div className='flex flex-col gap-2 overflow-auto'>
          <p className='mb-2 text-left text-3xl font-extrabold text-primary'>
            Details
          </p>

          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2 text-left'>
              <span className='font-bold text-secondary'>Released Date </span>
              <p>{date}</p>
            </div>
            <div className='flex flex-col gap-2 text-left'>
              <span className='font-bold text-secondary'>Platforms </span>
              <p>
                {platforms.map((platform) => `${platform.platform.name}, `)}
              </p>
            </div>
            <div className='flex flex-col gap-2 text-left'>
              <span className='font-bold text-secondary'>Genres </span>
              <p>
                {genres.length === 1
                  ? genres[0].name
                  : genres.map((genre) => `${genre.name}, `)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GamePageHeroDetail;
