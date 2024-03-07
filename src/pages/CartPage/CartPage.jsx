import React from 'react';

import CartCheckout from '@/features/cart/components/CartCheckout';
import CartDetail from '@/features/cart/components/CartDetail';
import { useSelector } from 'react-redux';
import CartEmpty from '@/features/cart/components/CartEmpty';

function CartPage() {
  const { carts, loading } = useSelector((state) => state.carts);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (carts.length <= 0) {
    return <CartEmpty />;
  }

  return (
    <div className='grid grid-cols-12 gap-3 px-[128px]'>
      <div className='col-span-8 '>
        <CartDetail />
      </div>
      <div className='col-span-4'>
        <CartCheckout />
      </div>
    </div>
  );
}

export default CartPage;
