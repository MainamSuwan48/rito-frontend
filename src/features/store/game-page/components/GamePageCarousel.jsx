import React from 'react';
import Slider from 'react-slick';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
function GamePageCarousel({ mainImage, images }) {
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
          <CarouselItem className='relative h-full w-full'>
            <img
              className='absolute h-full w-full object-cover object-center transition-all hover:scale-110'
              src={mainImage}
            />
          </CarouselItem>
          {images.map((image) => (
            <CarouselItem className='relative h-full w-full' key={image.id}>
              <img
                className='absolute w-full h-full object-cover object-center transition-all hover:scale-110'
                src={image.imageUrl}
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
