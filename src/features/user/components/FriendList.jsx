import React, { useEffect } from 'react'
import FriendItems from './FriendItems'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFriend } from '@/redux/slice/friendship-slice'

function FriendList({user}) {
    // console.log(user)
    const dispatch = useDispatch()
    const {friends,loadingFriends} = useSelector((state)=>state.friendship)
    useEffect(()=>{
        dispatch(getAllFriend(user.id))
    },[])
    if(!loadingFriends){
        console.log(friends)
    } 
  return (
    <div className='flex flex-col'>
        <div className='inline-flex h-12 w-full items-center justify-start gap-2.5 bg-slate-500 px-6 py-4'>
          <div className='flex h-4 shrink grow basis-0 items-center justify-between'>
            <div className='text-center  text-base font-semibold leading-snug text-white'>
              Friends List ({friends?.length})
            </div>
            <div className='relative h-4 w-4' />
          </div>
        </div>
        {friends?.map((friend)=>{
           return <FriendItems key={friend.id} friend={friend}/>

        })}
    
      </div>
  )
}

export default FriendList