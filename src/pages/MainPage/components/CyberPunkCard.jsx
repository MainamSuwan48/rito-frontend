import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function CyberPunkCard() {
  const navigate = useNavigate();
  return (
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
        className='absolute inset-0 bottom-0 z-30 h-[400px] object-cover'
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
  );
}

export default CyberPunkCard;
