import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function GamePageHeroDetail({ gameData }) {
  const { name, platforms, genres, released } = gameData;
  const removeHtmlTags = (str) => {
    return str.replace(/<[^>]*>/g, '');
  };

  function convertToDate(obj) {
    let date = new Date(obj);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  
  let date = convertToDate(released);

console.log(date, 'date**************************');

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
    <>
      <div className='flex h-96  w-1/3 flex-col gap-2 rounded-xl border-2 border-primary bg-base-100 p-5 text-center'>
        <div className='flex flex-col gap-2 overflow-auto'>
          <p className='mb-2 animate-bounce text-left text-3xl font-extrabold text-primary'>
            Description
          </p>

          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2 text-left'>
              <span className='font-bold text-secondary'>Released Date </span>
              <p>{date}</p>
            </div>
            <div className='flex flex-col gap-2 text-left'>
              <span className='font-bold text-secondary'>Platforms </span>
              <p>
                {platforms.map((platform) => `${platform.platform.name}, `)}
              </p>
            </div>
            <div className='flex flex-col gap-2 text-left'>
              <span className='font-bold text-secondary'>Genres </span>
              <p>
                {genres.length === 1
                  ? genres[0].name
                  : genres.map((genre) => `${genre.name}, `)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GamePageHeroDetail;
