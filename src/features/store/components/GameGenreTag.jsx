import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function GameGenreTag({ children, bgImage}) {
  console.log(bgImage);
  return (
    <div className='flex h-[3rem] w-full items-center justify-center font-semibold text-black relative'>
    <LazyLoadImage
      alt={children}      
      src={bgImage} // use normal <img> attributes as props
      style={{
        position: 'absolute',
        effect: 'blur',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',             
      }}
    />
    <div className='transition-all flex w-full justify-center items-center bg-base_dark py-2 text-xl font-bold text-neutral z-10 bg-opacity-75 hover:text-primary active:text-primary_mute active:bg-opacity-35 select-none hover:w-1/2'>
      {children}
    </div>
  </div>
  );
}

export default GameGenreTag;