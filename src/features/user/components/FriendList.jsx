import React, { useEffect } from 'react';
import FriendItems from './FriendItems';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFriend } from '@/redux/slice/friendship-slice';
import { clearFriends } from '@/redux/slice/friendship-slice';

function FriendList({ user }) {
  // console.log(user)
  const dispatch = useDispatch();
  const { friends, loadingFriends } = useSelector((state) => state.friendship);
  useEffect(() => {
    if (!friends) {
      dispatch(getAllFriend(user.id));
    }
  }, [friends]);

  useEffect(() => {
    return () => {
      dispatch(clearFriends());
    };
  }, []);

  if (!loadingFriends) {
    console.log(friends);
  }
  return (
    <div className='flex flex-col gap-2'>
      <div className='inline-flex h-16 w-full flex-shrink-0 items-center justify-start gap-2.5 bg-slate-500 bg-opacity-80 px-6 py-4'>
        <div className='flex h-4 shrink grow basis-0 items-center justify-between'>
          <div className='text-center  text-base font-semibold leading-snug text-white'>
            Friends List ({friends?.length})
          </div>
          <div className='relative h-4 w-4' />
        </div>
      </div>
      <div
      className='flex flex-col gap-1 overflow-auto'
      >
        {friends?.map((friend) => {
          return <FriendItems key={friend.id} friend={friend} />;
        })}
      </div>
    </div>
  );
}

export default FriendList;
