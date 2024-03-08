import React, { useEffect } from 'react';
import UserCard from './UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFriend } from '@/redux/slice/friendship-slice';
import { getAllUsers } from '@/redux/slice/user-slice';


function UsersList({myID}) {
  const dispatch = useDispatch()
  const {users,loading} = useSelector((state) => state.users)
  const {friends,loadingFriends} = useSelector((state) => state.friendship)
  console.log(myID)
  useEffect(()=>{
    dispatch(getAllFriend(myID))
    dispatch(getAllUsers())

  },[])
  // console.log(users)
  // console.log(friends)
  
  const friendsId = []
  friends?.forEach(element => {
    friendsId.push(element.id)
  });
  // console.log(friendsId)

  return (
    <div 
    className='flex flex-col gap-2 overflow-auto h-content pb-8'
    >
      {users.map((user)=>{
        if(!friendsId.includes(user.id) && user.id!==myID){
          return <UserCard user={user}/>
        }
      }
      )}
      
    </div>
  );
}

export default UsersList;
