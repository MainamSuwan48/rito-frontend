import { useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { loginSchema } from '../validations/validate-login';

export default function LoginForm() {
  // Removed the useState hook as we'll be using useForm for form state management

  // Initialize useForm with the joiResolver and your validation schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(loginSchema),
    mode: 'onSubmit',
  });

  // This function will be called when the form is submitted
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='m-0'>
        <div className='grid items-center justify-center gap-4 p-6 '>
          <div>
            <div className='mb-2 font-semibold text-base_dark'>
              Username or Email
            </div>
            <input
              {...register('usernameOrEmail')} // Connect the input to the form
              className='input-bordered w-[20rem] rounded-md border-2 p-1.5'
            />
            {/* Display validation error message */}
            {errors.usernameOrEmail && (
              <div className='mt-2 font-semibold text-danger'>
                {errors.usernameOrEmail.message}
              </div>
            )}
          </div>
          <div>
            <div className='mb-2 font-semibold text-base_dark'>
              Password
            </div>
            <input
              {...register('password')}
              type="password"
              className='input-bordered w-[20rem] rounded-md border-2 p-1.5'
            />
            {errors.password && (
              <div className='mt-2 font-semibold text-danger'>
                {errors.password.message}
              </div>
            )}
          </div>
          
          <div></div>
          <div className='flex w-full flex-col items-center justify-center gap-2'>
            <button type="submit" className='flex h-[2rem] w-full items-center justify-center rounded-md border-2 border-neutral bg-primary p-5 font-bold text-neutral transition-all hover:bg-secondary_mute'>
              Log in
            </button>
            <button type="submit" className='flex h-[2rem] w-full items-center justify-center rounded-md border-2 border-neutral bg-primary p-5 font-bold text-neutral transition-all hover:bg-secondary_mute'>
              Log in With Google
            </button>
          </div>
          <hr className=' border border-base_light' />
        </div>
      </form>
    </div>
  );
}