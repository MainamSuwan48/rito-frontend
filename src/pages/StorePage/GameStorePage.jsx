import SearchBar from '@/features/store/components/SearchBar';
import SideBar from '@/features/store/components/SideBar';
import { useSelector, useDispatch } from 'react-redux';
import { getGames } from '@/redux/slice/games-slice';
import { useEffect, useState } from 'react'; // Remove lazy and Suspense
import GameCard from '@/features/store/components/GameCard'; // Import GameCard directly
import GameStoreSorter from '@/features/store/components/GameStoreSorter';
import { Skeleton } from '@/components/ui/skeleton';

export default function GameStorePage() {
  const dispatch = useDispatch();
  const { allGames, loading } = useSelector(
    (state) => state.games
  );

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (allGames.length === 0) {
      dispatch(getGames(page))        
    } 
  }, [allGames]);

  return  (
    <div className='relative flex h-content w-full overflow-auto'>
      <video
        className='-z-50'
        autoPlay
        loop
        muted
        style={{
          opacity: '0.8',
          position: 'fixed',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src='https://res.cloudinary.com/dhm6pitfd/video/upload/v1710177433/videoplayback_1_nmtvjr.mp4' />
      </video>
      <SideBar />
      <div className='relative flex w-store_search_bar flex-col gap-4 overflow-auto'>
        <div className='flex'>
          <SearchBar />
          <GameStoreSorter />
        </div>
        {loading ? (
          <div className='grid h-game_store grid-cols-1 items-start gap-6 self-center justify-self-center overflow-auto pb-6 lg:grid-cols-2 2xl:grid-cols-3'>
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
            <Skeleton className='h-[425px] w-[416px]' />
          </div>
        ) : (
          <div className='grid h-game_store grid-cols-1 items-start gap-6 self-center justify-self-center overflow-auto pb-6 lg:grid-cols-2 2xl:grid-cols-3'>
            {allGames &&
              allGames.map((game, index) => (
                <GameCard key={index} gameData={game} /> // Remove Suspense and LazyGameCard
              ))}
            <div className='border-base col-span-3 flex w-full animate-pulse items-center justify-center gap-2 rounded-lg border p-2 text-center font-babas text-3xl backdrop-blur-lg'>
              LOADING
              <span className='loading loading-spinner loading-lg'></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
