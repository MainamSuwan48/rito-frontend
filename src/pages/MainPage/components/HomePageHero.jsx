import React from 'react';
import mockGame from './mockGame.json';
import { useNavigate } from 'react-router-dom';

function HomePageHero() {
  const navigate = useNavigate();
  return (
    <div className=' flex overflow-hidden bg-base_dark '>
      {mockGame.map((item, index) => {
        return (
          <div
            onClick={() => navigate(`/game/${item.id}`)}
            className=''
            key={item.id}
          >
            <img
              className='flex h-[40rem] w-[30rem] rotate-6 scale-110 object-cover grayscale transition-all duration-300 hover:scale-125 hover:grayscale-0'
              src={item.src}
            />
          </div>
        );
      })}
    </div>
  );
}

export default HomePageHero;
