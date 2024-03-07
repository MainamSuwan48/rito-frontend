import { joiResolver } from '@hookform/resolvers/joi';
import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { passwordSchema } from '../validations/validate-password';
import { resetPassword } from '@/api/auth';
import { useNavigate } from 'react-router-dom';

function ResetPasswordForm() {
  const { resetPasswordToken } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm({
    resolver: joiResolver(passwordSchema),
    mode: 'onSubmit',
  });

  const onSubmit = async (data) => {
    const { password } = data;
    try {
      await resetPassword({ password, token: resetPasswordToken });
      reset();
      toast.success('Successfully changed password');
      navigate('/');
    } catch (error) {
      if (error?.response.data.ref === 'INVALID_INPUT') {
        setError('password', {
          type: 'custom',
          message: 'New password can not be the same as old password',
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
            type='password'
            name='password'
            errors={errors}
            label='Password'
          />
          <FormInput
            register={register}
            type='password'
            name='confirmPassword'
            errors={errors}
            label='Confirm Password'
          />
          <div className='flex w-full flex-col items-center justify-evenly'>
            <button
              type='submit'
              className='flex h-[2rem] w-full items-center justify-center rounded-md border-2 border-neutral bg-primary p-5 font-bold text-neutral transition-all hover:bg-secondary_mute active:scale-95'
            >
              Reset Password
            </button>
          </div>
          <hr className=' border border-base_light' />
        </div>
      </form>
    </div>
  );
}

export default ResetPasswordForm;
