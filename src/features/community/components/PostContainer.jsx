import { useState } from 'react';
import PostItems from './PostItems';
import mockData from './mockData.json';
import SearchBar from './SearchBar';
import CreatePostFormModal from './CreatePostFormModal';
import CreatePostBtn from './CreatePostBtn';
import CommunitySearchBar from './CommunitySearchBar';

export default function PostContainer() {
  const [input, setInput] = useState('');

  const handleOnChangeInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      {/* <CommunitySearchBar /> */}
      <div className=' flex h-auto w-full flex-col gap-4 py-3'>
        <div className='flex items-center gap-4'>
          <SearchBar type='community' />
          {/* <button
            className='flex h-12 w-[30%] items-center justify-center bg-primary text-white duration-300 hover:bg-secondary'
            onClick={handleOpenModal}
          >
            Create Post
          </button> */}
          <CreatePostBtn />
        </div>
        <div className='flex flex-col gap-6'>
          {mockData.map((post, index) => (
            <PostItems key={index} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
