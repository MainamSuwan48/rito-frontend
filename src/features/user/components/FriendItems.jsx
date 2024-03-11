import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function FriendItems({friend}) {
  const navigate = useNavigate()
  const handleClick = ()=>{navigate(`/user/${friend.id}`)}
  return (
    <>
      <div className='inline-flex h-fit w-full items-center justify-between gap-24 border-b border-black bg-slate-400'>
        <div className='flex items-center justify-center gap-4'>
          <div className='flex items-center justify-center gap-2.5 bg-zinc-100 p-4 h-full w-20'>
            <div 
              className='text-center text-4xl font-semibold text-black cursor-pointer'
              onClick={handleClick}
            >
              <Avatar className='h-12 w-12'>
                <AvatarImage src={friend?.profileImageUrl} />
                <AvatarFallback className='bg-primary'>
                  {friend?.displayName[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className='inline-flex flex-col items-start justify-start gap-1.5'>
            <div className='text-center  text-base font-medium leading-snug text-black'>
              {friend.displayName}
            </div>
            <div className='text-center  text-xs font-normal leading-snug text-zinc-700'>
              {friend.username}
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


