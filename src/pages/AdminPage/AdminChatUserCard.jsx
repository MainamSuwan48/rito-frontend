import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminChatUserCard({ chat }) {
  const navigate = useNavigate();
  //   const { userId, username } = user;
  return (
    <div
      className='mt-2 flex h-24 w-full flex-shrink-0 select-none overflow-hidden rounded-md border transition-all hover:scale-105 active:scale-100'
      onClick={() => navigate(`/admin/chat/${chat.chatSenderId}`)}
    >
      <div className='h-24 w-24 flex-shrink-0 bg-white'>
        <img
          className='h-full w-full bg-primary object-cover'
          src={
            chat.chatSender.profileImageUrl ||
            'https://media.istockphoto.com/id/666545204/vector/default-placeholder-profile-icon.jpg?s=612x612&w=0&k=20&c=UGYk-MX0pFWUZOr5hloXDREB6vfCqsyS7SgbQ1-heY8='
          }
        />
      </div>
      <div className='flex h-24 w-full flex-col gap-2 bg-blue-50 p-2'>
        <div>{chat.chatSender.username}</div>
        <div>User ID: {chat.chatSender.id}</div>
      </div>
    </div>
  );
}

export default AdminChatUserCard;
