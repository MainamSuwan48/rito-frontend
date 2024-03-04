import BodyContainer from '@/features/user/components/BodyContainer';
import UserProfileContainer from '@/features/user/components/UserProfileContainer';
import Header from '@/layouts/Header';
import { useSelector } from 'react-redux';


export default function UserProfilePage() {
  const { authUser } = useSelector((state) => state.auth);
  return (
    <>
      <div className='container h-screen grid grid-flow-row gap-4'>
        <UserProfileContainer />
        <BodyContainer />
      </div>
    </>
  );
}
