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
  console.log(authUser)
  return (
    <Sheet>
      <SheetTrigger
        className='flex gap-2 h-14 w-[350px] items-center justify-center bg-base_dark text-neutral transition-all
      hover:rounded-md active:bg-base-300'
      >
        Add Friends <FriendIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription >
            <UsersList myID={authUser?.id}/>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default AddFriendsModal;
