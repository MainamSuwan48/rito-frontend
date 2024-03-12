import CommunitySearchBar from './CommunitySearchBar';
import PostItems from './PostItems';
import mockData from './mockData.json';

export default function PostContainer() {
  return (
    <>
      {/* <CommunitySearchBar */}
      <div className=' flex flex-col gap-2.5 '>
        {mockData.map((post, index) => (
          <PostItems key={index} post={post} />
        ))}
      </div>
    </>
  );
}
