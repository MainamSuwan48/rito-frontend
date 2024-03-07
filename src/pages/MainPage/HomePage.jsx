import Header from '@/layouts/Header';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const arr = [
    {
      id: 3287,
      name: 'Game1',
      src: 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_G1_1920x1080_19_0911-1920x1080-1d69e15f00cb5ab57249f208f1f8f45d52cbbc59.jpg',
    },
    {
      id: 4291,
      name: 'Game2',
      src: 'https://videogiochitalia.it/wp-content/uploads/2023/09/counter-strike-2-come-giocare.webp',
    },
    {
      id: 4161,
      name: 'Game3',
      src: 'https://assetsio.reedpopcdn.com/135430220067.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
    },
    {
      id: 58175,
      name: 'Game4',
      src: 'https://media.wired.com/photos/639bf35a24c352e627eccc43/master/pass/Ragnaro%CC%88k-culture-ar1qdh.jpg',
    },
    {
      id: 3144,
      name: 'Game5',
      src: 'https://img.gg.deals/65/91/5991c0b4e9b286c52d9d2270ffbf932915f1_912cr476.jpg',
    },
  ];
  return (
    <div className=' flex overflow-hidden bg-base_dark '>
      {arr.map((item, index) => {
        return (
          <div
            key={item.id}
            onClick={() => navigate(`/game/${item.id}`)}
            className=''
          >
            <img
              className='flex h-[40rem] w-[30rem] rotate-6 scale-110 object-cover sepia transition-all hover:scale-125 hover:sepia-0 '
              src={item.src}
            />
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
