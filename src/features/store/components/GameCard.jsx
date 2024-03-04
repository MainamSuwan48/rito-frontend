import React from 'react';

export default function GameCard() {
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
      <div className='card-body bg-slate-100'>
        {/* =========== < Header Name Game > =========== */}
        <h2 className='card-title text-black font-bold'>Palworld</h2>

        {/* =========== < div info Tax > =========== */}
        <div className='flex flex-row'>
          {/* =========== < div TaxGame > =========== */}
          <button className='border-black border p-1 bg-white'>
            <p className=' text-black'>kids</p>
          </button>
          &nbsp;
          <button className='border-black border p-1 bg-white'>
            <p className='text-black'>open world</p>
          </button>
          &nbsp;
          <button className='border-black border p-1 bg-white'>
            <p className='text-black'>creativity</p>
          </button>
        </div>

        {/* =========== < div PriceGame > =========== */}
        <div>
          <button className=' card-actions absolute bottom-0 right-0 bg-base_dark'>
            <p className='p-3 bg-lime-400 text-black font-bold'> -100% </p>
            <p className='p-3'>1,500 Baht</p>
          </button>
        </div>
      </div>
    </div>
  );
}
