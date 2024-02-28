import React from 'react';
import ShadCnTest from './pages/ShadCnTest';

function App() {
  return (
    <div className='bg-base_dark font-black h-screen flex flex-col justify-center items-center text-3xl'>
      <div className='flex justify-center items-center bg-base p-6 rounded-md m-2'>
        <span className='text-primary animate-bounce text-5xl'>Rito</span>
        <span className='text-secondary'>App</span>
      </div>
      <ShadCnTest />
    </div>
  );
}

export default App;
