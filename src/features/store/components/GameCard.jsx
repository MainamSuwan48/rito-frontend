import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function GameCard({ gameData }) {
  const navigate = useNavigate();
  const { backgroundImageUrl, name, price, gameTags, id } = gameData;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 400, damping: 90 });
  const ySpring = useSpring(y, { stiffness: 400, damping: 90 });

  const rotateX = useTransform(xSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(ySpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const xAxis = e.clientX - rect.left;
    const yAxis = e.clientY - rect.top;

    const xAxisPercent = xAxis / width - 0.5;
    const yAxisPercent = yAxis / height - 0.5;

    x.set(xAxisPercent);
    y.set(yAxisPercent);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    console.log('leave');
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateY,
        rotateX,
      }}
      className='glass relative flex h-[425px] w-[425px] items-center justify-center rounded-xl border border-base_dark bg-gradient-to-b hover:scale-110 active:shadow-2xl'
    >
      <div
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(25px)',
        }}
        className='absolute flex h-[400px] w-[400px] flex-col overflow-hidden rounded-xl bg-neutral shadow-2xl transition-all'
      >
        {/* ========= < Img Game > ========= */}
        <div className='h-full w-full  object-center'>
          <img
            className='absolute h-full w-full object-cover object-center'
            src={backgroundImageUrl}
          />
        </div>

        {/* ========= < Header NameGame > ========= */}
        <div className='absolute flex w-[400px] bg-gradient-to-b from-black to-transparent p-2'>
          <h1 className=' w-full p-2 text-xl font-bold text-neutral'>{name}</h1>
        </div>

        {/* ========= < PriceGame > ========= */}
        <div>
          <button className='flex w-full justify-between bg-base_dark'>
            {/* <p className=' bg-success p-3 font-bold text-white'>-100%</p> */}
            <p
              onClick={() => navigate(`/game/${id}`)}
              className='absolute bottom-0 right-0 w-full bg-gradient-to-t from-black to-transparent p-2.5 text-xl font-bold text-base-100 transition-all hover:bg-success hover:bg-opacity-45  active:bg-base-100'
            >
              {price} THB
            </p>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
