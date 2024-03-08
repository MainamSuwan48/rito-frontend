import React from 'react';
import { useNavigate } from 'react-router-dom';
import LOAD from '../../assets/Img/RITO GAME LOADING.gif';
import { ChevronRightIcon, RabbitIcon } from '@/icons';

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
    <div className=''>
      {/* ============== < IMG HEADER > ============== */}
      <div className=' flex overflow-hidden bg-base_dark '>
        {arr.map((item, index) => {
          return (
            <div onClick={() => navigate(`/game/${item.id}`)} className=''>
              <img
                className='flex h-[40rem] w-[30rem] rotate-6 scale-110 object-cover sepia transition-all hover:scale-125 hover:sepia-0 '
                src={item.src}
              />
            </div>
          );
        })}
      </div>

      {/* <div class="bg-fixed ..." style="background-image: "> */}
      {/* ============== < TITLE BEST GAME > ============== */}
      <div className='mt-20 flex-col'>
        <p className=' flex justify-center text-7xl font-bold text-primary hover:text-secondary_mute'>
          BEST GAME IN YEAR 2024 <RabbitIcon />
        </p>
        <p className=' flex justify-center text-2xl font-bold'>
          Play brand new games on day one from RITO Game Store and Bethesda
          Softworks, plus selected indies and blockbusters.
        </p>
      </div>
      {/* ============== < TITLE BEST GAME BUTTON > ============== */}
      <div className='flex justify-center'>
        <button>
          <p className=' flex items-center gap-1 text-xl font-bold text-secondary_mute hover:gap-3 hover:text-primary'>
            EXPLORE THE CATALOGUE <ChevronRightIcon />
          </p>
        </button>
      </div>
      {/* ============== < IMG BEST GAME > ============== */}
      <div className=' m-8 flex flex-col justify-center'>
        <button className='flex gap-[4rem]'>
          <img
            className='m-10 h-[20rem] w-[20rem] hover:scale-110'
            src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/557703a2-f0df-4e9e-8006-f1a8a0666122/ddonp58-58ed224c-f931-496d-969a-2f7379849ef8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1NzcwM2EyLWYwZGYtNGU5ZS04MDA2LWYxYThhMDY2NjEyMlwvZGRvbnA1OC01OGVkMjI0Yy1mOTMxLTQ5NmQtOTY5YS0yZjczNzk4NDllZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bdeXXP5-vduyFZpwzARVpt55CjfxHYDzKDsa2viZhE8'
          />
          <img
            className='m-10 h-[20rem] w-[20rem] hover:scale-110'
            src='https://th.bing.com/th/id/OIP.6RAx47-LD054F72piNM0YAHaF8?rs=1&pid=ImgDetMain'
          />
          <img
            className='m-10 h-[20rem] w-[20rem] hover:scale-110'
            src='https://www.freeiconspng.com/uploads/csgo-icon-4.png'
          />
          <img
            className='m-10 h-[20rem] w-[20rem] hover:scale-110'
            src='https://th.bing.com/th/id/R.55a7be8ae9cdaf82bfff3b98b021d328?rik=jUzMfKIl5FT1TA&pid=ImgRaw&r=0'
          />
        </button>
      </div>

      {/* ============== < SHOW GAME 1 > ============== */}
      <div className='mt-[5rem] flex h-auto w-auto bg-primary hover:bg-secondary_mute '>
        <img
          className='h-[160%] w-[160%]'
          src='https://i.pinimg.com/originals/e5/4a/fa/e54afabd75adb33464e85f2687b43f87.gif'
        />
        <div className='p-[8rem]'>
          <button className='flex-col justify-center text-3xl text-neutral  hover:text-primary'>
            Cyberpunk 2077
          </button>
          <button className='flex-col justify-center text-3xl text-neutral ml-6 hover:text-primary'>
            GTA V
          </button>
          <br /> <br />
          <p className=' text-neutral'>
            Immerse yourself in the Cyberpunk universe, from the original
            storyline of Cyberpunk 2077 and its gripping spy-thriller expansion
            Phantom Liberty to the award-winning anime series Cyberpunk:
            Edgerunners — there are countless stories to discover in the deadly
            megalopolis of Night City.
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default HomePage;
