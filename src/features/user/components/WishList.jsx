import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { HeartIcon } from '@/icons';
import WishListItems from './WishListItems';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getMyWishlist } from '@/redux/slice/wishlists-slice';
import { useEffect } from 'react';

function WishList() {
  const { wishlist, loading } = useSelector((state) => state.wishlists);
  const dispatch = useDispatch();
  const test = () => {
    console.log(wishlist[0].game.id);
  };


  if (loading) {
    return <div className='w-full bg-blue-200'>Loading...</div>;
  }
  return (
    <div className='relative'>
      <Sheet>
        <SheetTrigger>
          <HeartIcon className='h-6 w-6 transition-all hover:scale-125 hover:fill-primary active:scale-100' />
        </SheetTrigger>
        <SheetContent className='w-screen'>
          <SheetHeader>
            <SheetTitle>Your WishList</SheetTitle>
            <SheetDescription>
              <WishListItems wishlist={wishlist} />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      {wishlist && (
        <div className='absolute -right-3 -top-2 rounded-full bg-accent h-5 w-5 flex justify-center items-center'>
          {wishlist.length}
        </div>
      )}
    </div>
  );
}

export default WishList;
