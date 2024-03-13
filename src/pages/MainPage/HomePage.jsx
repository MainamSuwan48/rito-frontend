import React from 'react';
import { useNavigate } from 'react-router-dom';
import ritoLogo from '../../assets/Img/ritoLogo.png';
import mockGame from './mockGame.json';

import { motion } from 'framer-motion';
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

  return (
    <div>
      {/* ============== < IMG HEADER > ============== */}
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

      <div className='p-[5rem]' style={{ backgroundImage: `url(${BGCITY})` }}>
        {/* ============== < TITLE BEST GAME > ============== */}
        <div className=' flex-col'>
          <p className='flex justify-center bg-gradient-to-r from-primary to-secondary bg-clip-text pb-4 font-babas text-7xl font-black  text-transparent duration-100 hover:scale-105'>
            Discover the best games
          </p>
        </div>
        {/* ============== < TITLE BEST GAME BUTTON > ============== */}
        <div className='flex justify-center'>
          <button>
            <p
              onClick={() => navigate('/store')}
              className='flex items-center gap-1 text-xl font-bold text-black transition-all hover:gap-3 hover:text-primary'
            >
              EXPLORE THE CATALOGUE <ChevronRightIcon />
            </p>
          </button>
        </div>
        {/* ============== < IMG BEST GAME > ============== */}
        <div className=' m-8 flex flex-col justify-center'>
          <button className='w-100% flex justify-between gap-4'>
            <ScrollText>
              <img
                onClick={() => navigate('/game/41494')}
                className='h-auto w-[100%] duration-300 hover:scale-110'
                src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/557703a2-f0df-4e9e-8006-f1a8a0666122/ddonp58-58ed224c-f931-496d-969a-2f7379849ef8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1NzcwM2EyLWYwZGYtNGU5ZS04MDA2LWYxYThhMDY2NjEyMlwvZGRvbnA1OC01OGVkMjI0Yy1mOTMxLTQ5NmQtOTY5YS0yZjczNzk4NDllZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bdeXXP5-vduyFZpwzARVpt55CjfxHYDzKDsa2viZhE8'
              />
            </ScrollText>
            <ScrollText>
              <img
                onClick={() => navigate('/game/3498')}
                className='h-auto w-[100%] duration-300 hover:scale-110'
                src='https://cos-1308089331.cos.accelerate.myqcloud.com/user_files/1/bbs/92264040_1647708448.png'
              />
            </ScrollText>
            <ScrollText>
              <img
                onClick={() => navigate('/game/4291')}
                className='h-auto w-[100%] duration-300 hover:scale-110'
                src='https://www.freeiconspng.com/uploads/csgo-icon-4.png'
              />
            </ScrollText>
            <ScrollText>
              <img
                onClick={() => navigate('/game/4161')}
                className='h-auto w-[100%] duration-300 hover:scale-110'
                src='https://th.bing.com/th/id/R.55a7be8ae9cdaf82bfff3b98b021d328?rik=jUzMfKIl5FT1TA&pid=ImgRaw&r=0'
              />
            </ScrollText>
          </button>
        </div>
      </div>

      {/* ============== < SHOW GAME 1 > ============== */}
      <div className='relative flex h-[400px] items-center justify-center bg-red-700 bg-opacity-40'>
        <video
          className='-z-50'
          autoPlay
          loop
          muted
          style={{
            opacity: '1',
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src='https://res.cloudinary.com/dhm6pitfd/video/upload/v1710174717/videoplayback_iknpfp.mp4' />
        </video>
        <motion.img
          initial={{ x: -300 }} // start from 300px to the left of the initial position
          animate={{ x: 0 }} // end at the initial position
          transition={{ type: 'spring', stiffness: 60, damping: 20 }}
          className='absolute inset-0 bottom-0 z-50 h-[400px] object-cover'
          src='https://i.imgur.com/Ss9i9gl.png'
        />
        <img
          onClick={() => navigate('/game/41494')}
          initial={{ x: 300 }} // start from 300px to the right of the initial position
          animate={{ x: 0 }} // end at the initial position
          transition={{ type: 'spring', stiffness: 60, damping: 20 }}
          className='absolute right-6 top-0 h-[300px] cursor-pointer object-cover duration-300 hover:scale-105'
          src='https://i.imgur.com/YvAqGQ9.png'
        />
      </div>

      {/* ============== < PC GAMER> ============== */}
      <div className='relative flex h-96 flex-col items-center justify-center'>
        <video
          className='-z-50'
          autoPlay
          loop
          muted
          style={{
            opacity: '1',
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src='https://res.cloudinary.com/dhm6pitfd/video/upload/v1710264032/videoplayback_4_k7ctja.mp4' />
        </video>
        {/* ============== < TITLE BEST GAME > ============== */}
        <div className='flex-col bg-black bg-opacity-60 p-4'>
          <p className='flex justify-center p-4 font-babas text-7xl font-bold text-neutral duration-100 hover:scale-105 hover:text-primary'>
            BUILT FOR PC GAMERS
          </p>
          <p className='flex items-center justify-center p-4 text-2xl font-bold text-base_light'>
            Finding your next favorite game has never been easier<br></br>Browse
            the catalog View recommendations Filter by category
          </p>
          <div className='flex justify-center'>
            <button>
              <p
                onClick={() => navigate('/search')}
                className='flex items-center gap-1 text-xl font-bold text-white transition-all hover:gap-3 hover:text-primary'
              >
                SEARCH FOR YOUR FAVORITE GAMES <ChevronRightIcon />
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* ============== < SHOW GAME 2 > ============== */}

      <div
        className='relative flex bg-cover'
        style={{
          backgroundImage: `url(https://s5.gifyu.com/images/SiREe.gif)`,
        }}
      >
        <img
          className='absolute bottom-0 right-0 z-20 h-[350px] w-[auto] duration-300 hover:scale-110'
          src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36c7442c-aed5-4e9a-86ec-0a59dd4c5a37/debieg7-b131d3b1-b491-4a24-bed2-2c6e725c72b9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM2Yzc0NDJjLWFlZDUtNGU5YS04NmVjLTBhNTlkZDRjNWEzN1wvZGViaWVnNy1iMTMxZDNiMS1iNDkxLTRhMjQtYmVkMi0yYzZlNzI1YzcyYjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DcwgrK6q0j2oQS6VJaPEYw7324n_dGIln5rTjzMeors'
        />
        <ScrollText>
          <img
            onClick={() => navigate('/game/3498')}
            className='z-20 h-[22rem] w-[150rem] p-8 duration-300 hover:scale-110'
            src='https://1000logos.net/wp-content/uploads/2022/10/Grand-Theft-Auto-V-logo.png'
          />
        </ScrollText>
        <div className='z-30 bg-base_dark bg-opacity-60 p-[6rem]'>
          <div
            onClick={() => navigate('/game/3498')}
            className='text-white-outline flex-col justify-center font-rubik text-3xl font-black text-base_dark duration-200 hover:scale-110 hover:text-primary'
          >
            Grand Theft Auto V
          </div>
          <div>
            <ScrollText>
              <p className=' font-bold text-neutral'>
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
              <p
                onClick={() => navigate('/store')}
                className='flex items-center gap-1 text-xl font-bold text-neutral transition-all hover:gap-3 hover:text-primary'
              >
                EXPLORE MORE GAMES <ChevronRightIcon />
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* ============== < PLATFROM GAME > ============== */}
      <div className='relative flex h-[400px] items-center justify-center bg-black bg-opacity-70 p-5'>
        <img src={ritoLogo} />
        <p
          onClick={() => navigate('/store')}
          className='p-4 font-babas text-9xl font-bold text-neutral duration-100 hover:scale-105 hover:text-primary'
        >
          AND MORE
        </p>

        <video
          className='-z-50'
          autoPlay
          loop
          muted
          style={{
            opacity: '1',
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src='https://res.cloudinary.com/dhm6pitfd/video/upload/v1710177884/videoplayback_3_ilwav9.mp4' />
        </video>
      </div>
    </div>
  );
}

export default HomePage;
