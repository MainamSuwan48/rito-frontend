import React from 'react';

function AdminChatUserCard({ user }) {
  const userId = 3;
  //   const { userId, username } = user;
  return (
    <div className='active:scale-100 mt-2 flex h-24 w-full flex-shrink-0 select-none transition-all hover:scale-105'>
      <div className='h-24 w-24 flex-shrink-0 bg-white'>
        <img className='h-full w-full object-cover' src='' />
      </div>
      <div className='flex h-24 w-full flex-col gap-2 bg-blue-50 p-2'>
        <div>Username</div>
        <div>User ID: {userId}</div>
      </div>
    </div>
  );
}

export default AdminChatUserCard;
