import React from 'react';
import AdminButton from './AdminButton';

export default function PublishGameRequestingCard() {
  return (
    <div className='flex items-center justify-center overflow-hidden bg-neutral p-2.5 text-base_dark'>
      <img className='flex-1 object-center' src='' alt='' />
      <div className=' flex flex-1 flex-col gap-2.5'>
        <p>GameName</p>
        <p>PlatformIcons</p>
      </div>
      <div className='flex flex-1 flex-col gap-1.5 text-sm'>
        <p>UserId</p>
        <p>UserName</p>
        <p>CreatedAt</p>
      </div>
      <div className='flex flex-1 flex-col items-center justify-center gap-1.5'>
        <p>Price</p>
      </div>
      <div className='flex h-[2rem] flex-1 items-center justify-center gap-2.5'>
        <AdminButton mode='edit'>Edit</AdminButton>
        <AdminButton mode='confirm'>Confirm</AdminButton>
        <AdminButton mode='delete'>Delete</AdminButton>
      </div>
    </div>
  );
}
