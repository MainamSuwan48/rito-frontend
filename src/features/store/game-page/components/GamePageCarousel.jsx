import React from 'react';
import Slider from 'react-slick';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

function GamePageCarousel({ images }) {
  console.log(images, 'images**************************');
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className='w-full'>
      <Carousel>
        <CarouselContent className='h-[400px]'>
          {images.map((image) => (
            <CarouselItem key={image.id}>
              <img
                className='object-cover transition-all hover:scale-110'
                src={image.image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className='absolute right-2 border-2 border-none bg-transparent' />
        <CarouselPrevious className='absolute left-2 border-2 border-none bg-transparent' />
      </Carousel>
    </div>
  );
}

export default GamePageCarousel;
