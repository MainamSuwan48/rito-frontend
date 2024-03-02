import { useState } from 'react';
import { toast } from 'react-toastify';

const initial = {
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
};

// =============== < Function > =============== //
export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState(initial);
  const [error, setError] = useState({});

  // const { register } = useAuth();

  // =============== < Handle > =============== //
  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateError = validateRegister(input);
      console.log('validate error', validateError);
      if (validateError) {
        return setError(validateError);
      }

      await register(input);
      toast.success('register successfully');
      onSuccess();
    } catch (err) {
      if (err.response?.data.message === 'EMAIL_USERNAME_IN_USE') {
        return setError({ email: 'already in use' });
      }
      toast.error(err.response?.data.message);
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // =============== < Return > =============== //
  return (
    <div className=' flex items-center justify-center'>
      {/* =============== < Form > =============== */}
      <div>
        <form
          onSubmit={handleFormSubmit}
          className='items-ce grid grid-cols-1 justify-center gap-4 p-4'
        >
          {/* ========== < Email > ========== */}
          <div className=' col-span-full'>
            <input
              className=' w-[14rem] rounded-md p-2'
              placeholder='&nbsp;Email address'
              value={input.email}
              name='email'
              onChange={handleChangeInput}
              errorMessage={error.email}
            />
          </div>

          {/* ========== < username > ========== */}
          <div className=' col-span-full'>
            <input
              className=' w-[14rem] rounded-md p-2'
              placeholder='&nbsp;Username'
              value={input.username}
              name='username'
              onChange={handleChangeInput}
              errorMessage={error.username}
            />
          </div>

          {/* ========== < Password > ========== */}
          <div className=' col-span-full'>
            <input
              className=' w-[14rem] rounded-md p-2'
              placeholder='&nbsp;Password'
              value={input.password}
              name='password'
              onChange={handleChangeInput}
              type='password'
              errorMessage={error.password}
            />
          </div>

          {/* ========== < ConfirmPassword > ========== */}
          <div className=' col-span-full'>
            <input
              className=' w-[14rem] rounded-md p-2'
              placeholder='&nbsp;Confirm password'
              value={input.confirmPassword}
              name='confirmPassword'
              onChange={handleChangeInput}
              type='password'
              errorMessage={error.confirmPassword}
            />
          </div>

          {/* ========== < Button > ========== */}
          <div className='flex items-center justify-center'>
            <button className=' flex h-[2rem] w-[14rem] items-center justify-center rounded-md border-2 border-neutral bg-secondary p-4 font-bold text-neutral hover:bg-secondary_mute'>
              Sign up
            </button>
          </div>
        </form>
        <br />
        <hr className='border border-base_light' />
        <br />
      </div>
    </div>
  );
}
