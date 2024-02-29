import React from 'react';

function App() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-2 bg-base_dark text-3xl font-black'>
      <div className='m-2 flex items-center justify-center rounded-md bg-base p-6'>
        <span className='animate-bounce text-5xl text-primary'>Rito</span>
        <span className='text-secondary'>App</span>
        <span className='text-neutral'>GameStore</span>
      </div>
      <div className='flex'>
        <div className='border-2 bg-primary p-5 text-2xl'>Primary</div>
        <div className='border-2 bg-secondary p-5 text-2xl'>secondary</div>
        <div className='border-2 bg-neutral p-5 text-2xl'>neutral</div>
        <div className='bg-base-dark border-2 p-5 text-2xl'>Base Dark</div>
        <div className='border-2 bg-base p-5 text-2xl'>Base </div>
        <div className='border-2 bg-base_light p-5 text-2xl'>Base Light</div>
      </div>
      <div className='flex'>
        <div className='bg-primary_mute border-2 p-5 text-2xl'>Primary</div>
        <div className='bg-secondary_mute border-2 p-5 text-2xl'>secondary</div>
        <div className='bg-danger border-2 p-5 text-2xl'>Danger</div>
        <div className='bg-success border-2 p-5 text-2xl'>Success</div>
      </div>
    </div>
  );
}

export default App;
