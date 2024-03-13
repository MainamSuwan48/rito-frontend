import { EmbeddedCheckout } from '@stripe/react-stripe-js';
import { EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { createSession } from '@/api/payment';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function CheckoutForm() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paymentMethod = urlParams.get('method');
    // Create a Checkout Session as soon as the page loads
    const fetch = async () => {
      const res = await createSession({ paymentMethod });
      setClientSecret(res.data.clientSecret);
    };

    fetch();
  }, []);

  return (
    <div id='checkout' className='h-content'>
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  );
}
