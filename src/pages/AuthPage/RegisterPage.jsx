import React from 'react';
import RegisterForm from '@/features/auth/components/RegisterForm';
import { useNavigate } from 'react-router-dom';

// =============== < Function > =============== //
export default function RegisterPage() {
  const navigate = useNavigate();
  return (
    <div className='bg-base flex justify-center items-center h-screen'>   
      <div className='flex flex-col items-center bg-base_light my-auto rounded-lg border-2 border-neutral p-2 shadow-lg px-16 glass'>
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
        onClick={() => navigate('/login')}
      className='text-center text-secondary font-bold cursor-pointer transition-all hover:text-secondary_mute active:scale-95 select-none pb-4'
      >
        Already have an account?{' '}
      </div>
      </div>
    </div>
  );
}
