import { joiResolver } from '@hookform/resolvers/joi';
import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
import { forgotPassword } from '@/api/auth';
import { toast } from 'react-toastify';
import { usernameOrEmailSchema } from '../validations/validate-username-or-email';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPasswordForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm({
    resolver: joiResolver(usernameOrEmailSchema),
    mode: 'onSubmit',
  });

  const onSubmit = async (data) => {
    try {
      await forgotPassword(data);
      reset();
      setIsSuccess(true);
      toast.success('Reset password request sent');
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='m-0 w-full'>
        <div className='flex w-[20em] flex-col items-center justify-center gap-2 p-2'>
          <FormInput
            register={register}
            name='usernameOrEmail'
            errors={errors}
            label='Username or Email'
          />
          {isSuccess && (
            <small className='text-center text-sm font-semibold text-secondary'>
              If your username or email match an existing account we will send a
              password reset email within a few minutes.
            </small>
          )}
          <div className='flex w-full flex-col items-center justify-evenly'>
            <button
              type='submit'
              className='flex h-[2rem] w-full items-center justify-center bg-primary p-5 font-bold text-neutral transition-all hover:bg-secondary_mute active:scale-95'
            >
              Request password reset
            </button>
          </div>
          <hr className=' border border-base_light' />

          <div
            className='underline'
            role='button'
            onClick={() => navigate('/')}
          >
            &lt; Back to Home
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;
