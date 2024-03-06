import GameCardStrip from '@/features/store/components/GameCardStrip';
import SearchBar from '@/features/store/components/SearchBar';
import SideBar from '@/features/store/components/SideBar';
import { useSelector, useDispatch } from 'react-redux';
import { getGames } from '@/redux/slice/games-slice';
import { useEffect, lazy, Suspense } from 'react';

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
        <SearchBar />
        <Suspense
          fallback={
            <div className='flex h-game_store w-full items-center justify-center'>
              <span className='loading loading-spinner loading-lg text-9xl'></span>
            </div>
          }
        >
          <div className='flex h-game_store w-full flex-wrap items-start justify-center gap-4 overflow-auto'>
            {games &&
              games.map((game) => <GameCard key={game.id} gameData={game} />)}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
