import React from 'react';
import Slider from 'react-slick';

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
    <div className='slider-container mx-8 w-full'>
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <div 
              key={image.id}
            className='h-96 overflow-hidden rounded-xl'>
              <img
                className='transition-all hover:scale-110'
                src={image.image}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default GamePageCarousel;
