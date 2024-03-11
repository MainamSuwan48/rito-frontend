import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres } from '@/redux/slice/games-slice';
import GameGenreTag from './GameGenreTag';

export default function SideBar() {
  const dispatch = useDispatch();
  const { genres, loadingGenres } = useSelector((state) => state.games);

  useEffect(() => {
    if (!genres) {
      dispatch(getAllGenres());
    }
  }, [genres]);
  return (
    <div className='h-content w-64 backdrop-blur-sm'>
      <Accordion type='single' className='w-full border-primary' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='h-14 w-full bg-primary pl-4 text-neutral border-primary'>
            Genres
          </AccordionTrigger>
          <AccordionContent className='m-0 h-game_store w-full overflow-auto p-0 '>
            <div className='flex flex-col gap-1'>
              <GameGenreTag type='all'>All</GameGenreTag>
              {loadingGenres ? (
                <div>Loading...</div>
              ) : (
                genres &&
                genres.map((genre) => (
                  <GameGenreTag
                    key={genre.id}
                    id={genre.id}
                    bgImage={genre.backgroundImageUrl}
                  >
                    {genre.name}
                  </GameGenreTag>
                ))
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
