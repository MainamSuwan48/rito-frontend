import React from 'react';
import RegisterForm from '@/features/auth/components/RegisterForm';
import { useNavigate } from 'react-router-dom';

// =============== < Function > =============== //
export default function RegisterPage() {
  const navigate = useNavigate();
  return (
    <div
      className='bg-base flex h-screen items-center justify-center backdrop-blur-lg'
      style={{
        backgroundImage:
          'url(https://res.cloudinary.com/dhm6pitfd/image/upload/v1709196392/LOGORito-Text-transformed_abggkn.png)',
      }}
    >
      <div className='glass my-auto flex flex-col items-center rounded-lg border-2 border-neutral bg-base_light bg-opacity-85 p-2 px-16 shadow-lg'>
        <div className=' flex items-center justify-center'>
          <img
            src='https://res.cloudinary.com/dhm6pitfd/image/upload/v1709196392/LOGORito-Text-transformed_abggkn.png'
            className=' h-[5rem] w-[5rem]'
          />
        </div>

        {/* =============== < RegisterForm > =============== */}
        <RegisterForm />
        {/* =============== < Text > =============== */}
        <div
          onClick={() => navigate(-1)}
          className='cursor-pointer select-none pb-4 text-center font-bold text-secondary transition-all hover:text-secondary_mute active:scale-95'
        >
          Already have an account?{' '}
        </div>
      </div>
    </div>
  );
}
