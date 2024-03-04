import React from 'react';
import GameCardTag from './GameCardTag';

export default function GameCardStrip({gameData}) {
  return (
    // =========== < div Header > ===========
    <div className='card card-side bg-white shadow-xl'>
      {/* =========== < Img Game > =========== */}
      <figure>
        <img
          className='h-[12rem] w-[20rem]'
          src='https://th.techwar.gr/wp-content/uploads/2024/02/Palworld-First-Impressions-%CE%BC%CE%B5%CF%84%CE%AC-%CE%B1%CF%80%CF%8C-30-%CF%8E%CF%81%CE%B5%CF%82.jpg?v=1706995276'
        />
      </figure>

      {/* =========== < div Info Game > =========== */}
      <div className='card-body'>
        {/* =========== < Header Name Game > =========== */}
        <h2 className='card-title font-bold text-black'>Palworld</h2>

        {/* =========== < div info tag> =========== */}
        <div className='flex gap-2'>
          {/* =========== < div game tags > =========== */}
          <GameCardTag>kids</GameCardTag>
          <GameCardTag>kids</GameCardTag>
          <GameCardTag>kids</GameCardTag>
        </div>

        {/* =========== < div PriceGame > =========== */}
        <div>
          <button className='card-actions absolute bottom-0 right-0 bg-base_dark'>
            <p className='bg-lime-400 p-3 font-bold text-black'> -100% </p>
            <p className='p-3'>1,500 Baht</p>
          </button>
        </div>
      </div>
    </div>
  );
}
