import { joiResolver } from '@hookform/resolvers/joi';
import React from 'react';
import { useForm } from 'react-hook-form';
import { emailSchema } from '../validations/validate-email';
import FormInput from './FormInput';
import { forgotPassword } from '@/api/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function ForgotPasswordForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm({
    resolver: joiResolver(emailSchema),
    mode: 'onSubmit',
  });

  const onSubmit = async (data) => {
    try {
      await forgotPassword(data);
      reset();
      toast.success('Reset password request sent');
      navigate('/');
    } catch (error) {
      if (error?.response.data.ref === 'WRONG_INPUT') {
        setError('email', {
          type: 'custom',
          message: 'User with this email does not exist',
        });
        return;
      }
      toast.error(error.response?.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='m-0 w-full'>
        <div className='flex w-[20em] flex-col items-center justify-center gap-2 p-2'>
          <FormInput
            register={register}
            name='email'
            errors={errors}
            label='Email'
          />
          <div className='flex w-full flex-col items-center justify-evenly'>
            <button
              type='submit'
              className='flex h-[2rem] w-full items-center justify-center rounded-md border-2 border-neutral bg-primary p-5 font-bold text-neutral transition-all hover:bg-secondary_mute active:scale-95'
            >
              Request password reset
            </button>
          </div>
          <hr className=' border border-base_light' />
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;
