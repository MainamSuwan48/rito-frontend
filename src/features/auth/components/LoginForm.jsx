import { useState } from 'react';
import { toast } from 'react-toastify';

// =============== < Function > =============== //
export default function LoginForm() {
  const [input, setInput] = useState({ emailOrUsername: '', password: '' });
  const [error, setError] = useState({});

  // =============== < Handle > =============== //
  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const validationError = validateLogin(input);
      console.log(validationError);
      if (validationError) {
        return setError(validationError);
      }

      await login(input);
      toast.success('login successfully');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // =============== < Return > =============== //
  return (
    <div>
      <form onSubmit={handleSubmitForm} className='m-0'>
        <div className='grid items-center justify-center gap-4 p-6 '>
          <div>
            <input
              className=' input input-bordered w-[20rem] rounded-md border-2 p-1.5'
              value={input.emailOrUsername}
              onChange={handleChangeInput}
              name='email'
              errorMessage={error.emailOrUsername}
            />
          </div>
          <div>
            <input
              className=' input input-bordered w-[20rem] rounded-md border-2 p-1.5'
              value={input.password}
              name='password'
              onChange={handleChangeInput}
              errorMessage={error.password}
            />
          </div>
          <div className='m-2 flex flex-row items-center justify-evenly'>
            <button className=' flex h-[2rem] w-[8rem] items-center justify-center rounded-md border-2 border-neutral bg-secondary p-5 font-bold text-neutral hover:bg-secondary_mute'>
              Log in
            </button>
            <button className=' flex h-[2rem] w-[8rem] items-center justify-center rounded-md border-2 border-neutral bg-secondary p-5 font-bold text-neutral hover:bg-secondary_mute'>
              Register
            </button>
          </div>
          <hr className=' border border-base_light' />
        </div>
      </form>
    </div>
  );
}
