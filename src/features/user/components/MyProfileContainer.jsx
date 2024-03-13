import { EditForm } from '@/features/auth/components/EditForm';
import { EditProfilePicture } from '@/features/auth/components/EditProfilePicture';
import AddFriendsModal from '@/features/community/components/AddFriendsModal';
import PendingRequestModal from '@/features/community/components/PendingRequestModal';
import { clearAuthUserImages } from '@/redux/slice/auth-slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function MyProfileContainer({ user }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
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

  const {authUserImage,loadingImage} = useSelector((state)=> state.auth)

  
  return (
    <>
      <div className='inline-flex h-fit w-full items-start justify-between gap-36'>
        <div className='flex items-center justify-center gap-10'>
          <div className='flex flex-col gap-4 bg-white bg-opacity-45 p-4 mt-2'>
            {loadingImage
            ?
            <span className='loading loading-ring  h-64 w-64'></span>
            :
            <>
              <img
              className='h-64 w-64'
              src={authUserImage ? authUserImage : (profileImageUrl || 'https://via.placeholder.com/256x256')}
              />
              <EditProfilePicture user={user} />
            </>
            }
          </div>
          <div className='flex items-center w-[350px] justify-start gap-4  bg-opacity-50 bg-white p-4'>
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
        <div className='grid grid-flow-row items-center justify-center gap-2.5 mt-3'>
          <AddFriendsModal userID={user.id}/>
          <PendingRequestModal/>
          <EditForm user={user} />
          <button 
            className='h-fit gap-2.5 rounded-none bg-zinc-500 transition-all hover:bg-neutral hover:text-base_dark border-neutral px-20 py-4 text-center text-base font-semibold text-white'
            onClick={()=>navigate('/create/game')}
          >
            Create Game
          </button>

        </div>
      </div>
    </>
  );
}
