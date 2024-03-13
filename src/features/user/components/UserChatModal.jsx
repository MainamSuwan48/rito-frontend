import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ChatIcon } from '@/icons';
import UserChatBox from './UserChatBox';

function UserChatModal() {
  return (
    <Sheet className='w-[800px]'>
      <SheetTrigger className='rounded-full border-2 bg-primary p-2 transition-all hover:scale-110 active:scale-100 active:bg-primary_mute'>
        <ChatIcon className='h-6 w-6 text-white' title='Chat with Admin' />
      </SheetTrigger>
      <SheetContent className=''>
        <SheetHeader className='h-content'>
          <SheetTitle>Chat with Admin</SheetTitle>
          {/* <SheetDescription></SheetDescription> */}
          <UserChatBox />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default UserChatModal;
