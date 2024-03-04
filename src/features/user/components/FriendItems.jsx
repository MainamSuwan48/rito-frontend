export default function FriendItems() {
  return (
    <>
      <div className='inline-flex h-fit w-full items-center justify-between gap-24 border-b border-black'>
        <div className='flex items-center justify-center gap-4'>
          <div className='flex items-center justify-center gap-2.5 bg-zinc-100 p-4'>
            <div className='text-center text-4xl font-semibold text-black'>
              P
            </div>
          </div>
          <div className='inline-flex flex-col items-start justify-start gap-1.5'>
            <div className='text-center  text-base font-medium leading-snug text-black'>
              Mr.X
            </div>
            <div className='text-center  text-xs font-normal leading-snug text-zinc-700'>
              Pending Request
            </div>
          </div>
        </div>
        <div className='flex h-6 items-center justify-center gap-2'>
          <div className='relative h-6 w-6' />
          <div className='relative h-6 w-6' />
        </div>
      </div>
    </>
  );
}
