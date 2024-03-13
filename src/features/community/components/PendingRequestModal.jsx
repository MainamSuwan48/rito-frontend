import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AddFriendIcon } from '@/icons';
import UserCard from './UserCard';
import UsersList from './UsersList';
import { useSelector } from 'react-redux';
import PendingList from './PendingList';

function PendingRequestModal() {
  const { authUser } = useSelector((state) => state.auth);
  console.log(authUser);
  return (
    <Sheet>
      <SheetTrigger
        className='flex h-14 w-[350px] items-center justify-center gap-2 bg-base_dark text-neutral transition-all hover:rounded-md
      hover:bg-gray-900 active:bg-base-300'
      >
        Pending Request <AddFriendIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            <PendingList myID={authUser?.id} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default PendingRequestModal;
