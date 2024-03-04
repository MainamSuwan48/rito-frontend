export default function UserProfileContainer() {
  return (
    <>
      <div className='inline-flex h-fit w-full items-end justify-between gap-36'>
        <div className='flex items-center justify-center gap-6'>
          <img
            className='h-64 w-64'
            src='https://via.placeholder.com/256x256'
          />
          <div className='flex items-center justify-start gap-4'>
            <div className='inline-flex flex-col items-start justify-start gap-6'>
              <div className='flex flex-col items-start justify-center gap-4'>
                <div className='inline-flex items-start justify-center gap-6'>
                  <div className='text-center  text-2xl font-bold text-zinc-100'>
                    Super Mario
                  </div>
                </div>
                <div className='inline-flex items-center justify-start gap-2'>
                  <div className='flex items-center justify-center gap-2.5'>
                    <div className='text-center   font-normal  text-zinc-100'>
                      I’m mario, I love NYC
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-start justify-start gap-4'>
                <div className='inline-flex items-center justify-center gap-2.5'>
                  <div className='text-center   font-medium  text-zinc-100'>
                    USERID: 888980
                  </div>
                </div>
                <div className='inline-flex items-center justify-center gap-2.5'>
                  <div className='text-center   font-medium  text-zinc-100'>
                    mario1973
                  </div>
                </div>
                <div className='inline-flex items-center justify-center gap-2.5'>
                  <div className='text-center   font-medium  text-zinc-100'>
                    Firstname
                  </div>
                </div>
                <div className='inline-flex items-center justify-center gap-2.5'>
                  <div className='text-center   font-medium  text-zinc-100'>
                    Lastname
                  </div>
                </div>
                <div className='inline-flex items-center justify-center gap-2.5'>
                  <div className='text-center   font-medium  text-zinc-100'>
                    supermario@gg.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-flow-row items-center justify-center gap-2.5'>
          <div className='hit-fit flex flex-col items-center justify-center gap-2.5 bg-pink-500 px-20 py-4'>
            <div className='text-center   font-semibold text-white'>
              Save Profile
            </div>
          </div>
          <div className='flex h-fit flex-col items-center justify-center gap-2.5 bg-zinc-300 px-20 py-4'>
            <div className='text-center   font-semibold  text-white'>
              Pending Request
            </div>
          </div>
          <div className='hit-fit flex flex-col items-center justify-center gap-2.5 bg-teal-500 px-20 py-4'>
            <div className='text-center   font-semibold  text-white'>
              Add friend
            </div>
          </div>
          <div className='hit-fit flex flex-col items-center justify-center gap-2.5 bg-pink-500 px-20 py-4'>
            <div className='text-center   font-semibold  text-white'>
              Edit Profile
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
