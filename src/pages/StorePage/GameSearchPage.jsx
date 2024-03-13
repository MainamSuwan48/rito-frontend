import SearchBar from '@/features/store/components/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { searchGames, clearSearch } from '@/redux/slice/games-slice';

import { useEffect, lazy, Suspense } from 'react';
import GameStoreSorter from '@/features/store/components/GameStoreSorter';

const GameCardStrip = lazy(
  () => import('@/features/store/components/GameCardStrip')
);

export default function GameSearchPage() {
  const dispatch = useDispatch();
  const { searchedGames, loadingSearchedGames } = useSelector(
    (state) => state.games
  );

  useEffect(() => {
    return () => {
      dispatch(clearSearch());
    };
  }, []);

  return (
    <div className='relative flex w-full items-center justify-center overflow-auto'>
      <video
        className='inset-0 -z-50'
        autoPlay
        loop
        muted
        style={{
          opacity: '0.6',
          position: 'fixed',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src='https://res.cloudinary.com/dhm6pitfd/video/upload/v1710171222/Moving_Gradient_Background_rnv9iv.mp4' />
      </video>
      <div className='relative flex w-store_search_bar flex-col gap-4'>
        <div className='flex'>
          <SearchBar />
          <GameStoreSorter type='search' />
        </div>
        <Suspense
          fallback={
            <div className='flex h-game_store w-full items-center justify-center'>
              <span className='loading loading-spinner loading-lg text-9xl'></span>
            </div>
          }
        >
          <div className='flex flex-col'>
            {searchedGames.length === 0 && (
              <h1 className='flex h-16 animate-pulse items-center justify-center text-center text-4xl'>
                Please Search your game
              </h1>
            )}
            {searchedGames &&
              searchedGames.map((game) => (
                <GameCardStrip key={game.id} gameData={game} />
              ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
