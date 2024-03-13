import { CommentIcon, ThumbsDownIcon, ThumbsUpIcon } from '@/icons';
import { AccordionContent } from '@radix-ui/react-accordion';
import { AccordionTrigger } from '@radix-ui/react-accordion';
import { Accordion, AccordionItem } from '@radix-ui/react-accordion';
import { useState } from 'react';
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
    imgUrl,
  } = post;

  const [isOpenComment, setIsOpenComment] = useState(false);
  const [isLike, setIsLike] = useState(likes);

  const handleOnClickOpenComment = () => {
    setIsOpenComment(!isOpenComment);
  };

  const handleOnClickLike = () => {
    setIsLike(isLike + 1);
  };

  const setStylePostTypeTag = (postType) => {
    if (postType === 'SCREENSHOT') {
      return 'bg-green-600';
    } else if (postType === 'DISCUSSION') {
      return 'bg-blue-400';
    } else if (postType === 'FANART') {
      return 'bg-yellow-300';
    } else {
      return 'bg-gray-400';
    }
  };

  const setStyleContainer = (imgUrl, content) => {
    if (imgUrl && !content) {
      return 'flex flex-row gap-4 items-center';
    } else {
      return 'flex flex-row justify-end flex-1 max-sm:flex-col max-sm:gap-4 gap-4';
    }
  };
  return (
    <div className='flex flex-col shadow-md'>
      <div className={`glass flex flex-row text-base_dark max-sm:flex-col`}>
        {/* Left Side */}
        {imgUrl ? (
          <img
            src={imgUrl}
            alt='user uploaded image'
            className='max-h-[40vh] flex-1 bg-slate-400 object-cover object-top'
          />
        ) : null}

        {/* Right Side */}
        {/* resonsive */}
        <div
          className={`relative flex w-[40%]  ${setStyleContainer(game.backgroundImageUrl, content)} p-4 max-sm:w-[100%] max-sm:gap-4`}
        >
          <div className='flex flex-col justify-center gap-4'>
            <p className='text-[24px] font-semibold'>{title ? title : null}</p>
            <p className='line-clamp-6 leading-5 '>
              {content ? content : null}
            </p>
          </div>

          {/* User Container */}
          <div className='flex flex-shrink-0 items-center justify-evenly gap-2.5 max-sm:justify-center'>
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
        <div className='item-center flex flex-1  justify-between pr-6'>
          <div className='flex flex-shrink-0 items-center gap-2.5'>
            <p>{game.name}</p>
            <p
              className={`p-1 text-[12px] text-white ${setStylePostTypeTag(postType)}`}
            >
              {postType}
            </p>
          </div>
          <div className='flex gap-2.5'>
            <button
              className='flex items-center gap-1'
              onClick={handleOnClickLike}
            >
              <ThumbsUpIcon className='hove:fill-blue-500 size-5' />
              <span className='text-[12px] text-base_dark text-opacity-45'>
                {isLike}
              </span>
            </button>
            <button
              className='flex items-center gap-1'
              onClick={handleOnClickOpenComment}
            >
              <CommentIcon className='size-5 ' />
              <span className='text-[12px] text-base_dark text-opacity-45'>
                {comments.length}
              </span>
            </button>
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
      {isOpenComment ? (
        <div>
          {comments.map((comment) => {
            return (
              <div key={comment.id} className='flex items-center gap-4 p-4'>
                <div className='flex flex-shrink-0 items-center gap-2'>
                  <img
                    src={comment.user.profileImageUrl}
                    alt='user profile'
                    className='size-12'
                  />
                  <div className=' font-bold'>{comment.user.displayName}</div>
                </div>
                <div>{comment.content}</div>
              </div>
            );
          })}
          <div className='flex p-4'>
            <input
              type='text'
              className='input-bordered w-full border p-1.5 text-black'
              placeholder='write your comments here...'
            />
            <button
              type='submit'
              className='text-md flex h-[2rem] items-center justify-center bg-primary p-5 font-semibold text-neutral transition-all hover:bg-secondary_mute active:scale-95'
            >
              comment
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
