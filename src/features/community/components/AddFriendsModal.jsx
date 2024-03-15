import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { FriendIcon } from '@/icons';
import UserCard from './UserCard';
import UsersList from './UsersList';
import { useSelector } from 'react-redux';

function AddFriendsModal() {
  const { authUser } = useSelector((state) => state.auth);
  console.log(authUser);
  return (
    <Sheet>
      <SheetTrigger
        className='flex h-14 w-[350px] items-center justify-center gap-2 bg-base_dark text-neutral transition-all hover:rounded-md
      hover:bg-gray-900 active:bg-base-300'
      >
        Add Friends <FriendIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add More Friends</SheetTitle>
          <SheetDescription>
            <UsersList myID={authUser?.id} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default AddFriendsModal;
