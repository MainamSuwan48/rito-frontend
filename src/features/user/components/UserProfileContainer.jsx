import { EditForm } from '@/features/auth/components/EditForm';
import { checkFriendshipStatus } from '@/redux/slice/friendship-slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileAction from './ProfileAction';

export default function UserProfileContainer({ user }) {
  const dispatch = useDispatch();
  const {
    description,
    username,
    displayName,
    id,
    profileImageUrl,
    firstName,
    lastName,
    email,
  } = user;

  const {
    actionMessage,
    loadingActionMessage,
    friendStatus,
    loadingFriendStatus,
  } = useSelector((state) => state.friendship);

  // console.log(user, 'user in UserProfileContainer');

  useEffect(() => {
    dispatch(checkFriendshipStatus(user.id));
  }, [actionMessage]);

  // console.log(friendStatus);
  return (
    <>
      <div className='inline-flex h-fit w-full items-start justify-between gap-36'>
        <div className='flex items-center justify-center gap-10'>
          <div className='mt-5 flex flex-col gap-4 bg-white bg-opacity-45 p-4'>
            <img
              className='h-64 w-64'
              src={profileImageUrl || 'https://via.placeholder.com/256x256'}
            />
          </div>
          <div className='flex w-[350px] items-center justify-start gap-4 bg-white bg-opacity-50 p-4'>
            <div className='inline-flex flex-col items-start justify-start gap-6'>
              <div className='flex flex-col items-start justify-center gap-4'>
                <div className='inline-flex items-start justify-center gap-6'>
                  <div className='text-center  text-2xl font-bold text-black'>
                    {displayName}
                  </div>
                </div>
                <div className='inline-flex items-center justify-start gap-2'>
                  <div className='flex items-center justify-center gap-2.5'>
                    <div className='text-center   font-normal  text-black'>
                      {description || 'description'}
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-start justify-start gap-4'>
                <div className='inline-flex items-center justify-center gap-2.5'>
                  <div className='text-center   font-medium  text-black'>
                    USERID: {id}
                  </div>
                </div>
                <div className='inline-flex items-center justify-center gap-2.5'>
                  <div className='text-center   font-medium  text-black'>
                    {username}
                  </div>
                </div>
                <div className='inline-flex items-center justify-center gap-2.5'>
                  <div className='text-center   font-medium  text-black'>
                    {firstName}
                  </div>
                </div>
                <div className='inline-flex items-center justify-center gap-2.5'>
                  <div className='text-center   font-medium  text-black'>
                    {lastName}
                  </div>
                </div>
                <div className='inline-flex items-center justify-center gap-2.5'>
                  <div className='text-center   font-medium  text-black'>
                    {email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-3 grid grid-flow-row items-center justify-center gap-2.5'>
          {/* <div className='flex h-fit flex-col items-center justify-center gap-2.5 bg-teal-500 px-20 py-4'>
            <div className='text-center font-semibold text-white'>
              {friendStatus? friendStatus.status : 'Add friend'}
            </div>
          </div> */}
          <ProfileAction user={user} />
        </div>
      </div>
    </>
  );
}
