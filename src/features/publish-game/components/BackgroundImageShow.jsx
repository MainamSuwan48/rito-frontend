import React from 'react';

function BackgroundImageShow({
  initialSrc,
  backgroundImage,
  onDeleteBackgroundImage,
  backgroundImageEl,
}) {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl'>Background Image</h1>
      {initialSrc || backgroundImage ? (
        <div className='relative'>
          <img
            className='aspect-[2/1] w-full object-cover'
            src={initialSrc || URL.createObjectURL(backgroundImage)}
          />
          <button
            className='absolute right-1 top-0.5 z-50 h-6 w-6 rounded-full bg-base_dark text-white'
            onClick={(e) => {
              e.stopPropagation();
              onDeleteBackgroundImage();
              backgroundImageEl.current.value = '';
            }}
            type='button'
          >
            &#10005;
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default BackgroundImageShow;
