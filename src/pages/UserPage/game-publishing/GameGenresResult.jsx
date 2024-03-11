import { getAllGenres } from '@/redux/slice/games-slice';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addGenreForPublishing } from '@/redux/slice/games-slice';
import GameTagForPublish from './GameTagForPublish';

function GameGenresResult() {
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.games);

  const handleAddGenre = (genreId, genreName) => {
    dispatch(addGenreForPublishing({ genreId, genreName }));
  };

  useEffect(() => {
    if (!genres) {
      dispatch(getAllGenres());
    }
  }, [genres]);

  const test = () => {
    console.log(genres, 'genres in GameGenresResult');
  };

  return (
    <div className='flex flex-col overflow-auto p-2' onClick={test}>
      {genres &&
        genres.map((genre) => (
          <GameTagForPublish
            key={genre.id}
            tag={genre}
            id={genre.id}
            img={genre.backgroundImageUrl}
            onClick={() => handleAddGenre(genre.id, genre.name)}
          >
            {genre.name}
          </GameTagForPublish>
        ))}
    </div>
  );
}

export default GameGenresResult;
