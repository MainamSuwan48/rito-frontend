import React from 'react';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';

function LoginModal() {
  const navigate = useNavigate();
  return (
    <div className='glass relative mx-auto my-16 flex max-w-md flex-col items-center rounded-lg border-2 border-neutral bg-base_light px-2 py-4 shadow-lg'>
      <div className=' flex items-center justify-center'>
        <img
          src='https://res.cloudinary.com/dhm6pitfd/image/upload/v1709196392/LOGORito-Text-transformed_abggkn.png'
          className=' h-[5rem] w-[5rem]'
        />
      </div>
      <LoginForm />
      <div
        onClick={() => navigate('/register')}
        className='cursor-pointer select-none pb-4 text-center font-bold text-secondary transition-all hover:text-secondary_mute active:scale-95'
      >
        Don't have an account?{' '}
      </div>
      <div className='absolute right-0 top-0 cursor-pointer select-none p-2 font-extrabold text-base-100 transition-all hover:scale-125 hover:text-danger active:scale-50'>
        X
      </div>
    </div>
  );
}

export default LoginModal;
