import React from 'react';
import GameCardStrip from '@/features/store/components/GameCardStrip';

function WishListItems({ wishlist}) {

  return (
    <div className='flex w-full flex-col'>
      
      {wishlist &&     
        wishlist.map((el) => {           
          return <GameCardStrip type='wishlist' gameData={el.game} />;
        })}
    </div>
  );
}

export default WishListItems;
