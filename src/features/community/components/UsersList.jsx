import React, { useEffect } from 'react';
import UserCard from './UserCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllFriend,
  getAllMyPending,
  checkFriendshipStatus,
  getFriendsAdded,
} from '@/redux/slice/friendship-slice';
import { getAllUsers } from '@/redux/slice/user-slice';

function UsersList({ myID }) {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
  const { friendsAdded, friendStatus } = useSelector(
    (state) => state.friendship
  );

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getFriendsAdded());
  }, []);

  const friendsAddedId = [];
  friendsAdded?.forEach((el) => {
    if (el.senderId === myID) {
      friendsAddedId.push(el.receiverId);
    }
    if (el.receiverId === myID) {
      friendsAddedId.push(el.senderId);
    }
  });
  console.log(friendsAddedId);

  return (
    <div className='flex h-content flex-col gap-2 overflow-auto pb-8'>
      {users.map((user) => {
        if (!friendsAddedId.includes(user.id) && user.id !== myID) {
          return <UserCard key={user.id} user={user} myID={myID} />;
        }
      })}
    </div>
  );
}

export default UsersList;
