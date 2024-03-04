import React from 'react';
import Box from '../../../assets/Img/BOX.png';

export default function GameCard({ gameData }) {
  return (
    <div className='flex w-[18rem] flex-col bg-neutral'>
      {/* ========= < Img Game > ========= */}
      <div className='h-[10rem] w-full overflow-hidden bg-black bg-opacity-50 object-center'>
        <img src='https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg' />
      </div>

      {/* ========= < Header NameGame > ========= */}
      <div className='flex p-1.5'>
        <h1 className=' p-2 font-bold text-black'>Palworld</h1>
        {/* ========= < Icon Platfrom > ========= */}
        <div className=' ml-[8rem] grid grid-cols-3 items-center justify-end gap-1'>
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
      </div>

      {/* ========= < PriceGame > ========= */}
      <div>
        <button className='flex bg-base_dark'>
          <p className=' bg-success p-3 font-bold text-black'>-100%</p>
          <p className=' w-[7rem] p-2.5'>1,500 Baht</p>
          <p className=' bg-primary p-3'> ♥♡ </p>
          <p className=' flex justify-center bg-secondary p-3 text-black'>
            BUY&nbsp;
            <img className='h-[1rem]' src={Box} />
          </p>
        </button>
      </div>
    </div>
  );
}
