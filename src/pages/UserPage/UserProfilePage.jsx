import BodyContainer from '@/features/user/components/BodyContainer';
import UserProfileContainer from '@/features/user/components/UserProfileContainer';

export default function UserProfilePage() {
  return (
    <div className='container grid grid-flow-row gap-4'>
      <UserProfileContainer />
      <BodyContainer />
    </div>
  );
}
