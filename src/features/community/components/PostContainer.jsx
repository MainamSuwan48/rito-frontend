import SearchBar from '@/features/community/components/SearchBar';
import PostItems from './PostItems';

export default function PostContainer() {
  return (
    <>
      <SearchBar />
      <div className=' flex flex-col gap-2.5 '>
        <PostItems />
        <PostItems />
      </div>
    </>
  );
}
