import React from 'react';

function ScreenshotsShow({
  screenshot,
  index,
  screenshotsEl,
  onDeleteScreenshots,
}) {
  return (
    <div className='relative'>
      <img
        className='aspect-[2/1] w-full object-cover'
        src={screenshot.imageUrl || URL.createObjectURL(screenshot)}
      />
      <button
        className='absolute right-1 top-0.5 z-50 h-6 w-6 rounded-full bg-base_dark text-white'
        onClick={(e) => {
          e.stopPropagation();
          if (screenshot.id) {
            onDeleteScreenshots(index, screenshot.id);
          } else {
            onDeleteScreenshots(index);
          }
          screenshotsEl.current.value = '';
        }}
        type='button'
      >
        &#10005;
      </button>
    </div>
  );
}

export default ScreenshotsShow;
