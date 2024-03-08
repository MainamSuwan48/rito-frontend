import { EditForm } from "@/features/auth/components/EditForm";
import { EditProfilePicture } from "@/features/auth/components/EditProfilePicture";


export default function MyProfileContainer({user}) {
  const {description,username,displayName,id,
    profileImageUrl,firstName,lastName,email} = user

  return (
    <>
      <div className='inline-flex h-fit w-full items-start justify-between gap-36'>
        <div className='flex items-center justify-center gap-6'>
          <div className="flex flex-col gap-4">
            <img
              className='h-64 w-64'
              src={profileImageUrl || 'https://via.placeholder.com/256x256'}
            />
            <EditProfilePicture user={user}/>

          </div>
          <div className='flex items-center justify-start gap-4'>
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
                      {description || "description"}
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
        <div className='grid grid-flow-row items-center justify-center gap-2.5'>
          {/* <div className='h-fit flex flex-col items-center justify-center gap-2.5 bg-pink-500 px-20 py-4'>
            <div className='text-center font-semibold text-white'>
              Save Profile
            </div>
          </div> */}
          <div className='flex h-fit flex-col items-center justify-center gap-2.5 bg-zinc-300 px-20 py-4'>
            <div className='text-center font-semibold text-white'>
              Pending Request
            </div>
          </div>
          {/* <div className='h-fit flex flex-col items-center justify-center gap-2.5 bg-teal-500 px-20 py-4'>
            <div className='text-center font-semibold text-white'>
              Add friend
            </div>
          </div> */}
            <EditForm user={user}/>
        </div>
      </div>
    </>
  );
}
