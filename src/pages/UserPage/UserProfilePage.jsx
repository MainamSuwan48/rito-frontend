import BodyContainer from '@/features/user/components/BodyContainer';
import MyProfileContainer from '@/features/user/components/MyProfileContainer';
import UserProfileContainer from '@/features/user/components/UserProfileContainer';
import Header from '@/layouts/Header';
import { getMe } from '@/redux/slice/auth-slice';
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
  }, [userId]);
  console.log(currentUser);

  return (
    <>
      <video
        className='-z-50'
        autoPlay
        loop
        muted
        style={{
          opacity: '0.8',
          position: 'fixed',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src='https://res.cloudinary.com/dzu5no8qx/video/upload/v1710178121/j0zrzv51bbwzjdwd2ynl.mp4' />
      </video>
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
