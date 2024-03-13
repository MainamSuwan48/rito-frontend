import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { toast } from 'react-toastify';
import { EyeClose, EyeOpen } from '@/icons';

//local imports
import FormInput from './FormInput';
import { registerSchema } from '../validations/validate-register';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, getMe } from '../../../redux/slice/auth-slice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  // redux dispatch
  const dispatch = useDispatch();
  // redux state
  const { authUser, loading } = useSelector((state) => state.auth);
  const [isShowPassword, setIsShowPassword] = useState(false);

  // Initialize useForm with the joiResolver and your validation schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(registerSchema),
    mode: 'onSubmit',
  });

  // This function will be called when the form is submitted

  // ...

  const navigate = useNavigate();

  const handleOnClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const onSubmit = async (data) => {
    console.log(data);
    dispatch(registerUser(data))
      .then(() => {
        navigate('/user');
      })
      .catch((error) => {
        // Handle the error
      });
  };

  useEffect(() => {
    if (!authUser) {
      dispatch(getMe());
    }
    if (authUser) {
      console.log(authUser);
    }
  }, [authUser]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='m-0 w-full'>
        <div className='flex w-[35vw] flex-col items-center justify-center gap-2 p-2'>
          <FormInput
            register={register}
            name='username'
            errors={errors}
            label='Username'
          />
          <FormInput
            register={register}
            name='email'
            errors={errors}
            label='Email'
          />
          <div className='flex w-full gap-2'>
            <FormInput
              register={register}
              name='firstName'
              errors={errors}
              label='First Name'
            />
            <FormInput
              register={register}
              name='lastName'
              errors={errors}
              label='Last Name'
            />
          </div>
          <div className=' relative w-full'>
            <FormInput
              register={register}
              type={isShowPassword ? 'text' : 'password'}
              name='password'
              errors={errors}
              label='password'
            />
            <div
              className='absolute right-2 top-8'
              onClick={handleOnClickShowPassword}
            >
              {isShowPassword ? (
                <EyeOpen className=' size-5 text-neutral-400' />
              ) : (
                <EyeClose className='size-5 text-neutral-400' />
              )}
            </div>
          </div>
          <div className=' relative w-full'>
            <FormInput
              register={register}
              type={isShowPassword ? 'text' : 'password'}
              name='confirmPassword'
              errors={errors}
              label='Confirm Password'
            />
            <div
              className='absolute right-2 top-8'
              onClick={handleOnClickShowPassword}
            >
              {isShowPassword ? (
                <EyeOpen className=' size-5 text-neutral-400' />
              ) : (
                <EyeClose className='size-5 text-neutral-400' />
              )}
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-evenly'>
            <button
              type='submit'
              className='flex h-[2rem] w-full items-center justify-center bg-primary p-5 font-bold text-neutral transition-all hover:bg-secondary_mute active:scale-95'
            >
              {loading ? (
                <span className='loading loading-ring loading-lg'></span>
              ) : (
                'Register'
              )}
            </button>
          </div>
          <hr className=' border border-base_light' />
        </div>
      </form>
    </div>
  );
}
