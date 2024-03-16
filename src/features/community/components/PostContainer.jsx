import { useState } from 'react';
import CommunitySearchBar from './CommunitySearchBar';
import PostItems from './PostItems';
import mockData from './mockData.json';
import SearchBar from './SearchBar';

export default function PostContainer() {
  const [input, setInput] = useState('');

  const handleOnChangeInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      {/* <CommunitySearchBar */}
      {/* <form className='flex w-full'>
        <input
          type='text'
          name='content'
          value={input.content}
          className='input-bordered w-full border p-1.5 text-black'
          placeholder='write your comments here...'
          onChange={handleOnChangeInput}
        />
        <button
          type='submit'
          className='text-md flex h-[2rem] items-center justify-center bg-primary p-5 font-semibold text-neutral transition-all hover:bg-secondary_mute active:scale-95'
        >
          post
        </button>
      </form> */}
      <SearchBar type='community' />
      <div className=' flex h-auto w-full flex-col gap-6 py-3'>
        {mockData.map((post, index) => (
          <PostItems key={index} post={post} />
        ))}
      </div>
    </>
  );
}
