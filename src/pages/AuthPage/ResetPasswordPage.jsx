import ResetPasswordForm from '@/features/auth/components/ResetPasswordForm';
import React from 'react';

function ResetPasswordPage() {
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

        {/* =============== < Form > =============== */}
        <ResetPasswordForm />
        {/* =============== < Text > =============== */}
      </div>
    </div>
  );
}

export default ResetPasswordPage;
