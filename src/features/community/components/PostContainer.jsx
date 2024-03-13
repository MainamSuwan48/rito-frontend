import CommunitySearchBar from './CommunitySearchBar';
import PostItems from './PostItems';
import mockData from './mockData.json';

export default function PostContainer() {
  return (
    <>
      {/* <CommunitySearchBar */}
      <div className=' flex h-auto w-full flex-col gap-6 py-6'>
        {mockData.map((post, index) => (
          <PostItems key={index} post={post} />
        ))}
      </div>
    </>
  );
}
