import React from 'react';
import GameCardStrip from '@/features/store/components/GameCardStrip';
import { useSelector, useDispatch } from 'react-redux';
import { TrashIcon } from '@/icons';
import { removeGameFromWishlist } from '@/redux/slice/wishlists-slice';

function WishListItems() {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlists);

  return (
    <div className='flex w-full flex-col'>
      {wishlist &&
        wishlist.map((el) => {
          return (
            <div className='relative'>
              <GameCardStrip
                key={el.id}
                type='wishlist'
                wishlistItemId={el.id}
                gameData={el.game}
              />
              <div
                key={el.id}
                onClick={() => dispatch(removeGameFromWishlist(el.id))}
                className='absolute -right-2 -top-2 cursor-pointer rounded-full bg-red-500 p-2 transition-all hover:scale-110 hover:bg-danger active:scale-100'
              >
                <TrashIcon key={el.id} className='h-4 w-4 text-white' />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default WishListItems;
