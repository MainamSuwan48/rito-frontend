import { useDispatch, useSelector } from 'react-redux';
import FriendAction from './FriendAction';
import SenderAction from './SenderAction';
import RecieverAction from './RecieverAction';
import UnknowAction from './UnknowAction';
import { useEffect } from 'react';
import { checkFriendshipStatus } from '@/redux/slice/friendship-slice';
import { getMe } from '@/redux/slice/auth-slice';

export default function ProfileAction({ user }) {
  const dispatch = useDispatch();
  const { friendStatus, loadingFriendStatus } = useSelector(
    (state) => state.friendship
  );
  const { authUser } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(checkFriendshipStatus(user.id));
    dispatch(getMe());
  }, []);

  const findFriendStatusToAuthUser = (friendStatus, authUser) => {
    if (friendStatus?.status === 'ACCEPTED') return 'FRIEND';
    if (friendStatus?.status === 'PENDING') {
      if (friendStatus?.senderId == authUser.id) {
        return 'RECIEVER';
      }
      if (friendStatus?.senderId !== authUser.id) {
        return 'SENDER';
      }
    } else return 'UNKNOW';
  };

  const mapping = {
    ['FRIEND']: <FriendAction user={user} />,
    ['SENDER']: <SenderAction user={user} />,
    ['RECIEVER']: <RecieverAction user={user} />,
    ['UNKNOW']: <UnknowAction user={user} />,
  };

  const friendStatusToAuthUser = findFriendStatusToAuthUser(
    friendStatus,
    authUser
  );

  return <>{mapping[friendStatusToAuthUser]}</>;
}
