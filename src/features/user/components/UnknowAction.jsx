import { requestFriend } from '@/redux/slice/friendship-slice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function UnknowAction({user}) {
  const dispatch = useDispatch()
  const {actionMessage,loadingActionMessage,friendStatus,loadingFriendStatus}=
    useSelector((state)=> state.friendship)


    const addFriend =async() =>{
      console.log("aaa")
      try{
        await dispatch(requestFriend(user.id))
        if(!loadingActionMessage){
          console.log(actionMessage);
          toast.success(`add ${user.displayName}`)
          setAdded(true)
  
        }
  
      }catch(error){
        toast.error(error.response?.data.message)
      }
    }

  return (
    <button 
      className='flex h-fit flex-col items-center justify-center gap-2.5 bg-teal-500 hover:bg-success px-20 py-4 text-center font-semibold text-white'
      onClick={addFriend}
    >
       Add Friend
    </button>
  )
}

export default UnknowAction