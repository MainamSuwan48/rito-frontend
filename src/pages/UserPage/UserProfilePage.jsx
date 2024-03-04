import BodyContainer from '@/features/user/components/BodyContainer';
import UserProfileContainer from '@/features/user/components/UserProfileContainer';
import Header from '@/layouts/Header';

export default function UserProfilePage() {
  return (
    <>
      <Header />
      <div className='container grid grid-flow-row gap-4'>
        <UserProfileContainer />
        <BodyContainer />
      </div>
    </>
  );
}
