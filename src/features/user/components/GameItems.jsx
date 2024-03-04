export default function GameItems() {
  return (
    <>
      <div className='inline-flex h-fit w-full items-center justify-between bg-zinc-100 pr-4 outline outline-black'>
        <div className='inline-flex flex-col items-start justify-start gap-2.5'>
          <img className='h-20 w-72' src='https://via.placeholder.com/286x85' />
        </div>
        <div className='inline-flex flex-col items-start justify-center gap-2.5'>
          <div className='text-center  text-xl font-bold leading-normal text-black'>
            Mario
          </div>
          <div className='inline-flex items-start justify-start gap-2'>
            <div className='flex items-center justify-end gap-2.5 bg-white px-4 py-1.5'>
              <div className='text-center  text-sm font-normal leading-normal text-black'>
                kids
              </div>
            </div>
            <div className='flex items-center justify-center gap-2.5 bg-white px-4 py-1.5'>
              <div className='text-center  text-sm font-normal leading-normal text-black'>
                open world
              </div>
            </div>
            <div className='flex items-center justify-center gap-2.5 bg-white px-4 py-1.5'>
              <div className='text-center  text-sm font-normal leading-normal text-black'>
                creativity
              </div>
            </div>
          </div>
        </div>
        <div className='inline-flex flex-col items-end justify-start gap-8'>
          <div className='text-center  text-sm font-normal leading-normal text-zinc-700'>
            Purchased on 2 Feb. 2024
          </div>
          <div className='inline-flex items-start justify-start'>
            <div className='relative h-6 w-6' />
            <div className='relative h-6 w-6'>
              <div className='absolute left-0 top-0 h-6 w-6'></div>
            </div>
            <div className='relative h-6 w-6' />
          </div>
        </div>
      </div>
    </>
  );
}
