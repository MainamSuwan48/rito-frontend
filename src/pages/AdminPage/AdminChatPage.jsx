import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminChatUserCard from './AdminChatUserCard';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllChat } from '@/redux/slice/admin-slice';
import { useSelector } from 'react-redux';

function AdminChatPage() {
  const dispatch = useDispatch();
  const { allChats } = useSelector((state) => state.admin);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getAllChat());
  }, []);

  return (
    <div className='flex h-content'>
      <div className='flex h-content w-[20%] flex-col items-start justify-start bg-base-300 p-2'>
        {allChats.map((chat) => (
          <AdminChatUserCard key={chat.id} chat={chat} />
        ))}
      </div>
      <div className='h-content w-full bg-primary'>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminChatPage;
