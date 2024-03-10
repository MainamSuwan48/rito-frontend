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

  const rotateX = useTransform(xSpring, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(ySpring, [-0.5, 0.5], ['15deg', '-15deg']);
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
      className='relative flex h-[425px] w-[425px] items-center justify-center rounded-xl border border-base_dark bg-gradient-to-b from-primary/50 to-white/50 hover:scale-125 hover:bg-gradient-to-b hover:from-secondary hover:to-primary hover:shadow-2xl active:shadow-2xl'
    >
      <div
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(25px)',
        }}
        className='absolute flex h-[400px] w-[400px] flex-col overflow-hidden rounded-xl bg-neutral shadow-2xl transition-all'
      >
        {/* ========= < Img Game > ========= */}
        <div className='relative h-full w-full overflow-hidden bg-black bg-opacity-50 object-center'>
          <img
            className='absolute h-full w-full object-cover object-center'
            src={backgroundImageUrl}
          />
        </div>

        {/* ========= < Header NameGame > ========= */}
        <div className='flex p-1.5'>
          <h1 className=' w-full p-2 font-bold text-black'>{name}</h1>
          {/* ========= < Icon Platfrom > ========= */}
        </div>

        {/* ========= < PriceGame > ========= */}
        <div>
          <button className='flex w-full justify-between bg-base_dark'>
            {/* <p className=' bg-success p-3 font-bold text-white'>-100%</p> */}
            <p
              onClick={() => navigate(`/game/${id}`)}
              className='w-full p-2.5 text-base-100 transition-all hover:bg-base_light hover:text-base-100 active:bg-base-100'
            >
              {price} THB
            </p>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
