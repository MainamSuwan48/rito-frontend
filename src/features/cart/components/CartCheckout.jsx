import { CreditCardIcon, DiscountTicketIcon } from '@/icons';
import { deleteMyCart } from '@/redux/slice/cart-slice';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function CartCheckout() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!data.paymentMethod) {
      return toast.error('Please select payment method');
    }

    console.log(data);
  };

  return (
    <div className='mt-16'>
      <div className=' bg-base_dark p-4 text-center font-semibold text-white'>
        Payment methods
      </div>

      <form className='form-control' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex items-center gap-4 border-b border-b-base_light px-8 py-3'>
          <input {...register('paymentMethod')} type='radio' value='credit' />
          <p>Credit Card</p>
          <CreditCardIcon />
        </div>

        <div className='flex items-center gap-2 p-6'>
          <DiscountTicketIcon />

          <input
            placeholder='Discount coupon'
            className='border p-2 text-sm text-base_dark'
          />
          <button className='bg-secondary px-8 py-[10px] text-white'>
            Enter
          </button>
        </div>

        <div className='flex flex-col gap-2'>
          <button
            type='submit'
            className='bg-accent py-4 text-white hover:bg-primary_mute active:scale-95'
          >
            Check Out
          </button>
          <button
            type='button'
            className='bg-base_light py-4 text-white hover:bg-slate-400 active:scale-95'
            onClick={() => dispatch(deleteMyCart(authUser.id))}
          >
            Remove all items
          </button>
        </div>
      </form>
    </div>
  );
}

export default CartCheckout;
