import React from 'react';

function UserCard({user}) {

  const addFriend =() =>{console.log("aaa")}
  return (
    <div className='flex-shrink-0 h-32 flex gap-2 border-2 rounded-md bg-base-300 p-2 transition-all hover:border-primary'>
      <div
      className='border border-base_dark rounded-md transition-all hover:border-primary '
      >
        <img
          className='h-24 w-24 rounded-md bg-base-300'
          src={user.profileImageUrl||'https://rerollcdn.com/STARRAIL/Characters/Full/1001.png'}
        />
      </div>
      <div className='flex flex-col justify-center gap-2'>
        <div className='text-lg font-semibold  text-base_dark'>{user.displayName}</div>
        <button 
          className='rounded-md border border-base-100 bg-base_dark p-2 text-neutral transition-all hover:bg-primary hover:text-black active:bg-primary_mute'
          onClick={addFriend}
        >
          Add Friend
        </button>
      </div>
    </div>
  );
}

export default UserCard;
