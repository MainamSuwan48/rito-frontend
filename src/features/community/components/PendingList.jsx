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
    // dispatch(getAllFriend(myID))
    // dispatch(getAllMyPending())
    dispatch(getAllMyPending())
    // dispatch(getFriendsAdded())

  },[])
  
//   const friendsAddedId = []
//   friendsAdded?.forEach((el)=>{
//     if(el.senderId === myID){
//       friendsAddedId.push(el.receiverId)
//     }
//     if(el.receiverId === myID){
//       friendsAddedId.push(el.senderId)
//     }
//   })
  console.log(pendings)



  return (
    <div 
    className='flex flex-col gap-2 overflow-auto h-content pb-8'
    >
      {pendings?.map((pending)=>{
          return <PendingCard key={pending.sender.id} user={pending.sender} myID={myID}/>
        // }
      }
      )}
      
    </div>
  );
}

export default PendingList;
