import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';

function LoginModal({ onClose }) {
  const closeModal = (event) => {
    event.stopPropagation();
    onClose();
  };

  const navigate = useNavigate();
  return (
    <div
      onClick={closeModal}
      className='h-screen absolute inset-0 z-50 flex items-center justify-center bg-base-100 bg-opacity-65 right-0'
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='glass relative flex max-w-md flex-col items-center rounded-lg border-2 border-neutral bg-base_light px-16 py-4 shadow-lg'
      >
        <div className=' flex items-center justify-center'>
          <img
            src='https://res.cloudinary.com/dhm6pitfd/image/upload/v1709196392/LOGORito-Text-transformed_abggkn.png'
            className='h-[5rem] w-[5rem]'
          />
        </div>
        <LoginForm />
        <div
          onClick={(event) => {
            event.stopPropagation();
            navigate('/register');
          }}
          className='cursor-pointer select-none pb-4 text-center font-bold text-secondary transition-all hover:text-secondary_mute active:scale-95'
        >
          Don't have an account?{' '}
        </div>
        <div
          onClick={onClose}
          className='absolute right-0 top-0 cursor-pointer select-none p-2 font-extrabold text-base-100 transition-all hover:scale-125 hover:text-danger active:scale-50'
        >
          X
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
