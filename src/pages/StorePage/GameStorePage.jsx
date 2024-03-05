import GameCardStrip from '@/features/store/components/GameCardStrip';
import SearchBar from '@/features/store/components/SearchBar';
import SideBar from '@/features/store/components/SideBar';

export default function GameStorePage() {
  return (
    <div className=' grid grid-cols-[2fr_8fr] gap-4 px-6'>
      <SideBar />
      <div className='flex flex-col gap-4'>
        <SearchBar />
        {/* <GameCardStrip /> */}
      </div>
    </div>
  );
}
