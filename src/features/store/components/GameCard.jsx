import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GameCard({ gameData }) {
  const navigate = useNavigate();
  const { backgroundImageUrl, name, price, gameTags, id } = gameData;
  return (
    <div className='flex h-[425px] w-[26rem] flex-col bg-neutral transition-all hover:scale-105'>
      {/* ========= < Img Game > ========= */}
      <div className='relative h-full w-full overflow-hidden bg-black bg-opacity-50 object-center'>
        <img
          className='absolute h-full w-full object-cover object-center'
          src={backgroundImageUrl}
        />
      </div>

      {/* ========= < Header NameGame > ========= */}
      <div className='flex p-1.5'>
        <h1 className=' w-full p-2 font-bold text-black'>{name}</h1>
        {/* ========= < Icon Platfrom > ========= */}
      </div>

      {/* ========= < PriceGame > ========= */}
      <div>
        <button className='flex w-full justify-between bg-base_dark'>
          {/* <p className=' bg-success p-3 font-bold text-white'>-100%</p> */}
          <p
            onClick={() => navigate(`/game/${id}`)}
            className='w-full p-2.5 text-base-100 transition-all hover:bg-base_light hover:text-base-100 active:bg-base-100'
          >
            {price} THB
          </p>
          <p className='flex bg-primary p-3'> ♡ </p>
          <p
            onClick={() => navigate(`/game/${id}`)}
            className='flex justify-center bg-secondary p-3 text-white transition-all hover:bg-success active:bg-green-800'
          >
            BUY&nbsp;
          </p>
        </button>
      </div>
    </div>
  );
}
