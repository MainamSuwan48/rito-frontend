import { CommentIcon, ThumbsDownIcon, ThumbsUpIcon } from '@/icons';

export default function PostItems({ post }) {
  const {
    id,
    title,
    content,
    postType,
    user,
    game,
    createdAt,
    updatedAt,
    deletedAt,
    comments,
  } = post;
  return (
    // resoponsive flex container
    <div className=' flex flex-row text-base_dark max-sm:flex-col'>
      {/* Left Side */}
      {game.backgroundImageUrl ? (
        <img
          src={game.backgroundImageUrl}
          alt=''
          className='min-h-[30vh] flex-1 bg-slate-400'
        />
      ) : (
        <img
          src='https://via.placeholder.com/817x364'
          alt=''
          className='min-h-[30vh] flex-1 bg-slate-400'
        />
      )}

      {/* Right Side */}
      {/* resonsive */}
      <div className='relative flex w-[40%] flex-col gap-4 p-4 max-sm:w-[100%]'>
        <p className='text-[24px] font-semibold'>{title ? title : 'Title'}</p>
        <p className=' line-clamp-6 leading-5 '>
          {content ? content : 'content-text'}
        </p>

        {/* User Container */}
        <div className=' flex items-center justify-evenly gap-2.5 max-sm:justify-center'>
          {/* responsive */}
          <img
            src='https://via.placeholder.com/80x80'
            alt='user profile picture'
            className='size-[80px] max-sm:size-12'
          />
          <div className='flex flex-col items-center gap-2.5'>
            <p className='line-clamp-1 font-semibold'>{user.displayName}</p>
            <div className='flex gap-2.5'>
              <CommentIcon className={'size-5'} />
              {/* <ThumbsDownIcon className={'size-5'} /> */}
              <ThumbsUpIcon className={'size-5'} />
            </div>
          </div>
        </div>
        <p className='absolute bottom-0 right-0 text-[12px] text-base_dark text-opacity-45'>
          {createdAt ? createdAt : 'dd/mm/yy createdAt'}
        </p>
      </div>
    </div>
  );
}
