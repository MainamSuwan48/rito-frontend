import React from 'react';
import ShadCnTest from './pages/ShadCnTest';

function App() {
  return (
    <div className='bg-base-100 font-black text-white h-screen flex flex-col justify-center items-center text-3xl '>
      <div className='flex justify-center items-center'>
        <span className='text-primary animate-bounce text-5xl'>Rito</span>
        <span className='text-secondary'>App</span>
      </div>
      <div>
        <button type='button' className='btn'>
          Button
        </button>
        <button type='button' className='btn btn-neutral'>
          Neutral
        </button>
        <button type='button' className='btn btn-primary'>
          Primary
        </button>
        <button type='button' className='btn btn-secondary'>
          Secondary
        </button>
        <button type='button' className='btn btn-accent'>
          Accent
        </button>
        <button type='button' className='btn btn-ghost'>
          Ghost
        </button>
        <button type='button' className='btn btn-link'>
          Link
        </button>
      </div>
      <ShadCnTest />
    </div>
  );
}

export default App;
