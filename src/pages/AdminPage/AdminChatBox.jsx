import AdminChatBubble from '@/features/user/components/AdminChatBubble';
import UserChatBubble from '@/features/user/components/UserChatBubble';
import React from 'react';
import { useParams } from 'react-router-dom';

function AdminChatBox() {
  return (
    <div className='flex h-content w-full flex-col items-center justify-center bg-base-100 px-4'>
      <div className='h-content w-full overflow-auto'>
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
        <UserChatBubble>
          Hi, I have a question about your product
        </UserChatBubble>
        <UserChatBubble>
          Hi, I have a question about your product
        </UserChatBubble>
        <UserChatBubble>
          Hi, I have a question about your product
        </UserChatBubble>
        <UserChatBubble>
          Hi, I have a question about your product
        </UserChatBubble>
        <UserChatBubble>
          Hi, I have a question about your product
        </UserChatBubble>
        <UserChatBubble>
          Hi, I have a question about your product
        </UserChatBubble>
        <UserChatBubble>
          Hi, I have a question about your product
        </UserChatBubble>
        <UserChatBubble>
          Hi, I have a question about your product
        </UserChatBubble>
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
      <div className='my-4 flex w-full items-center justify-between'>
        <input
          placeholder='Type your message here...'
          type='text'
          className='h-10 w-full border border-base_dark'
        />
        <button className='flex h-10  items-center justify-center rounded-sm bg-primary px-2 text-center text-white'>
          Send
        </button>
      </div>
    </div>
  );
}

export default AdminChatBox;
