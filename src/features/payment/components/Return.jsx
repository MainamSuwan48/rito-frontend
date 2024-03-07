import * as paymentApi from '@/api/payment';
import { deleteMyCart } from '@/redux/slice/cart-slice';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
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
      <section id='success' className='p-5 text-center'>
        <p>
          We appreciate your business! A confirmation email will be sent to{' '}
          {customerEmail}. If you have any questions, please email{' '}
          <a href='mailto:orders@example.com' className='underline'>
            ritoproject1@gmail.com
          </a>
          .
        </p>
      </section>
    );
  }

  return null;
}
