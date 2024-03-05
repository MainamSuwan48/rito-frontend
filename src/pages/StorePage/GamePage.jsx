import GamePageDetailAccordion from '@/features/store/game-page/components/GamePageDetailAccordion';
import GamePageHero from '@/features/store/game-page/components/GamePageHero';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGameById } from '@/redux/slice/games-slice';
import { useParams } from 'react-router-dom';
import GameCardStrip from '@/features/store/components/GameCardStrip';
import GameCard from '@/features/store/components/GameCard';

{
  /* =============== < Data MockUp > =============== */
}


function GamePage() {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const { currentGame } = useSelector((state) => state.games);

  useEffect(() => {
    if (!currentGame) {
      dispatch(getGameById(gameId));
    }
  }, [currentGame]);

  return (
    <div className='flex h-screen w-screen flex-col justify-center overflow-auto bg-base_dark'>
      {currentGame ? (
        <div className='border-primary bg-base_dark px-32 py-12 text-[]'>
          <GamePageHero gameData={currentGame} />

          <div className='px-8'>
            <GamePageDetailAccordion gameData={currentGame} />
          </div>
          {/* //DEV */}
          <GameCardStrip gameData={currentGame}/>
          <GameCard gameData={currentGame}/>
       </div>    
      
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default GamePage;
