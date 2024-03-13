import React from 'react';
import { useSelector } from 'react-redux';

function UserChatBubble({ children }) {
  const { authUser } = useSelector((state) => state.auth);

  return (
    <div className='flex flex-shrink-0 items-center justify-end p-2'>
      <div className='mr-2'>
        <p className='text-right font-bold text-secondary'>
          {authUser.displayName}
        </p>
        <p className='text-right text-black'>{children}</p>
      </div>
      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-secondary'>
        {authUser && (
          <img
            src={authUser.profileImageUrl}
            className='h-10 w-10 rounded-full object-cover'
            alt='user'
          />
        )}
      </div>
    </div>
  );
}

export default UserChatBubble;
