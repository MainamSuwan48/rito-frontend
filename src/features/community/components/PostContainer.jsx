
import CommunitySearchBar from './CommunitySearchBar';
import PostItems from './PostItems';

export default function PostContainer() {
  return (
    <>
      <CommunitySearchBar />
      <div className=' flex flex-col gap-2.5 '>
        <PostItems />
        <PostItems />
      </div>
    </>
  );
}
