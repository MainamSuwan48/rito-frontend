import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { toast } from 'react-toastify';

//local imports
import { loginSchema } from '../validations/validate-login';
import { useDispatch, useSelector } from 'react-redux';
import { login, getMe } from '../../../redux/slice/auth-slice';
import FormInput from './FormInput';
import { useEffect } from 'react';

export default function LoginForm() {
  // redux dispatch
  const dispatch = useDispatch();
  // redux state
  const { authUser, loading } = useSelector((state) => state.auth);

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
  const onSubmit = async (data) => {
    await dispatch(login(data));
    toast.success('Login successful');
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
    <form onSubmit={handleSubmit(onSubmit)} className='m-0'>
      <div className='relative grid items-center justify-center gap-2 p-2'>
        <FormInput
          register={register}
          name='usernameOrEmail'
          errors={errors}
          label='Username or Email'
        />
        <FormInput
          register={register}
          name='password'
          errors={errors}
          label='Password'
          type='password'
        />
        <div></div>
        <div className='flex w-full flex-col items-center justify-center gap-2'>
          <button
            type='submit'
            className='flex h-[2rem] w-[20em] items-center justify-center rounded-md border-2 border-neutral bg-primary p-5 font-semibold text-neutral transition-all hover:bg-secondary_mute active:scale-95'
          >
            {loading ? (
              <span className='loading loading-ring loading-lg'></span>
            ) : (
              'Log in'
            )}
          </button>
          <button
            type='button' // Changed type to 'button' as this button doesn't submit the form
            className='flex h-[2rem] w-[20em] items-center justify-center rounded-md border-2 border-neutral bg-base_dark p-5 font-semibold text-neutral transition-all hover:bg-secondary_mute active:scale-95'
          >
            Login With Google Account
          </button>
        </div>
      </div>
    </form>
  );
}
