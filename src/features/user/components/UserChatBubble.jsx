import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '@/redux/slice/user-slice';
function UserChatBubble({ children, type = '', id }) {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getAllUsers());
    }
  }, [users]);

  const userName = users.find((user) => user.id === id)?.displayName;
  const profileImageUrl = users.find((user) => user.id === id)?.profileImageUrl;

  if (type === 'admin') {
    return (
      <div className='flex flex-shrink-0 items-center justify-start p-2'>
        <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-secondary'>
          {authUser && (
            <img
              src={
                profileImageUrl ||
                'https://media.istockphoto.com/id/666545204/vector/default-placeholder-profile-icon.jpg?s=612x612&w=0&k=20&c=UGYk-MX0pFWUZOr5hloXDREB6vfCqsyS7SgbQ1-heY8='
              }
              className='h-10 w-10 rounded-full object-cover'
              alt='user'
            />
          )}
        </div>
        <div className='ml-2'>
          <p className='text-left font-bold text-secondary'>{userName}</p>
          <p className='text-right text-black'>{children}</p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-shrink-0 items-center justify-end p-2'>
      <div className='mr-2'>
        <p className='text-right font-bold text-secondary'>
          {authUser.displayName}
        </p>
        <p className='text-right text-black'>{children}</p>
      </div>
      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-secondary'>
        {authUser.profileImageUrl && (
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
