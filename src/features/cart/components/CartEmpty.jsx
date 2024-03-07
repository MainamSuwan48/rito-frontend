import React from 'react';
import { CartIcon } from '@/icons';
import { useNavigate } from 'react-router-dom';

function CartEmpty() {
  const navigate = useNavigate();

  return (
    <div className='flex h-screen flex-col items-center justify-center gap-4 text-base_dark'>
      <CartIcon className='h-44 w-44' />
      <h1 className='text-center text-4xl font-bold'>Your cart is empty...</h1>
      <div className='flex flex-col gap-2'>
        <p className='text-center text-xl font-semibold'>
          Looks like you have no games in your shopping cart.
        </p>
        <p className='text-center text-xl font-semibold'>
          Click{' '}
          <span
            className='cursor-pointer text-base_light hover:underline'
            onClick={() => navigate('/store')}
          >
            here
          </span>{' '}
          to continue shopping.
        </p>
      </div>
    </div>
  );
}

export default CartEmpty;
