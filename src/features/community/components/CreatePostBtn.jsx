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

export default function CreatePostBtn() {
  const inputClass =
    'py-2 px-4 col-span-3 border text-sm focus:border-base_dark focus:outline-none';

  const dispatch = useDispatch();

  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(createPostSchema),
    mode: 'onSubmit',
  });

  const onSubmit = (data) => {
    const createGameData = new FormData();
    createGameData.append('title', 'data.title');
    createGameData.append('content', 'data.content');
    createGameData.append('category', 'data.category');
    createGameData.append('images', 'data.images');
  };

  const uploadImageEl = useRef(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='h-12 w-[250px] rounded-none bg-primary duration-300 hover:bg-secondary'>
          Create Post
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[70vw]'>
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
        </DialogHeader>
        <form className='grid gap-4 py-4' onSubmit={handleSubmit(onSubmit)}>
          <input
            type='file'
            name='images'
            className='hidden'
            errors={errors}
            ref={uploadImageEl}
          />
          <div className='grid grid-cols-4 items-center gap-4'>
            <p className='text-right'>Title:</p>
            <CreatePostInput />
          </div>
          <div className='items-top grid grid-cols-4 gap-4'>
            <p className='pt-1 text-right'>Content:</p>
            <CreatePostInput isTextarea={true} />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <p htmlFor='name' className='text-right'>
              Categories:
            </p>
            <select name='category' className={inputClass}>
              <option value='DISCUSSION' selected>
                DISCUSSION
              </option>
              <option value='FANART'>FANART</option>
              <option value='SCREENSHOT'>SCREENSHOT</option>
            </select>
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <p className='text-right'></p>
            <button
              type='button'
              onClick={() => uploadImageEl.current.click()}
              className='h-8 w-48 bg-base_dark text-sm text-white duration-300 hover:bg-gray-600'
            >
              upload image
            </button>
          </div>
        </form>
        <DialogFooter>
          <button
            type='submit'
            className='h-10 w-[150px] bg-primary text-sm text-white duration-300 hover:bg-secondary'
          >
            Post
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
