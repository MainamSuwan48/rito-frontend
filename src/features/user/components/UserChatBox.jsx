import React from 'react';
import AdminChatBubble from './AdminChatBubble';
import UserChatBubble from './UserChatBubble';

function UserChatBox() {
  return (
    <div className='flex h-content flex-col justify-end'>
      <div className='flex h-full w-full flex-col justify-end overflow-y-auto bg-base-200 p-4'>
        <AdminChatBubble>Hello how can i help you?</AdminChatBubble>
        <UserChatBubble>
          Hi, I have a question about your product
        </UserChatBubble>
        <UserChatBubble>
          Hi, I have a question about your product
        </UserChatBubble>
        <UserChatBubble>
          Hi, I have a question about your product
        </UserChatBubble>
        <AdminChatBubble>Don't spam or i will fucking ban you</AdminChatBubble>
      </div>
      <div className='my-4 flex items-center justify-center'>
        <input
          placeholder='Type your message here...'
          type='text'
          className='h-10 w-full border border-base_dark'
        />
        <button className='flex h-10 items-center justify-center rounded-sm bg-primary px-2 text-center text-white'>
          Send
        </button>
      </div>
    </div>
  );
}

export default UserChatBox;
