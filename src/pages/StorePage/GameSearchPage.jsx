import SearchBar from '@/features/store/components/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearSearch,
  getMoreSearchGames,
  incrementSearchPage,
} from '@/redux/slice/games-slice';
import { useEffect, lazy, Suspense } from 'react';
import GameStoreSorter from '@/features/store/components/GameStoreSorter';
import { ChevronDownIcon } from '@/icons';
import { useState } from 'react';

const GameCardStrip = lazy(
  () => import('@/features/store/components/GameCardStrip')
);

export default function GameSearchPage() {
  const [gameSearchQuery, setGameSearchQuery] = useState('');
  const dispatch = useDispatch();
  const {
    searchedGames,
    loadingSearchedGames,
    searchPage,
    moreSearchedGamesLoading,
  } = useSelector((state) => state.games);

  useEffect(() => {
    return () => {
      dispatch(clearSearch());
      
    };
  }, []);

  useEffect(() => {
    if (searchedGames.length === 0) {
      return;
    }
    dispatch(getMoreSearchGames({ query: gameSearchQuery, page: searchPage }));
  }, [searchPage]);

  return (
    <div className='relative flex h-content w-full items-baseline justify-center overflow-auto'>
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
      <div className='min-h-content relative flex w-store_search_bar flex-col gap-4 overflow-auto'>
        <div className='flex'>
          <SearchBar
            gameSearchQuery={gameSearchQuery}
            setGameSearchQuery={setGameSearchQuery}
          />
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
                Search for your games here
              </h1>
            )}
            {searchedGames &&
              searchedGames.map((game) => (
                <GameCardStrip key={game.id} gameData={game} />
              ))}

            {searchedGames.length !== 0 && (
              <div className='col-span-3 flex items-center justify-center gap-2 rounded-lg p-2 text-center font-babas text-3xl transition-all hover:scale-110 hover:text-primary active:scale-100'>
                {moreSearchedGamesLoading ? (
                  <span className='loading loading-ring loading-lg'></span>
                ) : (
                  <div
                    onClick={() => dispatch(incrementSearchPage())}
                    className='flex items-center justify-center gap-2 rounded-lg p-2 text-center font-babas text-3xl'
                  >
                    <p>VIEW MORE</p>
                    <ChevronDownIcon className='h-6 w-6 animate-bounce text-primary' />
                  </div>
                )}
              </div>
            )}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
