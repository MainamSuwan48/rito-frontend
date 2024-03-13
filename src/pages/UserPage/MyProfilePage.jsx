import BodyContainer from '@/features/user/components/BodyContainer';
import MyProfileContainer from '@/features/user/components/MyProfileContainer';
import UserProfileContainer from '@/features/user/components/UserProfileContainer';
import Header from '@/layouts/Header';
import { getUserById } from '@/redux/slice/user-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearAuthUserImages } from '@/redux/slice/auth-slice';
import { useEffect } from 'react';

export default function MyProfilePage() {
  const { authUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(clearAuthUserImages());
    };
  }, [authUser]);

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
        <source src='https://res.cloudinary.com/dzu5no8qx/video/upload/v1710179367/xgahrkcsbogq5iauitbh.mp4' />
      </video>
      <div className='container grid h-screen grid-flow-row gap-4'>
        <MyProfileContainer user={authUser} />

        <BodyContainer user={authUser} />
      </div>
    </>
  );
}
