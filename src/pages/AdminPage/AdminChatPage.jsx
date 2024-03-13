import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminChatUserCard from './AdminChatUserCard';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllChat } from '@/redux/slice/admin-slice';
import { useSelector } from 'react-redux';
import { BackIcon } from '@/icons';
import { useNavigate } from 'react-router-dom';

function AdminChatPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allChats } = useSelector((state) => state.admin);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getAllChat());
  }, []);

  return (
    <div className=' relative flex h-content'>
      <video
        className='inset-0 -z-50'
        autoPlay
        loop
        muted
        style={{
          opacity: '0.6',
          position: 'fixed',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src='https://res.cloudinary.com/dhm6pitfd/video/upload/v1710171222/Moving_Gradient_Background_rnv9iv.mp4' />
      </video>
      <div className='flex h-content w-[20%] flex-col items-start justify-start rounded-md bg-base-300 bg-opacity-50 p-2 transition-all '>
        <button
          onClick={() => navigate('/admin')}
          className='w-full rounded-md bg-primary bg-opacity-50 p-2  text-white transition-all hover:bg-opacity-100 active:bg-primary_mute'
        >
          <BackIcon />
        </button>
        {allChats.map((chat) => (
          <AdminChatUserCard key={chat.id} chat={chat} />
        ))}
      </div>
      <div className='h-content w-full bg-transparent'>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminChatPage;
