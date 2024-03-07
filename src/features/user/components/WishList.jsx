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

function WishList() {
  return (
    <Sheet>
      <SheetTrigger>
        <HeartIcon className='h-6 w-6 transition-all hover:scale-125 hover:fill-primary active:scale-100' />
      </SheetTrigger>
      <SheetContent className="w-screen">
        <SheetHeader>
          <SheetTitle>Your WishList</SheetTitle>
          <SheetDescription>
            <WishListItems />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default WishList;
