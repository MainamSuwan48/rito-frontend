import SearchBar from '@/features/store/components/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { searchGames } from '@/redux/slice/games-slice';

import { useEffect, lazy, Suspense } from 'react';

const GameCardStrip = lazy(
  () => import('@/features/store/components/GameCardStrip')
);

export default function GameSearchPage() {
  const dispatch = useDispatch();
  const { searchedGames, loadingSearchedGames } = useSelector(
    (state) => state.games
  );



  return (
    <div     
      className='relative flex w-full items-center justify-center overflow-auto'
    >
      <div className='relative flex w-store_search_bar flex-col gap-4'>
        <SearchBar />
        <Suspense
          fallback={
            <div className='flex h-game_store w-full items-center justify-center'>
              <span className='loading loading-spinner loading-lg text-9xl'></span>
            </div>
          }
        >
          <div className='flex flex-col'>
            {searchedGames.length === 0 && (
              <h1 className='flex justify-center items-center animate-pulse bg-base-300 h-16 text-center text-4xl'>Please Search your game</h1>
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
