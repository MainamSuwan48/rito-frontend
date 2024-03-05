import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { toast } from 'react-toastify';

//local imports
import FormInput from './FormInput';
import { registerSchema } from '../validations/validate-register';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, getMe } from '../../../redux/slice/auth-slice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
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
    resolver: joiResolver(registerSchema),
    mode: 'onSubmit',
  });

  // This function will be called when the form is submitted


  // ...
  
  const navigate = useNavigate();
  
  const onSubmit = async (data) => {
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
        <div className='flex w-[20em] flex-col items-center justify-center gap-2 p-2'>
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
