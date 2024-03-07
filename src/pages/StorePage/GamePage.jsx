import GamePageDetailAccordion from '@/features/store/game-page/components/GamePageDetailAccordion';
import GamePageHero from '@/features/store/game-page/components/GamePageHero';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGameById } from '@/redux/slice/games-slice';
import { useParams } from 'react-router-dom';
import { clearCurrentGame } from '@/redux/slice/games-slice';


{
  /* =============== < Data MockUp > =============== */
}

function GamePage() {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const { currentGame } = useSelector((state) => state.games);

  useEffect(() => {
    if (!currentGame || currentGame.id !== gameId) {
      dispatch(getGameById(gameId));
    }
    return () => {
      dispatch(clearCurrentGame());
    };
  }, [gameId]);

  return (
    <div className='flex h-content max-w-[100vw] flex-col justify-center overflow-auto bg-base-300'>
      {currentGame ? (
        <div className='w-screen border-primary px-32 py-12 text-[]'>
          <GamePageHero gameData={currentGame} />
          <div className='px-8'>
            <GamePageDetailAccordion gameData={currentGame} />
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default GamePage;
