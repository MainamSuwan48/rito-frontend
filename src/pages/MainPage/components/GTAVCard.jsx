import React from 'react';
import ScrollText from '../ScrollText';
import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon } from '@radix-ui/react-icons';

function GTAVCard() {
  const navigate = useNavigate();
  return (
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
              most frightening and deranged elements of the criminal underworld,
              the U.S. government and the entertainment industry, they must pull
              off a series of dangerous heists to survive in a ruthless city in
              which they can trust nobody, least of all each other.
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
  );
}

export default GTAVCard;
