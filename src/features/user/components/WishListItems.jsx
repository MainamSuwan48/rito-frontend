import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyWishlist } from '@/redux/slice/wishlists-slice';
import { useEffect } from 'react';
import GameCardStrip from '@/features/store/components/GameCardStrip';

function WishListItems() {
  const { wishlist, loading } = useSelector((state) => state.wishlists);
  const dispatch = useDispatch();
  const test = () => {
    console.log(wishlist[0].game.id);
  };

  useEffect(() => {
    if (!wishlist) {
      dispatch(getMyWishlist());
    }
  }, [wishlist]);

  if (loading) {
    return <div className='w-full bg-blue-200'>Loading...</div>;
  }

  return (
    <div onClick={test} className='flex w-full flex-col'>
      
      {wishlist &&     
        wishlist.map((el) => {           
          return <GameCardStrip type='wishlist' gameData={el.game} />;
        })}
    </div>
  );
}

export default WishListItems;
