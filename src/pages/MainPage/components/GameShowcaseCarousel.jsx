import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import GameShowcaseCard from './GameShowcaseCard';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomGames } from '@/redux/slice/games-slice';
import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function GameShowcaseCarousel() {
  const dispatch = useDispatch();
  const { randomGames, loadingRandomGames } = useSelector(
    (state) => state.games
  );
  useEffect(() => {
    if (randomGames.length === 0) {
      dispatch(getRandomGames());
    }
  }, [randomGames]);
  return loadingRandomGames ? (
    <Skeleton className='m-2 h-[350px] w-full rounded-lg' />
  ) : (
    <Carousel
      opts={{       
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className='max-w-screen m-2 flex items-center justify-center'
    >
      <CarouselContent>    
        {randomGames.map((game) => (
          <CarouselItem className='md:basis-1/2 lg:basis-1/3' key={game.id}>
            <GameShowcaseCard gameData={game} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default GameShowcaseCarousel;
