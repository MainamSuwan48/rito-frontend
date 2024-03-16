import React from 'react';
import { HeadSetIcon } from '@/icons';
import ReactTimeAgo from 'react-time-ago';

function AdminChatBubble({ children, type = '', sent }) {
  if (type === 'admin') {
    return (
      <div className='flex items-center justify-end p-2'>
        <div className='mr-2'>
          <p className='text-right font-bold text-primary'>Admin</p>
          <p className='mr-2 text-right text-black'>{children}</p>
          <p className='mr-2 text-right text-xs text-base_dark'>
            <ReactTimeAgo date={new Date(sent)} locale='en-US' />
          </p>
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
        <p className='text-left font-bold text-primary'>Admin</p>
        <p className='text-left text-black'>{children}</p>
        <p className='mr-2 text-left text-base_dark text-xs'>
          <ReactTimeAgo date={new Date(sent)} locale='en-US' />
        </p>
      </div>
    </div>
  );
}

export default AdminChatBubble;
