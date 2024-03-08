import { CommentIcon, ThumbsDownIcon, ThumbsUpIcon } from '@/icons';

export default function PostItems() {
  return (
    // resoponsive flex container
    <div className=' flex flex-row text-base_dark max-sm:flex-col'>
      {/* Left Side */}
      <img src='' alt='' className='min-h-[30vh] flex-1 bg-slate-400' />

      {/* Right Side */}
      {/* resonsive */}
      <div className='relative flex w-[40%] flex-col gap-4 p-4 max-sm:w-[100%]'>
        <p className='text-[24px] font-semibold'>Title</p>
        <p className=' line-clamp-6 leading-5 '>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non eligendi
          officiis et illo, ipsum explicabo facilis voluptates veniam
          repudiandae illum porro numquam unde vitae eveniet consequuntur quasi
          consectetur inventore natus magni quia ab eum nobis. Optio quam omnis
          non commodi illo perferendis harum tenetur temporibus consequatur,
          maxime sed quis laboriosam aut quas repellendus autem obcaecati quos
          cumque sint unde, et eligendi ut id delectus! Iure quos animi
          praesentium earum sint dignissimos facilis aperiam quas iusto aliquid
          voluptate consectetur hic ea alias dolorum omnis cum rerum, reiciendis
          sit obcaecati provident! Asperiores quod fugit laboriosam? Laudantium
          atque voluptatibus id aperiam, quo provident?
        </p>

        {/* User Container */}
        <div className=' flex items-center justify-evenly gap-2.5 max-sm:justify-center'>
          {/* responsive */}
          <img src='' alt='' className='size-[80px] max-sm:size-12' />
          <div className='flex flex-col items-center gap-2.5'>
            <p className='line-clamp-1 font-semibold'>KenJi Takiya</p>
            <div className='flex gap-2.5'>
              <CommentIcon className={'size-5'} />
              {/* <ThumbsDownIcon className={'size-5'} /> */}
              <ThumbsUpIcon className={'size-5'} />
            </div>
          </div>
        </div>
        <p className='absolute bottom-0 right-0 text-[12px] text-base_dark text-opacity-45'>
          posted at 2 days ago..
        </p>
      </div>
    </div>
  );
}
