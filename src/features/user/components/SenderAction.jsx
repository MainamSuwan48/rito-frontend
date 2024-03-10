import { acceptFriend, rejectFriend } from '@/redux/slice/friendship-slice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function SenderAction({user}) {
    const dispatch = useDispatch()
    const {actionMessage,loadingActionMessage,friendStatus,loadingFriendStatus}=
    useSelector((state)=> state.friendship)

    const onAccept =async() =>{
        try{
          await dispatch(acceptFriend(user.id))
          if(!loadingActionMessage){
            console.log(actionMessage);
            toast.success(`accepted request from ${user.displayName}`)
            setAccepted(true)
          }
    
        }catch(error){
          toast.error(error.response?.data.message)
        }
      }


      const onReject =async() =>{
        try{
          await dispatch(rejectFriend(user.id))
          if(!loadingActionMessage){
            console.log(actionMessage);
            toast.success(`rejected request from ${user.displayName}`)
            setAccepted(true)
          }
    
        }catch(error){
          toast.error(error.response?.data.message)
        }
      }

  return (
    <div className='flex flex-col gap-2'>
        <button 
            className='flex h-fit flex-col items-center justify-center gap-2.5 bg-teal-500 px-20 py-4 text-center font-semibold text-white'
            onClick={onAccept}
        >
            Accept
        </button>
        <button 
            className='flex h-fit flex-col items-center justify-center gap-2.5 bg-teal-500 px-20 py-4 text-center font-semibold text-white'
            onClick={onReject}
        >
            Reject
        </button>
    </div>
  )
}

export default SenderAction