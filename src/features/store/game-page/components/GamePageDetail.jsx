import React from 'react';
import GameTag from './GameTag';

function GamePageDetail({ gameData }) {
  const { background_image, tags } = gameData;

  const removeHtmlTags = (str) => {
    return str.replace(/<[^>]*>/g, '');
  };

  function getEnglishText(text) {
    const match = text.match(/\n(.+?)\n/);
    if (match) {
      const separator = match[0];
      const parts = text.split(separator);
      return parts[0];
    } else {
      return text;
    }
  }
  const desc =
    '<p>Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. <br />\nSimultaneous storytelling from three unique perspectives: <br />\nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. <br />\nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.</p>\n<p>Español<br />\nRockstar Games se hizo más grande desde su entrega anterior de la serie. Obtienes la construcción del mundo complicada y realista de Liberty City de GTA4 en el escenario de Los Santos, un viejo favorito de los fans, GTA San Andreas. 561 vehículos diferentes (incluidos todos los transportes que puede operar) y la cantidad aumenta con cada actualización.<br />\nNarración simultánea desde tres perspectivas únicas:<br />\nSigue a Michael, ex-criminal que vive su vida de ocio lejos del pasado, Franklin, un niño que busca un futuro mejor, y Trevor, el pasado exacto del que Michael está tratando de huir.<br />\nGTA Online proporcionará muchos desafíos adicionales incluso para los jugadores experimentados, recién llegados del modo historia. Ahora tendrás otros jugadores cerca que pueden ayudarte con la misma probabilidad que arruinar tu misión. Los jugadores pueden experimentar todas las mecánicas de GTA actualizadas a través del personaje personalizable único, y el contenido de la comunidad combinado con el sistema de nivelación tiende a mantener a todos ocupados y comprometidos.</p>';

  const plainText = removeHtmlTags(desc);
  const newDescription = getEnglishText(plainText);
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
          {tags.map((tag) => (
            <GameTag key={tag.id}>{tag.name}</GameTag>
          ))}
        </div>

        <p className='mb-2 mt-5 text-left text-3xl font-extrabold text-primary'>
          Description
        </p>
        <p className='text-2xl text-neutral'>{newDescription}</p>
      </div>
      <div></div>
    </div>
  );
}

export default GamePageDetail;
