import { joiResolver } from '@hookform/resolvers/joi';
import React from 'react';
import { useForm } from 'react-hook-form';
import { createGameSchema } from '../validations/validate-creategame';
import PublishGameInput from './PublishGameInput';
import { toast } from 'react-toastify';

function CreateGameForm({
  onAddBackgroundImage,
  onAddScreenshots,
  errorBackgroundImage,
  updateErrorBackgroundImage,
  backgroundImageEl,
  screenshotsEl,
  backgroundImage,
  screenshots,
  onClearScreenshots,
}) {
  const handleUploadedBackgroundImage = (e) => {
    if (e.target.files[0]) {
      onAddBackgroundImage(e.target.files[0]);
      updateErrorBackgroundImage('');
      backgroundImageEl.current.value = '';
    }
  };

  const handleUploadedScreenshot = (e) => {
    if (e.target.files[0]) {
      onAddScreenshots(e.target.files[0]);
      screenshotsEl.current.value = '';
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({ resolver: joiResolver(createGameSchema), mode: 'onSubmit' });

  const onSubmit = (data) => {
    try {
      if (!backgroundImage) {
        return updateErrorBackgroundImage('Background Image is required');
      }

      const formData = new FormData();
      formData.append('name', data.name);

      if (data.description) {
        formData.append('description', data.description);
      }

      formData.append('price', String(data.price));
      formData.append('releasedDate', data.releasedDate);
      formData.append('backgroundImage', backgroundImage);

      if (screenshots.length > 0) {
        screenshots.forEach((screenshot) =>
          formData.append('screenshots', screenshot)
        );
      }

      reset();
      updateErrorBackgroundImage('');
      onAddBackgroundImage(null);
      onClearScreenshots();
      toast.success('Successfully created game');
    } catch (error) {
      toast.error(error.response.message);
    }
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

      <div className='flex w-full justify-between  text-base'>
        <div className='w-4/12 '>Background Image :</div>
        <div className='w-8/12'>
          <button
            className='w-full bg-base_dark py-4 text-white'
            type='button'
            onClick={() => backgroundImageEl.current.click()}
          >
            Upload Background Image
          </button>
          {errorBackgroundImage && (
            <div className='mt-2 text-wrap text-sm font-semibold text-danger'>
              {errorBackgroundImage}
            </div>
          )}
        </div>
      </div>

      <div className='flex w-full justify-between  text-base'>
        <div className='w-4/12 '>Screenshots :</div>
        <div className='w-8/12'>
          <button
            className='w-full bg-base_dark py-4 text-white'
            type='button'
            onClick={() => screenshotsEl.current.click()}
          >
            Upload Screenshots
          </button>
        </div>
      </div>

      <button className='w-full bg-primary py-4 text-white'>Submit</button>
    </form>
  );
}

export default CreateGameForm;
