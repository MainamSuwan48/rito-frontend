import SearchBar from '@/features/store/components/SearchBar';
import SideBar from '@/features/store/components/SideBar';
import { useSelector, useDispatch } from 'react-redux';
import { getGames } from '@/redux/slice/games-slice';
import { useEffect, useState, lazy, Suspense } from 'react'; // Import lazy and Suspense
import GameStoreSorter from '@/features/store/components/GameStoreSorter';
import { Skeleton } from '@/components/ui/skeleton';

const LazyGameCard = lazy(() => import('@/features/store/components/GameCard')); // Lazy load GameCard

export default function GameStorePage() {
  const dispatch = useDispatch();
  const { games, loadingCurrentGame } = useSelector(
    (state) => state.games.games
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!games) {
      dispatch(getGames())
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [games]);

  return loadingCurrentGame ? null : (
    <div className='relative flex w-full overflow-auto'>
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
      <div className='relative flex w-store_search_bar flex-col gap-4'>
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
            {games &&
              games.map((game) => (
                <Suspense fallback={<Skeleton className='h-[425px] w-[416px]' />}>
                  <LazyGameCard key={game.id} gameData={game} />
                </Suspense>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
