import React from 'react';
import { useNavigate } from 'react-router-dom';
import LOAD from '../../assets/Img/RITO GAME LOADING.gif';
import {
  ChevronRightIcon,
  RabbitIcon,
  FacebookIcon,
  TwitchIcon,
  YoutubeIcon,
} from '@/icons';
import BGCITY from '../../assets/Img/BG-CITY.png';
import ScrollText from './ScrollText';

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
    <div>
      {/* ============== < IMG HEADER > ============== */}
      <div className=' flex overflow-hidden bg-base_dark '>
        {arr.map((item, index) => {
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

      <div className='p-[5rem]' style={{ backgroundImage: `url(${BGCITY})` }}>
        {/* ============== < TITLE BEST GAME > ============== */}
        <div className=' flex-col'>
          <p className=' flex justify-center text-7xl font-bold text-purple-500 duration-100 hover:scale-105 hover:text-primary'>
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
            <ScrollText>
              <img
                className='h-auto w-[100%] duration-300 hover:scale-110'
                src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/557703a2-f0df-4e9e-8006-f1a8a0666122/ddonp58-58ed224c-f931-496d-969a-2f7379849ef8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1NzcwM2EyLWYwZGYtNGU5ZS04MDA2LWYxYThhMDY2NjEyMlwvZGRvbnA1OC01OGVkMjI0Yy1mOTMxLTQ5NmQtOTY5YS0yZjczNzk4NDllZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bdeXXP5-vduyFZpwzARVpt55CjfxHYDzKDsa2viZhE8'
              />
            </ScrollText>
            <ScrollText>
              <img
                className='h-auto w-[100%] duration-300 hover:scale-110'
                src='https://cos-1308089331.cos.accelerate.myqcloud.com/user_files/1/bbs/92264040_1647708448.png'
              />
            </ScrollText>
            <ScrollText>
              <img
                className='h-auto w-[100%] duration-300 hover:scale-110'
                src='https://www.freeiconspng.com/uploads/csgo-icon-4.png'
              />
            </ScrollText>
            <ScrollText>
              <img
                className='h-auto w-[100%] duration-300 hover:scale-110'
                src='https://th.bing.com/th/id/R.55a7be8ae9cdaf82bfff3b98b021d328?rik=jUzMfKIl5FT1TA&pid=ImgRaw&r=0'
              />
            </ScrollText>
          </button>
        </div>
      </div>

      {/* ============== < SHOW GAME 1 > ============== */}
      <div className=' flex h-auto w-auto bg-base_dark '>
        <div className='p-[8rem]'>
          <button className='flex-col justify-center text-3xl text-neutral duration-200 hover:scale-150 hover:text-purple-500'>
            Cyberpunk 2077
          </button>
          <br /> <br />
          <p className=' text-neutral'>
            <ScrollText>
              Immerse yourself in the Cyberpunk universe, from the original
              storyline of Cyberpunk 2077 and its gripping spy-thriller
              expansion Phantom Liberty to the award-winning anime series
              Cyberpunk: Edgerunners — there are countless stories to discover
              in the deadly megalopolis of Night City.
            </ScrollText>
          </p>
          {/* ============== < Cyber GAME BUTTON > ============== */}
          <div className='flex justify-center'>
            <button>
              <p className=' flex items-center gap-1 text-xl font-bold text-primary hover:gap-3 hover:text-neutral'>
                OPEN TO RITO STORE <ChevronRightIcon />
              </p>
            </button>
          </div>
        </div>
        <img
          className='w-full overflow-hidden object-center'
          src='https://i.pinimg.com/originals/e5/4a/fa/e54afabd75adb33464e85f2687b43f87.gif'
        />
      </div>

      {/* ============== < DOWNLOAD APP GAME > ============== */}
      <div className='p-[5rem]' style={{ backgroundImage: `url(${BGCITY})` }}>
        {/* ============== < TITLE BEST GAME > ============== */}
        <div className=' flex-col'>
          <p className=' flex justify-center text-7xl font-bold text-purple-500 duration-100 hover:scale-105 hover:text-primary'>
            BUILT FOR PC GAMERS <RabbitIcon />
          </p>
          <p className=' flex items-center justify-center text-2xl font-bold text-base_dark'>
            Finding your next favorite game has never been easier<br></br>Browse
            the catalog View recommendations Filter by category
          </p>
        </div>
        {/* ============== < TITLE BEST GAME BUTTON > ============== */}
        <div className='flex justify-center'>
          <button>
            <p className=' flex items-center gap-1 text-xl font-bold text-secondary_mute hover:gap-3 hover:text-primary'>
              DOWNLOAD RITO APP <ChevronRightIcon />
            </p>
          </button>
        </div>
      </div>

      {/* ============== < SHOW GAME 2 > ============== */}
      <div
        className='flex bg-cover '
        style={{
          backgroundImage: `url(https://s5.gifyu.com/images/SiREe.gif)`,
        }}
      >
        <ScrollText>
          <img
            className='h-[22rem] w-[80rem] p-8 duration-300 hover:scale-110'
            src='https://1000logos.net/wp-content/uploads/2022/10/Grand-Theft-Auto-V-logo.png'
          />
        </ScrollText>
        <div className='bg-white p-[6rem] opacity-60 '>
          <button className='flex-col justify-center text-3xl font-bold text-base_dark duration-200 hover:scale-150 hover:text-purple-600'>
            Grand Theft Auto V
          </button>
          <div>
            <ScrollText>
              <p className=' font-bold text-base_dark'>
                When a young street hustler, a retired bank robber and a
                terrifying psychopath find themselves entangled with some of the
                most frightening and deranged elements of the criminal
                underworld, the U.S. government and the entertainment industry,
                they must pull off a series of dangerous heists to survive in a
                ruthless city in which they can trust nobody, least of all each
                other.
              </p>
            </ScrollText>
          </div>
          {/* ============== < GTAV GAME BUTTON > ============== */}
          <div className='flex justify-center'>
            <button className=''>
              <p className=' flex items-center gap-1 text-xl font-bold text-primary hover:gap-3 hover:text-secondary_mute'>
                OPEN TO RITO STORE <ChevronRightIcon />
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* ============== < PLATFROM GAME > ============== */}
      <div className='p-[5rem]' style={{ backgroundImage: `url(${BGCITY})` }}>
        <div>
          {/* ============== < GTAV GAME BUTTON > ============== */}
          <div className='flex justify-center'>
            <button className=''>
              <ScrollText>
                <p className=' flex items-center gap-1 text-7xl font-bold text-purple-600 duration-300 hover:scale-125 hover:text-primary'>
                  PLATFROM
                </p>
              </ScrollText>
            </button>
          </div>
        </div>
        <div className='flex gap-[10rem] p-[4rem]'>
          <img
            className='xbox h-auto w-[100%] duration-300 hover:scale-110'
            src='https://cdn.icon-icons.com/icons2/2699/PNG/512/xbox_logo_icon_169692.png'
          />
          <img
            className='pc h-auto w-[100%] duration-300 hover:scale-110'
            src='https://cdn-icons-png.flaticon.com/512/4703/4703650.png'
          />
          <img
            className='vr h-auto w-[100%] duration-300 hover:scale-110'
            src='https://iconape.com/wp-content/png_logo_vector/vr-logo-virtual-reality-logo.png'
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
