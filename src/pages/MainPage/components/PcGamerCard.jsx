import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon } from '@radix-ui/react-icons';

function PcGamerCard() {
  const navigate = useNavigate();

  return (
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
  );
}

export default PcGamerCard;
