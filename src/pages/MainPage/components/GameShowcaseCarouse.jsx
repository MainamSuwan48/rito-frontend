import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import GameShowcaseCard from './GameShowcaseCard';


function GameShowcaseCarousel() {
  return (
    <Carousel className='max-w-screen m-2 flex items-center justify-center'>
      <CarouselContent>
        <CarouselItem className='basis-1/3'>
          <GameShowcaseCard />
        </CarouselItem>
        <CarouselItem className='basis-1/3'>
          <GameShowcaseCard />
        </CarouselItem>
        <CarouselItem className='basis-1/3'>
          <GameShowcaseCard />
        </CarouselItem>
        <CarouselItem className='basis-1/3'>
          <GameShowcaseCard />
        </CarouselItem>
        <CarouselItem className='basis-1/3'>
          <GameShowcaseCard />
        </CarouselItem>
        <CarouselItem className='basis-1/3'>
          <GameShowcaseCard />
        </CarouselItem>
        <CarouselItem className='basis-1/3'>
          <GameShowcaseCard />
        </CarouselItem>
        <CarouselItem className='basis-1/3'>
          <GameShowcaseCard />
        </CarouselItem>
        <CarouselItem className='basis-1/3'>
          <GameShowcaseCard />
        </CarouselItem>
        <CarouselItem className='basis-1/3'>
          <GameShowcaseCard />
        </CarouselItem>
      </CarouselContent>
    </Carousel>

    //       <div className='flex h-[350px] w-1/4 flex-col items-center justify-center gap-4 rounded-lg bg-black shadow-lg'></div>
    //       <div className='flex h-[350px] w-1/4 flex-col items-center justify-center gap-4 rounded-lg bg-black shadow-lg'></div>
    //    */}
  );
}

export default GameShowcaseCarousel;
