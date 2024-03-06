import Header from '@/layouts/Header';
import React from 'react';

function HomePage() {
  const arr = [
    {
      name: 'Game1',
      src: 'https://assetsio.reedpopcdn.com/Palworld-Erfolg-und-Kritik.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
    },
    {
      name: 'Game2',
      src: 'https://videogiochitalia.it/wp-content/uploads/2023/09/counter-strike-2-come-giocare.webp',
    },
    {
      name: 'Game3',
      src: 'https://creations.mattel.com/cdn/shop/products/v0edcv3v0hqxitgbdtbe.jpg?v=1708504111',
    },
    {
      name: 'Game4',
      src: 'https://cdn.vox-cdn.com/thumbor/iaRO8ZRmYP7vNgG5yPiBME1G1Wg=/0x0:3011x1447/1200x675/filters:focal(1123x329:1603x809)/cdn.vox-cdn.com/uploads/chorus_image/image/66954486/VALORANT_Jett_Red_crop.0.jpg',
    },
    {
      name: 'Game5',
      src: 'https://assets.beartai.com/uploads/2022/07/663.jpg',
    },
  ];
  return (
    <div className=' bg-base_dark flex overflow-hidden '>
      {arr.map((item, index) => {
        return (
          <div className=''>
            <img 
            className='flex rotate-6 object-cover h-[40rem] w-[30rem] scale-110 transition-all hover:scale-125 sepia hover:sepia-0 '
            src={item.src} 
            />
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
