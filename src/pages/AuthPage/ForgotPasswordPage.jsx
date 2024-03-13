import ForgotPasswordForm from '@/features/auth/components/ForgotPasswordForm';
import React from 'react';

function ForgotPasswordPage() {
  return (
    <div
      className='bg-base flex h-content items-center justify-center backdrop-blur-lg'
      // style={{
      //   backgroundImage:
      //     'url(https://res.cloudinary.com/dhm6pitfd/image/upload/v1709196392/LOGORito-Text-transformed_abggkn.png)',
      // }}
    >
      <video
        className='-z-50'
        autoPlay
        loop
        muted
        style={{
          opacity: '0.6',
          position: 'fixed',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src='https://res.cloudinary.com/dhm6pitfd/video/upload/v1710154132/videoplayback_zkgecn.mp4?_s=vp-1.7.0' />
      </video>
      <div className='glass my-auto flex flex-col items-center rounded-lg border-2 border-neutral bg-base_light bg-opacity-85 p-2 px-16 shadow-lg'>
        <div className=' flex items-center justify-center'>
          <img
            src='https://res.cloudinary.com/dhm6pitfd/image/upload/v1709196392/LOGORito-Text-transformed_abggkn.png'
            className=' h-[5rem] w-[5rem]'
          />
        </div>

        {/* =============== < Form > =============== */}
        <ForgotPasswordForm />
        {/* =============== < Text > =============== */}
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
