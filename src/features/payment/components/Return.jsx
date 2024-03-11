import * as paymentApi from '@/api/payment';
import { CircleCheckIcon } from '@/icons';
import { deleteMyCart } from '@/redux/slice/cart-slice';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Return() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.auth);
  const { carts } = useSelector((state) => state.carts);
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    const fetch = async () => {
      const res = await paymentApi.getSessionStatus(sessionId);
      setCustomerEmail(res.data.customer_email);
      setStatus(res.data.status);
    };

    fetch();
  }, []);

  useEffect(() => {
    if (status === 'complete' && carts.length > 0) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const sessionId = urlParams.get('session_id');
      console.log(sessionId);

      const updateAfterPayment = async (sessionId) => {
        await paymentApi.updateAfterSuccess(sessionId);
      };
      updateAfterPayment({ sessionId, cartData: carts });

      dispatch(deleteMyCart(authUser.id));
      toast.success('Game(s) added to your collection');
    }
  }, [status]);

  if (status === 'open') {
    return <Navigate to='/checkout' />;
  }

  if (status === 'complete') {
    return (
      <section
        id='success'
        className='flex h-screen flex-col items-center justify-center gap-6 text-base_dark'
      >
        <CircleCheckIcon className='h-44 w-44 stroke-success' />
        <h1 className='text-4xl font-bold'>Thank you for your purchase!</h1>
        <p className='text-xl'>
          We appreciate your business! A confirmation email will be sent to{' '}
          {customerEmail}.
        </p>
        <Link
          className='rounded-md bg-primary px-12 py-6 text-xl font-medium text-white transition-all hover:bg-primary_mute active:scale-95'
          to='/'
        >
          &#8592; Back to Home
        </Link>
        <p className='mt-12 text-xl'>
          If you have any problem,{' '}
          <span className='font-semibold' role='button'>
            contact us
          </span>
        </p>
      </section>
    );
  }

  return null;
}
