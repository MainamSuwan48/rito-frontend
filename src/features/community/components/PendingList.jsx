import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAllFriend,getAllMyPending,checkFriendshipStatus, getFriendsAdded } from '@/redux/slice/friendship-slice';
import { getAllUsers } from '@/redux/slice/user-slice';
import PendingCard from './PendingCard';


function PendingList({myID}) {
  const dispatch = useDispatch()
  const {users,loading} = useSelector((state) => state.users)
  const {friendsAdded,friendStatus,pendings} = useSelector((state) => state.friendship)

  useEffect(()=>{
    dispatch(getAllMyPending())


  },[])
  console.log(pendings)

  return (
    <div 
    className='flex flex-col gap-2 overflow-auto h-content pb-8'
    >
      {
      
      pendings?.map((pending)=>{
          return <PendingCard key={pending.sender.id} user={pending.sender} myID={myID}/>
      })
      
    }
    <div className=''>No other pending request</div>
      
    </div>
  );
}

export default PendingList;
