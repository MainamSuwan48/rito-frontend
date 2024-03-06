import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useDispatch } from 'react-redux';
import { getGamesByGenreId, getGames } from '@/redux/slice/games-slice';

function GameGenreTag({ children, bgImage, id, type = '' }) {
  const dispatch = useDispatch();

  if (type == 'all') {
    return (
      <div
        onClick={() => dispatch(getGames())}
        className='relative flex h-[3rem] w-full items-center justify-center font-semibold text-black'
      >
        <LazyLoadImage
          alt={children}
          src='https://wallpaperbat.com/img/481930-xbox-games-wallpaper.jpg' // use normal <img> attributes as props
          style={{
            position: 'absolute',
            effect: 'blur',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div className='z-10 flex w-full select-none items-center justify-center bg-base_dark bg-opacity-75 py-2 text-xl font-bold text-neutral transition-all hover:w-1/2 hover:text-primary active:bg-opacity-35 active:text-primary_mute'>
          ALL
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => dispatch(getGamesByGenreId(id))}
      className='relative flex h-[3rem] w-full items-center justify-center font-semibold text-black'
    >
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
      <div className='z-10 flex w-full select-none items-center justify-center bg-base_dark bg-opacity-75 py-2 text-xl font-bold text-neutral transition-all hover:w-1/2 hover:text-primary active:bg-opacity-35 active:text-primary_mute'>
        {children}
      </div>
    </div>
  );
}

export default GameGenreTag;
