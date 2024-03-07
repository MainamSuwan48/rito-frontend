import BodyContainer from '@/features/user/components/BodyContainer';
import MyProfileContainer from '@/features/user/components/MyProfileContainer';
import UserProfileContainer from '@/features/user/components/UserProfileContainer';
import Header from '@/layouts/Header';
import { getUserById } from '@/redux/slice/user-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



export default function MyProfilePage() {
  const { authUser } = useSelector((state) => state.auth);

  
  return (
    <>
      
      <div className='container h-screen grid grid-flow-row gap-4'>

        <MyProfileContainer user={authUser}/>
         
        <BodyContainer user={authUser} />
      </div>
    </>
  );
}
