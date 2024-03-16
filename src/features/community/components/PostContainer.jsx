import { useState } from 'react';
import PostItems from './PostItems';
import mockData from './mockData.json';
import SearchBar from './SearchBar';
import CreatePostFormModal from './CreatePostFormModal';
import CreatePostBtn from './CreatePostBtn';
import CommunitySearchBar from './CommunitySearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllPosts } from '@/redux/slice/community-slice';

export default function PostContainer() {
  const dispatch = useDispatch();
  const { post, posts } = useSelector((state) => state.community);
  console.log(posts);

  const [input, setInput] = useState('');

  useEffect(() => {
    if (!posts.length) {
      dispatch(getAllPosts());
    }
  }, [posts]);

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
          {posts.map((post, index) => (
            <PostItems key={index} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
