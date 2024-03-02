import React from 'react';

function ReferencePage() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-2 bg-base_dark text-3xl font-black'>
      <div className='bg-base m-2 flex items-center justify-center rounded-md p-6 transition-all'>
        <span className='animate-bounce text-5xl text-primary transition-all'>
          Rito
        </span>
        <span className='text-secondary'>App</span>
        <span className='text-neutral'>GameStore</span>
      </div>
      <div className='flex flex-wrap'>
        <div className='border-2 bg-primary p-5 text-2xl text-black transition-all hover:scale-110'>
          Primary
        </div>
        <div className='border-2 bg-secondary p-5 text-2xl text-black transition-all hover:scale-110'>
          secondary
        </div>
        <div className='border-2 bg-neutral p-5 text-2xl text-black transition-all hover:scale-110'>
          neutral
        </div>
        <div className='border-2 bg-base_dark p-5 text-2xl text-black transition-all hover:scale-110'>
          Base Dark
        </div>
        <div className='border-2 bg-base-100 p-5 text-2xl text-black transition-all hover:scale-110'>
          Base 100{' '}
        </div>
        <div className='border-2 bg-base-200 p-5 text-2xl text-black transition-all hover:scale-110'>
          Base 200
        </div>
        <div className='border-2 bg-base-300 p-5 text-2xl text-black transition-all hover:scale-110'>
          Base 300
        </div>
        <div className='border-2 bg-base_light p-5 text-2xl text-black transition-all hover:scale-110'>
          Base Light
        </div>
      </div>
      <div className='flex flex-wrap'>
        <div className='border-2 bg-primary_mute p-5 text-2xl text-black transition-all hover:scale-110'>
          Primary Mute
        </div>
        <div className='border-2 bg-secondary_mute p-5 text-2xl text-black transition-all hover:scale-110'>
          secondary Mute
        </div>
        <div className='border-2 bg-danger p-5 text-2xl text-black transition-all hover:scale-110'>
          Danger
        </div>
        <div className='border-2 bg-success p-5 text-2xl text-black transition-all hover:scale-110'>
          Success
        </div>
        <div className='border-2 bg-warning p-5 text-2xl text-black transition-all hover:scale-110'>
          Warning
        </div>
      </div>

    </div>
  );
}

export default ReferencePage;
