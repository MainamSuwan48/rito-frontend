import { CommentIcon, ThumbsDownIcon, ThumbsUpIcon } from '@/icons';
import ReactTimeAgo from 'react-time-ago';

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
    likes,
  } = post;
  return (
    <div className='flex flex-col shadow-md'>
      <div className='glass flex flex-row text-base_dark max-sm:flex-col'>
        {/* Left Side */}
        {game.backgroundImageUrl ? (
          <img
            src={game.backgroundImageUrl}
            alt=''
            className='max-h-[40vh] flex-1 bg-slate-400 object-cover object-top'
          />
        ) : (
          <img
            src='https://via.placeholder.com/800x342'
            alt=''
            className='min-h-[30vh] flex-1 bg-slate-400'
          />
        )}

        {/* Right Side */}
        {/* resonsive */}
        <div className='relative flex w-[40%] flex-col justify-between p-4 max-sm:w-[100%] max-sm:gap-4'>
          <div className='flex flex-col gap-4'>
            <p className='text-[24px] font-semibold'>
              {title ? title : 'Title'}
            </p>
            <p className='line-clamp-6 leading-5 '>
              {content ? content : 'content-text'}
            </p>
          </div>

          {/* User Container */}
          <div className='flex items-center justify-evenly gap-2.5 max-sm:justify-center'>
            {/* responsive */}
            {user.profileImageUrl ? (
              <img
                src={`${user.profileImageUrl}`}
                alt='user.profileImageUrl'
                className='size-[80px] max-sm:size-12'
              />
            ) : (
              <img
                src='https://via.placeholder.com/80x80'
                alt='user profile picture'
                className='size-[80px] max-sm:size-12'
              />
            )}
            <div className='flex flex-col items-center gap-2.5'>
              <p className='line-clamp-1 font-semibold'>{user.displayName}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between divide-x p-2'>
        <div className='flex flex-1 justify-between pr-6'>
          <p className=''>{game.name}</p>
          <div className='flex gap-2.5'>
            <div className='flex items-center gap-1'>
              <ThumbsUpIcon className={'size-5'} />
              <span className='text-[12px] text-base_dark text-opacity-45'>
                {likes}
              </span>
            </div>
            <div className='flex items-center gap-1'>
              <CommentIcon className={'size-5'} />
              <span className='text-[12px] text-base_dark text-opacity-45'>
                {comments.length}
              </span>
            </div>
            {/* <ThumbsDownIcon className={'size-5'} /> */}
          </div>
        </div>
        <p className=' text-[12px] text-base_dark text-opacity-45'>
          {createdAt ? (
            <p>
              posted at{' '}
              <ReactTimeAgo date={new Date(createdAt)} locale='en-US' />
            </p>
          ) : (
            'dd/mm/yy createdAt'
          )}
        </p>
      </div>
    </div>
  );
}
