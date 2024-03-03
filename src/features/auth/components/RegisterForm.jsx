import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { registerSchema } from '../validations/validate-register';
import { toast } from 'react-toastify';

import FormInput from './FormInput';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(registerSchema),
    mode: 'onSubmit',
  });

  const onSubmit = (data) => {
    toast.success('Registration Successful');
    console.log(data);
  };

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
              Register
            </button>
          </div>
          <hr className=' border border-base_light' />
        </div>
      </form>
    </div>
  );
}
