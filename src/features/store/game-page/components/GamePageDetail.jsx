import React from 'react';
import GameTag from './GameTag';

function GamePageDetail({ gameData }) {
  const { background_image, gameTags, description } = gameData;

  const removeHtmlTags = (str) => {
    return str.replace(/<[^>]*>/g, '');
  };

  const plainText = removeHtmlTags(description);
  gameTags.forEach((element) => {
    console.log(element.tag);
  });
  return (
    <div
      className='relative flex flex-col items-center justify-center gap-2 py-4 text-left'
      style={{
        backgroundImage: `url(${background_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='absolute inset-0 bg-black opacity-80'></div>
      <div className='relative z-10 mx-2 rounded-xl bg-base_dark bg-opacity-70 p-8'>
        <p className='mb-2 text-left text-3xl font-extrabold text-primary'>
          Tags
        </p>
        <div className='mt-4 flex flex-wrap'>
          {gameTags.map((tag) => (
            <GameTag key={tag.tag.id}>{tag.tag.name}</GameTag>
          ))}
        </div>

        <p className='mb-2 mt-5 text-left text-3xl font-extrabold text-primary'>
          Description
        </p>
        <p className='text-2xl text-neutral'>{plainText}</p>
      </div>
      <div></div>
    </div>
  );
}

export default GamePageDetail;
