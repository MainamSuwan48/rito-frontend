import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminChatUserCard from './AdminChatUserCard';
import { useParams } from 'react-router-dom';

function AdminChatPage() {
  const { userId } = useParams();
  return (
    <div className='flex h-content'>
      <div className='flex h-content w-[20%] flex-col items-start justify-start bg-base-300'>
        <AdminChatUserCard />
      </div>
      <div className='h-content w-full bg-primary'>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminChatPage;
