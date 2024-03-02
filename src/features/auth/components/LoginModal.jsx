import React from 'react';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';

function LoginModal() {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center relative bg-base_light mx-auto my-16 max-w-md rounded-lg border-2 border-neutral px-2 py-4 shadow-lg'>
      <div className=' flex items-center justify-center'>
        <img
          src='https://res.cloudinary.com/dhm6pitfd/image/upload/v1709196392/LOGORito-Text-transformed_abggkn.png'
          className=' h-[5rem] w-[5rem]'
        />
      </div>
      <LoginForm />
      <div
        onClick={() => navigate('/register')}
      className='text-center text-secondary font-bold cursor-pointer transition-all hover:text-secondary_mute active:scale-95 select-none pb-4'
      >
        Don't have an account?{' '}
      </div>
      <div
      className='absolute top-0 right-0 p-2 cursor-pointer text-base-100 font-extrabold transition-all hover:text-danger hover:scale-125 active:scale-50 select-none'
      >
        X
      </div>
    </div>
  );
}

export default LoginModal;
