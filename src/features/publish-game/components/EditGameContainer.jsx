import React from 'react';
import { useState } from 'react';
import BackgroundImageShow from './BackgroundImageShow';
import ScreenshotsShow from './ScreenshotsShow';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  addInitialGenres,
  addInitialPlatforms,
  addInitialTags,
  clearCurrentGame,
  getGameById,
} from '@/redux/slice/games-slice';
import { useParams } from 'react-router-dom';
import EditGameForm from './EditGameForm';

function EditGameContainer() {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [screenshots, setScreenshots] = useState([]);
  const [deletedScreenshotIds, setDeletedScreenshotIds] = useState([]);

  const { gameId } = useParams();
  const dispatch = useDispatch();
  const { currentGame } = useSelector((state) => state.games);

  useEffect(() => {
    if (!currentGame || currentGame.id !== gameId) {
      dispatch(getGameById(gameId));
    }

    return () => {
      dispatch(clearCurrentGame());
    };
  }, [gameId]);

  useEffect(() => {
    if (currentGame) {
      const initialGenres = currentGame.gameGenres.map((item) => ({
        id: item.genre.id,
        name: item.genre.name,
      }));
      const initialTags = currentGame.gameTags.map((item) => ({
        id: item.tag.id,
        name: item.tag.name,
      }));
      const initialPlatforms = currentGame.gamePlatforms.map((item) => ({
        id: item.platform.id,
        name: item.platform.name,
      }));
      dispatch(addInitialGenres(initialGenres));
      dispatch(addInitialTags(initialTags));
      dispatch(addInitialPlatforms(initialPlatforms));
      setScreenshots(currentGame.screenshots);
    }
  }, [currentGame]);

  const backgroundImageEl = useRef(null);
  const screenshotsEl = useRef(null);

  const onAddBackgroundImage = (image) => {
    setBackgroundImage(image);
  };

  const onAddScreenshots = (image) => {
    setScreenshots((prev) => [...prev, image]);
  };

  const onDeleteBackgroundImage = () => {
    setBackgroundImage(null);
  };

  const onDeleteScreenshots = (index, id) => {
    setScreenshots((prev) => prev.filter((el, i) => i !== index));
    if (id) {
      setDeletedScreenshotIds((prev) => [...prev, id]);
    }
  };

  const onClearScreenshots = () => {
    setDeletedScreenshotIds([]);
    setScreenshots([]);
  };

  return (
    <>
      {currentGame ? (
        <>
          <div className='col-span-6'>
            <EditGameForm
              onAddBackgroundImage={onAddBackgroundImage}
              onAddScreenshots={onAddScreenshots}
              backgroundImageEl={backgroundImageEl}
              screenshotsEl={screenshotsEl}
              backgroundImage={backgroundImage}
              screenshots={screenshots}
              deletedScreenshotIds={deletedScreenshotIds}
              onClearScreenshots={onClearScreenshots}
              currentGame={currentGame}
            />
          </div>
          <div className='col-span-6'>
            <div className='mt-12 flex flex-col gap-4'>
              <BackgroundImageShow
                backgroundImage={backgroundImage}
                onDeleteBackgroundImage={onDeleteBackgroundImage}
                backgroundImageEl={backgroundImageEl}
                initialSrc={currentGame.backgroundImageUrl}
              />
              <div className='flex flex-col gap-4'>
                {screenshots.length > 0 && (
                  <h1 className='text-2xl'>Screenshots</h1>
                )}
                <div className='grid w-full grid-cols-3 gap-4'>
                  {screenshots.map((screenshot, index) => (
                    <ScreenshotsShow
                      key={index}
                      index={index}
                      screenshot={screenshot}
                      screenshotsEl={screenshotsEl}
                      onDeleteScreenshots={onDeleteScreenshots}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default EditGameContainer;
