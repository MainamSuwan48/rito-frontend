import {
  acceptFriend,
  checkFriendshipStatus,
  rejectFriend,
  requestFriend,
} from '@/redux/slice/friendship-slice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function PendingCard({ user, myID }) {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    actionMessage,
    loadingActionMessage,
    friendStatus,
    loadingFriendStatus,
  } = useSelector((state) => state.friendship);

  const onAccept = async () => {
    try {
      await dispatch(acceptFriend(user.id));
      if (!loadingActionMessage) {
        console.log(actionMessage);
        toast.success(`accepted request from ${user.displayName}`);
        setAccepted(true);
      }
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  const onReject = async () => {
    try {
      await dispatch(rejectFriend(user.id));
      if (!loadingActionMessage) {
        console.log(actionMessage);
        toast.success(`rejected request from ${user.displayName}`);
        setAccepted(true);
      }
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  return (
    <>
      <div className='flex h-32 flex-shrink-0 gap-4 rounded-md border-2 bg-base-300 p-2 transition-all hover:border-primary'>
        <div className='h-24 w-24 rounded-md border border-base_dark transition-all hover:border-primary '>
          <img
            className='h-[94px] w-24 rounded-md bg-base-300 hover:cursor-pointer'
            src={
              user.profileImageUrl ||
              'https://media.istockphoto.com/id/666545204/vector/default-placeholder-profile-icon.jpg?s=612x612&w=0&k=20&c=UGYk-MX0pFWUZOr5hloXDREB6vfCqsyS7SgbQ1-heY8='
            }
            onClick={() => navigate(`/user/${user.id}`)}
          />
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <div className='text-lg font-semibold  text-base_dark'>
            {user.displayName.slice(0, 15)}
          </div>
          {accepted ? (
            <div className='w-[120px] rounded-md border border-base-100 bg-primary p-2 text-center text-neutral transition-all'>
              already choose
            </div>
          ) : (
            <div className='flex gap-2'>
              <button
                className='w-[90px] rounded-md border border-base-100 bg-base_dark p-2 text-neutral transition-all hover:bg-success hover:text-black active:bg-primary_mute'
                onClick={onAccept}
              >
                Accept
              </button>
              <button
                className='w-[90px] rounded-md border border-base-100 bg-base_dark p-2 text-neutral transition-all hover:bg-danger hover:text-black active:bg-primary_mute'
                onClick={onReject}
              >
                Reject
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PendingCard;
