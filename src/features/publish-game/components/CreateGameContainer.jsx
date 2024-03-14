import React from 'react';
import CreateGameForm from './CreateGameForm';
import { useState } from 'react';
import BackgroundImageShow from './BackgroundImageShow';
import ScreenshotsShow from './ScreenshotsShow';
import { useRef } from 'react';
import LoadingBalls from '@/components/ui/LoadingBalls';
import { useSelector } from 'react-redux';

function CreateGameContainer() {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [errorBackgroundImage, setErrorBackgroundImage] = useState('');
  const [screenshots, setScreenshots] = useState([]);

  const { loading } = useSelector((state) => state.games);

  const backgroundImageEl = useRef(null);
  const screenshotsEl = useRef(null);

  const onAddBackgroundImage = (image) => {
    setBackgroundImage(image);
  };

  const onAddScreenshots = (image) => {
    setScreenshots((prev) => [...prev, image]);
  };

  const updateErrorBackgroundImage = (string) => {
    setErrorBackgroundImage(string);
  };

  const onDeleteBackgroundImage = () => {
    setBackgroundImage(null);
  };

  const onDeleteScreenshots = (index) => {
    setScreenshots((prev) => prev.filter((el, i) => i !== index));
  };

  const onClearScreenshots = () => {
    setScreenshots([]);
  };

  if (loading) {
    return (
      <div className='col-span-12 flex h-content items-center justify-center text-center'>
        <LoadingBalls />
      </div>
    );
  }

  return (
    <>
      <div className='col-span-6'>
        <CreateGameForm
          onAddBackgroundImage={onAddBackgroundImage}
          onAddScreenshots={onAddScreenshots}
          errorBackgroundImage={errorBackgroundImage}
          updateErrorBackgroundImage={updateErrorBackgroundImage}
          backgroundImageEl={backgroundImageEl}
          screenshotsEl={screenshotsEl}
          backgroundImage={backgroundImage}
          screenshots={screenshots}
          onClearScreenshots={onClearScreenshots}
        />
      </div>
      <div className='col-span-6'>
        <div className='mt-12 flex flex-col gap-4'>
          <BackgroundImageShow
            backgroundImage={backgroundImage}
            onDeleteBackgroundImage={onDeleteBackgroundImage}
            backgroundImageEl={backgroundImageEl}
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
  );
}

export default CreateGameContainer;
