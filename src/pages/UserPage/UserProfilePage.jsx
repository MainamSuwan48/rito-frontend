import BodyContainer from '@/features/user/components/BodyContainer';
import MyProfileContainer from '@/features/user/components/MyProfileContainer';
import UserProfileContainer from '@/features/user/components/UserProfileContainer';
import Header from '@/layouts/Header';
import { getUserById } from '@/redux/slice/user-slice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function UserProfilePage() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { authUser } = useSelector((state) => state.auth);
  const { currentUser, loading } = useSelector((state) => state.users);

  // && !currentUser
  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
    }
    console.log(currentUser);
  }, [userId]);

  return (
    <>
      <div className='container grid h-screen grid-flow-row gap-4'>
        {loading ? (
          <span className='loading loading-ring loading-lg'></span>
        ) : (
          currentUser && (
            <>
              <UserProfileContainer user={currentUser} />
              <BodyContainer user={currentUser} />
            </>
          )
        )}
      </div>
    </>
  );
}
