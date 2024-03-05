import GameCardStrip from '@/features/store/components/GameCardStrip';
import SearchBar from '@/features/store/components/SearchBar';
import SideBar from '@/features/store/components/SideBar';
import { useSelector, useDispatch } from 'react-redux';
import { getGames } from '@/redux/slice/games-slice';
import { useEffect } from 'react';
import GameCard from '@/features/store/components/GameCard';

export default function GameStorePage() {
  const dispatch = useDispatch();
  const { games, loading } = useSelector((state) => state.games.games);
  const test = () => {
    console.log(games);
  };
  useEffect(() => {
    if (!games) {
      dispatch(getGames());
    }
  }, [games]);
  return loading ? null : (
    <div onClick={test} className='relative flex w-screen'>
      <SideBar />
      <div className='w-store_search_bar relative flex flex-col gap-4'>
        <SearchBar />
        <div className='flex w-full overflow-auto flex-wrap items-start justify-center gap-4'>
          {games &&
            games.map((game) => <GameCard key={game.id} gameData={game} />)}
        </div>
      </div>
    </div>
  );
}
