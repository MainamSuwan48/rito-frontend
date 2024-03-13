import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import { toast } from 'react-toastify';

//local imports
import { loginSchema } from '../validations/validate-login';
import { useDispatch, useSelector } from 'react-redux';
import { login, getMe } from '../../../redux/slice/auth-slice';
import FormInput from './FormInput';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeClose, EyeOpen } from '@/icons';

export default function LoginForm({ onClose }) {
  // redux dispatch
  const dispatch = useDispatch();
  // redux state
  const { authUser, loading } = useSelector((state) => state.auth);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const navigate = useNavigate();

  // Initialize useForm with the joiResolver and your validation schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(loginSchema),
    mode: 'onSubmit',
  });

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  // This function will be called when the form is submitted
  const onSubmit = async (data) => {
    await dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='m-0'>
      <div className='relative grid items-center justify-center gap-2 p-2'>
        <FormInput
          register={register}
          name='usernameOrEmail'
          errors={errors}
          label='Username or Email'
        />
        <div className='relative w-full'>
          <FormInput
            register={register}
            name='password'
            errors={errors}
            label='Password'
            type={isShowPassword ? 'text' : 'password'}
          />
          <div
            className='absolute right-2 top-8'
            onClick={handleClickShowPassword}
          >
            {isShowPassword ? (
              <EyeOpen className='size-5' />
            ) : (
              <EyeClose className='size-5' />
            )}
          </div>
        </div>
        <div
          onClick={(event) => {
            event.stopPropagation();
            onClose();
            navigate('/forgot-password');
          }}
          className='cursor-pointer select-none pb-4 text-center text-sm font-bold text-secondary transition-all hover:text-secondary_mute active:scale-95'
        >
          Forgot Password ?
        </div>
        <div className='flex w-full flex-col items-center justify-center gap-2'>
          <button
            type='submit'
            className='flex h-[2rem] w-[20em] items-center justify-center bg-primary p-5 font-semibold text-neutral transition-all hover:bg-secondary_mute active:scale-95'
          >
            {loading ? (
              <span className='loading loading-ring loading-lg'></span>
            ) : (
              'Log in'
            )}
          </button>
          <button
            type='button' // Changed type to 'button' as this button doesn't submit the form
            className='flex h-[2rem] w-[20em] items-center justify-center bg-base_dark p-5 font-semibold text-neutral transition-all hover:bg-secondary_mute active:scale-95'
          >
            Login With Google Account
          </button>
        </div>
      </div>
    </form>
  );
}
