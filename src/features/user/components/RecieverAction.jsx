import { cancelRequest } from '@/redux/slice/friendship-slice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function RecieverAction({ user }) {
  const dispatch = useDispatch();
  const {
    actionMessage,
    loadingActionMessage,
    friendStatus,
    loadingFriendStatus,
  } = useSelector((state) => state.friendship);

  const onCancel = async () => {
    console.log('aaa');
    try {
      await dispatch(cancelRequest(user.id));
      if (!loadingActionMessage) {
        console.log(actionMessage);
        toast.success(`cancel request`);
        setAdded(true);
      }
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  return (
    <button
      className='flex h-fit flex-col items-center justify-center gap-2.5 bg-teal-500 px-20 py-4 text-center font-semibold text-white hover:bg-danger'
      onClick={onCancel}
    >
      Cancel Request
    </button>
  );
}

export default RecieverAction;
