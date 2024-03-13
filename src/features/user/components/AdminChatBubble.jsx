import React from 'react';
import { HeadSetIcon } from '@/icons';
function AdminChatBubble({ children, type = '' }) {
  if (type === 'admin') {
    return (
      <div className='flex items-center justify-end p-2'>
        <div className='mr-2'>
          <p className='text-right font-bold text-primary'>Admin</p>
          <p className='mr-2 text-right text-black'>{children}</p>
        </div>
        <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary'>
          <HeadSetIcon className='h-6 w-6 text-white' />
        </div>
      </div>
    );
  }

  return (
    <div className='flex items-center justify-start p-2'>
      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary'>
        <HeadSetIcon className='h-6 w-6 text-white' />
      </div>
      <div className='ml-2'>
        <p className='font-bold text-primary'>Admin</p>
        <p className='text-black'>{children}</p>
      </div>
    </div>
  );
}

export default AdminChatBubble;
