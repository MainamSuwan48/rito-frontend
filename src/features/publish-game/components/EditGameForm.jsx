import { joiResolver } from '@hookform/resolvers/joi';
import React from 'react';
import { useForm } from 'react-hook-form';
import { createGameSchema } from '../validations/validate-creategame';
import PublishGameInput from './PublishGameInput';
import { useSelector } from 'react-redux';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import PlatformsCreator from '@/pages/UserPage/game-publishing/PlatformsCreator';
import GenreCreator from '@/pages/UserPage/game-publishing/GenresCreator';
import GameTagsCreator from '@/pages/UserPage/game-publishing/GameTagsCreator';
import { useDispatch } from 'react-redux';
import { updateGame } from '@/redux/slice/games-slice';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function EditGameForm({
  onAddBackgroundImage,
  onAddScreenshots,
  backgroundImageEl,
  screenshotsEl,
  backgroundImage,
  screenshots,
  deletedScreenshotIds,
  onClearScreenshots,
}) {
  const {
    gameTagsForPublishing,
    genresForPublishing,
    gamePlatformsForPublishing,
    currentGame,
  } = useSelector((state) => state.games);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { gameId } = useParams();

  const handleUploadedBackgroundImage = (e) => {
    if (e.target.files[0]) {
      onAddBackgroundImage(e.target.files[0]);
      backgroundImageEl.current.value = '';
    }
  };

  const handleUploadedScreenshot = (e) => {
    if (e.target.files[0]) {
      onAddScreenshots(e.target.files[0]);
      screenshotsEl.current.value = '';
    }
  };

  const defaultValues = {
    name: currentGame.name,
    description: currentGame.description || '',
    releasedDate: currentGame.releasedDate,
    price: currentGame.price,
  };

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(createGameSchema),
    mode: 'onSubmit',
    defaultValues: defaultValues,
  });

  const onClear = () => {
    reset(defaultValues);
    onAddBackgroundImage(null);
    onClearScreenshots();
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);

    if (data.description) {
      formData.append('description', data.description);
    }

    formData.append('price', String(data.price));
    formData.append('releasedDate', data.releasedDate);

    if (backgroundImage) {
      formData.append('backgroundImage', backgroundImage);
    }

    if (screenshots.length > 0) {
      screenshots.forEach(
        (screenshot) =>
          !screenshot.id && formData.append('screenshots', screenshot)
      );
    }

    if (gamePlatformsForPublishing.length > 0) {
      formData.append('platforms', JSON.stringify(gamePlatformsForPublishing));
    }

    if (gameTagsForPublishing.length > 0) {
      formData.append('tags', JSON.stringify(gameTagsForPublishing));
    }

    if (genresForPublishing.length > 0) {
      formData.append('genres', JSON.stringify(genresForPublishing));
    }

    if (deletedScreenshotIds.length > 0) {
      formData.append(
        'deletedScreenshotIds',
        JSON.stringify(deletedScreenshotIds)
      );
    }

    dispatch(updateGame({ formData, gameId, navigate, onClear }));
  };

  return (
    <form className='form-control gap-4' onSubmit={handleSubmit(onSubmit)}>
      <input
        type='file'
        className='hidden'
        onChange={handleUploadedBackgroundImage}
        ref={backgroundImageEl}
      />
      <input
        type='file'
        className='hidden'
        onChange={handleUploadedScreenshot}
        ref={screenshotsEl}
      />

      <h1 className='text-4xl font-bold'>Publish Game</h1>

      <div className='flex w-full justify-between  text-base'>
        <div className='w-4/12 '>Game name :</div>
        <PublishGameInput
          register={register}
          name='name'
          errors={errors}
          placeholder='Game name'
        />
      </div>

      <div className='flex w-full justify-between  text-base'>
        <div className='w-4/12 '>Description (Optional) :</div>
        <div className='w-8/12'>
          <textarea
            {...register('description')}
            className='input-bordered w-full resize-none rounded-md border-2 px-3 py-1.5'
            rows='5'
            placeholder='Description'
          />
          {errors.description && (
            <div className='mt-2 text-wrap text-sm font-semibold text-danger'>
              {errors?.description.message}
            </div>
          )}
        </div>
      </div>

      <div className='flex w-full justify-between  text-base'>
        <div className='w-4/12 '>Price (Baht) :</div>
        <PublishGameInput
          register={register}
          name='price'
          errors={errors}
          placeholder='1000'
        />
      </div>

      <Dialog>
        <DialogTrigger
          asChild
          className='h-fit gap-2.5 rounded-none px-5  py-2 text-center text-base font-semibold text-pink-500 hover:text-blue-500'
        >
          <Button variant='outline'>Add Platform</Button>
        </DialogTrigger>
        <DialogContent className='h-[500px] overflow-auto p-4 sm:max-w-[525px]'>
          <DialogHeader>
            <DialogTitle>Add Game platforms</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <PlatformsCreator />
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger
          asChild
          className='h-fit gap-2.5 rounded-none px-5  py-2 text-center text-base font-semibold text-pink-500 hover:text-blue-500'
        >
          <Button variant='outline'>Add Genre</Button>
        </DialogTrigger>
        <DialogContent className='h-[500px] overflow-auto p-4 sm:max-w-[525px]'>
          <DialogHeader>
            <DialogTitle>Add Game Genres</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <GenreCreator />
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger
          asChild
          className='h-fit gap-2.5 rounded-none px-5  py-2 text-center text-base font-semibold text-pink-500 hover:text-blue-500'
        >
          <Button variant='outline'>Add Tags</Button>
        </DialogTrigger>
        <DialogContent className='h-content overflow-auto sm:max-w-[725px]'>
          <DialogHeader>
            <DialogTitle>Add Game Tags</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <GameTagsCreator />
        </DialogContent>
      </Dialog>

      <div className='flex w-full justify-between  text-base'>
        <div className='w-4/12 '>Released Date :</div>
        <PublishGameInput
          type='date'
          register={register}
          name='releasedDate'
          errors={errors}
          placeholder='1000'
        />
      </div>

      <div className='flex w-full justify-between text-base'>
        <div className='w-4/12 '>Background Image :</div>
        <div className='w-8/12'>
          <button
            className=' w-full bg-base_dark py-4 text-white hover:bg-gray-600'
            type='button'
            onClick={() => backgroundImageEl.current.click()}
          >
            Upload Background Image
          </button>
        </div>
      </div>

      <div className='flex w-full justify-between  text-base'>
        <div className='w-4/12 '>Screenshots :</div>
        <div className='w-8/12'>
          <button
            className='w-full bg-base_dark py-4 text-white hover:bg-gray-600'
            type='button'
            onClick={() => screenshotsEl.current.click()}
          >
            Upload Screenshots
          </button>
        </div>
      </div>

      <button className='w-full bg-primary py-4 text-white transition-all hover:bg-primary_mute active:scale-95'>
        Submit
      </button>
    </form>
  );
}

export default EditGameForm;
