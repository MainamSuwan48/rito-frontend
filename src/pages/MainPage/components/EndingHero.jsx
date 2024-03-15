import React from 'react';
import ritoLogo from '../../../assets/Img/ritoLogo.png';
import { useNavigate } from 'react-router-dom';
function EndingHero() {
  const navigate = useNavigate();
  return (
    <div className='relative flex h-[400px] items-center justify-center bg-black bg-opacity-70 p-5'>
      <img src={ritoLogo} />
      <p
        onClick={() => navigate('/store')}
        className='cursor-pointer p-4 font-babas text-9xl font-bold text-neutral duration-100 hover:scale-105 hover:text-primary'
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
  );
}

export default EndingHero;
