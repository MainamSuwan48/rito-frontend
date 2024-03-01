import React from 'react';
import LoginForm from '@/features/auth/components/LoginForm';
import Google from '../../assets/Img/Google.png';
import Facebook from '../../assets/Img/facebookLogo.png';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// =============== < Function > =============== //
export default function LoginPage() {
  return (
    <div className=' bg-base_light'>
      <br />
      <div className='mx-auto my-16 max-w-md rounded-lg border-2 border-neutral bg-base p-2 shadow-lg'>
        <div className=' flex items-center justify-center'>
          <img
            src='https://res.cloudinary.com/dhm6pitfd/image/upload/v1709196392/LOGORito-Text-transformed_abggkn.png'
            className=' h-[5rem] w-[5rem]'
          />
        </div>
        <p className='flex justify-center font-bold text-neutral'>
          Login with Account
        </p>
        <LoginForm />
        <div className='flex justify-evenly'>
          {/* HardCode */}
          <img
            className=' h-[4rem] w-[4rem]'
            src={Facebook}
            alt='image description'
          />          <img
            className=' h-[4rem] w-[4rem] rounded-md bg-neutral'
            src={Google}
            alt='image description'
          />
          {/* <button class="fa-brands fa-square-facebook bg-neutral"></button> */}
          {/* <button class="fa-brands fa-google bg-neutral"></button> */}
        </div>
        <div className=' m-4 text-neutral'>
          <p className='flex justify-center'>
            By signing in or signing up, you agree.
          </p>
          <p className=' flex justify-center font-semibold text-neutral'>
            Our Privacy Policy
          </p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
