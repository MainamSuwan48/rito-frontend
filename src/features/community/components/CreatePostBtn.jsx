import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { joiResolver } from '@hookform/resolvers/joi';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createPostSchema } from '../validations/validate-createpost';
import CreatePostInput from './CreatePostInput';
import { createPost } from '@/redux/slice/community-slice';
import { useState } from 'react';

export default function CreatePostBtn() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(createPostSchema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('gameId', data.gameId);
    formData.append('postType', data.postType);
    if (data.content) {
      formData.append('content', data.content);
    }
    // createGameData.append('category', data.category);
    // createGameData.append('image', data.image);
    console.log('submit');
    await dispatch(createPost({ formData }));
    setIsOpen(false);
  };

  const uploadImageEl = useRef(null);

  return (
    <Dialog isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
      <DialogTrigger asChild>
        <button
          className='h-12 w-[250px] rounded-none bg-primary duration-300 hover:bg-secondary'
          onClick={() => setIsOpen(true)}
        >
          Create Post
        </button>
      </DialogTrigger>
      {isOpen && (
        <DialogContent className='sm:max-w-[70vw]'>
          <form
            className='flex flex-col justify-center gap-4 py-4'
            onSubmit={handleSubmit(onSubmit)}
          >
            <DialogHeader>
              <DialogTitle>Create Post</DialogTitle>
            </DialogHeader>

            <input
              type='file'
              name='image'
              className='hidden'
              errors={errors}
              register={register}
              ref={uploadImageEl}
            />
            <div className='grid grid-cols-[1.5fr_4fr] gap-4'>
              <p className='pt-1 text-right'>Title:</p>
              <CreatePostInput
                name='title'
                errors={errors}
                register={register}
              />
            </div>
            <div className='items-top grid grid-cols-[1.5fr_4fr] gap-4'>
              <p className='pt-1 text-right'>Content:</p>
              <CreatePostInput
                name='content'
                errors={errors}
                isTextarea={true}
                register={register}
              />
            </div>
            <div className='grid grid-cols-[1.5fr_4fr] gap-4'>
              <p className='pt-1 text-right'>Game:</p>
              <CreatePostInput
                name='gameId'
                errors={errors}
                register={register}
              />
            </div>
            <div className='grid grid-cols-[1.5fr_4fr] gap-4'>
              <p className='pt-1 text-right'>Categories:</p>
              <select
                {...register('postType')}
                // name='category'
                className='h-10 border px-2 focus:border-base_dark focus:outline-none'
              >
                <option value='DISCUSSION' selected>
                  DISCUSSION
                </option>
                <option value='FANART'>FANART</option>
                <option value='SCREENSHOT'>SCREENSHOT</option>
              </select>
            </div>
            <div className='grid grid-cols-[1.5fr_4fr] gap-4'>
              <p></p>
              <button
                type='button'
                onClick={() => uploadImageEl.current.click()}
                className='h-8 w-48 bg-base_dark text-sm text-white duration-300 hover:bg-gray-600'
              >
                upload image
              </button>
            </div>

            <button
              type='submit'
              className='h-10 w-[150px] self-end bg-primary text-sm text-white duration-300 hover:bg-secondary'
            >
              Post
            </button>
          </form>
        </DialogContent>
      )}
    </Dialog>
  );
}
