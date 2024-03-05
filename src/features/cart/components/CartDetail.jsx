import GameCardStrip from '@/features/store/components/GameCardStrip';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function CartDetail() {
  const { carts } = useSelector((state) => state.carts);

  console.log(carts);

  const totalPrice = carts.reduce((acc, el) => acc + el.game.price, 0);

  const totalDiscount = carts.reduce((acc, el) => acc + el.game.discount, 0);

  return (
    <div>
      <h1 className='mb-6 text-4xl'>Cart</h1>

      {/* cart item card */}
      <div className='mb-11 flex flex-col gap-2'>
        {carts.map((cart) => (
          <GameCardStrip
            key={cart.id}
            gameData={cart.game}
            type='cart'
            cartId={cart.id}
          />
        ))}
      </div>

      <div className='flex flex-col gap-4 border-b border-base_light pb-6'>
        <div className='flex items-center justify-between text-xl'>
          <p>Total Price</p>
          <p>{totalPrice.toLocaleString()} baht</p>
        </div>
        <div className='flex items-center justify-between text-xl'>
          <p>Discount</p>
          <p>{totalDiscount.toLocaleString()} baht</p>
        </div>
      </div>

      <div className='mt-5 flex items-center justify-between text-xl'>
        <p>Net</p>
        <p>{(totalPrice - totalDiscount).toLocaleString()} baht</p>
      </div>
    </div>
  );
}

export default CartDetail;
