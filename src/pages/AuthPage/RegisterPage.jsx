import React from 'react';
import RegisterForm from '@/features/auth/components/RegisterForm';

// =============== < Function > =============== //
export default function RegisterPage() {
  return (
    <div className=' bg-base_light'>
      <br />
      <div className='mx-auto my-16 max-w-md rounded-lg border-2 border-neutral bg-base p-2 shadow-lg'>
        <div className=' flex items-center justify-center'>
          <img
            src='https://res.cloudinary.com/dhm6pitfd/image/upload/v1709196392/LOGORito-Text-transformed_abggkn.png'
            className=' h-[5rem] w-[5rem]'
          />
                  <p className='flex justify-center font-bold text-neutral'>
          Register Account
        </p>
        </div>
        
        {/* =============== < RegisterForm > =============== */}
        <RegisterForm />

        {/* =============== < Text > =============== */}
        <div className=' m-4 text-neutral'>
          <p className=' flex justify-center font-semibold text-neutral'>
            Our Privacy Policy
          </p>
          <p className=' flex justify-center font-semibold text-neutral'>
            Go back to at options
          </p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
