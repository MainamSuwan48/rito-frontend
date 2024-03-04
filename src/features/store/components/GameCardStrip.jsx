import React from 'react';
import Box from '../../../assets/Img/BOX.png';

export default function GameCardStrip() {
  return (
    <div className='card bg-slate-100 w-96'>
      {/* ========= < Img Game > ========= */}
      <div className=' pb-2'>
        <img src='https://m.media-amazon.com/images/M/MV5BZWNhOGVmOTQtYThkNC00Nzc2LTg3M2ItNjVlMTEzNTJmZTNiXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg' />
      </div>

      {/* ========= < Header NameGame > ========= */}
      <div className='card-body p-[0.3px] pt-1'>
        <h2 className='card-title text-black'>Palworld</h2>

        {/* ========= < Icon Platfrom > ========= */}
        <div className='flxe-row absolute right-2 m-1 flex'>
          <img
            className='h-[1.3rem] w-[1.3rem]'
            src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/windows-icon.png'
          />
          <img
            className='h-[1.3rem] w-[1.3rem]'
            src='https://www.freeiconspng.com/thumbs/xbox-icon/xbox-icon-23.jpg'
          />
          <img
            className='h-[1.3rem] w-[1.3rem]'
            src='https://upload.wikimedia.org/wikipedia/commons/5/5a/PlayStation_Icon.png'
          />
        </div>

        {/* ========= < PriceGame > ========= */}
        <div className='card-actions'>
          <button className='flex w-[30rem] bg-base_dark'>
            <p className='bg-lime-400 hover:bg-lime-300 text-black rounded-bl-md p-3 font-bold'>
              -100%
            </p>
            <p className='p-3 font-bold'>1,500 Baht</p>
            <p className=' bg-primary p-3'> ♡♥ </p>
            <p className=' bg-secondary text-black flex justify-center rounded-br-md p-3 font-bold'>
              BUY&nbsp;
              <img className='h-[1rem] w-[1rem]' src={Box} />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
