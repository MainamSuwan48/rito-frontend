import { useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { loginSchema } from '../validations/validate-login';
import FormInput from './FormInput';

export default function LoginForm() {


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
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='m-0'>
      <div className='grid items-center justify-center gap-2 p-2'>
        <FormInput register={register} name="usernameOrEmail" errors={errors} label="Username or Email" />
        <FormInput register={register} name="password" errors={errors} label="Password" type="password" />
        <div></div>
        <div className='flex flex-col w-full items-center justify-center gap-2'>
          <button
            type='submit'
            className='flex h-[2rem] w-[20em] items-center justify-center rounded-md border-2 border-neutral bg-primary p-5 font-bold text-neutral transition-all hover:bg-secondary_mute'
          >
            Log in
          </button>
          <button          
            type='button' // Changed type to 'button' as this button doesn't submit the form
            className='flex h-[2rem] w-[20em] items-center justify-center rounded-md border-2 border-neutral bg-primary p-5 font-bold text-neutral transition-all hover:bg-secondary_mute'
          >
            Log in With Google
          </button>
        </div>
      </div>
    </form>
  );
}
