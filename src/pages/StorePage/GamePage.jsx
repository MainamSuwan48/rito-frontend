import GamePageDetailAccordion from '@/features/store/game-page/components/GamePageDetailAccordion';
import GamePageHero from '@/features/store/game-page/components/GamePageHero';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGameById } from '@/redux/slice/games-slice';
import { useParams } from 'react-router-dom';
import { clearCurrentGame } from '@/redux/slice/games-slice';
import { Skeleton } from '@/components/ui/skeleton';

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

  console.log(currentGame, 'currentGame in GamePage*****');

  return (
    <div
      style={{
        // backgroundImage: 'url(https://images5.alphacoders.com/872/872037.png)',
        backgroundPosition: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className='relative flex h-content max-w-[100vw] flex-col items-center justify-center overflow-auto'
    >
      <video
        className='-z-50'
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
        <source src='https://res.cloudinary.com/dhm6pitfd/video/upload/v1710154132/videoplayback_zkgecn.mp4?_s=vp-1.7.0' />
      </video>
      {currentGame ? (
        <div className='w-screen border-primary px-32 py-12'>
          <GamePageHero gameData={currentGame} />
          <div className='px-8'>
            <GamePageDetailAccordion gameData={currentGame} />
          </div>
        </div>
      ) : (
        <div className='gap 4 flex w-screen flex-col border-primary px-32 py-12'>
          <Skeleton className='m-4 h-[500px] w-full rounded-xl bg-base_dark bg-opacity-50' />
          <Skeleton className='m-4 h-[50px] w-full bg-base_dark bg-opacity-50' />
        </div>
      )}
    </div>
  );
}

export default GamePage;
