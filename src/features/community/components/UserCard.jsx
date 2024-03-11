import { checkFriendshipStatus, requestFriend } from '@/redux/slice/friendship-slice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function UserCard({user,myID}) {
  const [added,setAdded] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {actionMessage,loadingActionMessage,friendStatus,loadingFriendStatus}=
    useSelector((state)=> state.friendship)
  
  const addFriend =async() =>{
    console.log("aaa")
    try{
      await dispatch(requestFriend(user.id))
      if(!loadingActionMessage){
        console.log(actionMessage);
        toast.success(actionMessage)
        toast.success(`add ${user.displayName}`)
        setAdded(true)

      }

    }catch(error){
      toast.error(error.response?.data.message)
    }
  }
  

  return (
    <>
 
     <div className='flex-shrink-0 h-32 flex gap-4 border-2 rounded-md bg-base-300 p-2 transition-all hover:border-primary items-center'>
      <div
      className='border border-base_dark h-24 w-24 rounded-md transition-all hover:border-primary '
      >
        <img
          className=' h-[94px] w-24 rounded-md bg-base-300 hover:cursor-pointer'
          src={user.profileImageUrl||'https://via.placeholder.com/256x256'}
          onClick={()=>navigate(`/user/${user.id}`)}
        />
      </div>
      <div className='flex flex-col justify-center gap-2'>
        <div className='text-lg font-semibold  text-base_dark'>{user.displayName.slice(0,15)}</div>
        {added
        ?
        <div 
          className='rounded-md w-[100px] border border-base-100 p-2 text-neutral transition-all text-center bg-primary'
        >Requested</div>
        :
        <button 
          className='rounded-md w-[120px] border border-base-100 bg-base_dark p-2 text-neutral transition-all hover:bg-primary hover:text-black active:bg-primary_mute'
          onClick={addFriend}
        >
          Add Friend
        </button>
        }
      </div>
    </div>
  
  </>
    
    
  );
}

export default UserCard;
