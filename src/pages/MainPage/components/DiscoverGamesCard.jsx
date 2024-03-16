import React from 'react';
import BGCITY from '../../../assets/Img/BG-CITY.png';
import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import ScrollText from '../ScrollText';

function DiscoverGamesCard() {
  const navigate = useNavigate();
  return (
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
  );
}

export default DiscoverGamesCard;
