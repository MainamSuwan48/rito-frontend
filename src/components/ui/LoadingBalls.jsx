import React from 'react';

function LoadingBalls() {
  return (
    <>
      <div className='fixed inset-0 z-40 bg-base_dark opacity-40'></div>
      <div className='fixed inset-0 z-50'>
        <div className='flex min-h-full items-center justify-center'>
          <span className='loading loading-ball loading-lg'></span>
          <span className='loading loading-ball loading-lg'></span>
          <span className='loading loading-ball loading-lg'></span>
        </div>
      </div>
    </>
  );
}

export default LoadingBalls;
