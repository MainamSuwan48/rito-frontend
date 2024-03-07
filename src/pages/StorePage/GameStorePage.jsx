import GameCardStrip from '@/features/store/components/GameCardStrip';
import SearchBar from '@/features/store/components/SearchBar';
import SideBar from '@/features/store/components/SideBar';
import { useSelector, useDispatch } from 'react-redux';
import { getGames } from '@/redux/slice/games-slice';

import { useEffect, lazy, Suspense } from 'react';
import GameStoreSorter from '@/features/store/components/GameStoreSorter';

const GameCard = lazy(() => import('@/features/store/components/GameCard'));

export default function GameStorePage() {
  const dispatch = useDispatch();
  const { games, loadingCurrentGame } = useSelector(
    (state) => state.games.games
  );
  const test = () => {};
  useEffect(() => {
    if (!games) {
      dispatch(getGames());
    }
  }, [games]);
  return loadingCurrentGame ? null : (
    <div onClick={test} className='relative flex w-full overflow-auto'>
      <SideBar />
      <div className='relative flex w-store_search_bar flex-col gap-4'>
        <div className='flex'>
          <SearchBar />
          <GameStoreSorter />
        </div>
        <Suspense
          fallback={
            <div className='flex h-game_store w-full items-center justify-center'>
              <span className='loading loading-spinner loading-lg text-9xl'></span>
            </div>
          }
        >
          <div className='grid h-game_store grid-cols-1 items-start gap-6 self-center justify-self-center overflow-auto pb-6 lg:grid-cols-2 2xl:grid-cols-3'>
            {games &&
              games.map((game) => <GameCard key={game.id} gameData={game} />)}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
