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
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export default function CreatePostBtn() {
  const inputClass =
    'py-2 px-4 col-span-3 border text-sm focus:border-base_dark focus:outline-none';

  const dispatch = useDispatch();

  // const {} = useForm({
  //   resolver: joiResolver(createPostSchema),
  //   mode: 'onSubmit',
  // });

  const onSubmit = (data) => {
    console.log(data);
  };

  const createGameData = new FormData();
  createGameData.append('title', 'data.title');
  createGameData.append('content', 'data.content');
  createGameData.append('category', 'data.category');
  createGameData.append('images', 'data.images');

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
        <form className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <p htmlFor='name' className='text-right'>
              Title:
            </p>
            <input className={inputClass} />
          </div>
          <div className='items-top grid grid-cols-4 gap-4'>
            <p htmlFor='username' className='pt-1 text-right'>
              Content:
            </p>
            <textarea
              className={`${inputClass} focus:border-blue-500 focus:outline-none`}
              rows={3} // Adjust the number of rows as needed
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <p htmlFor='name' className='text-right'>
              Categories:
            </p>
            <select className={inputClass}>
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
              type='file'
              className='h-8 w-48 bg-base_dark text-sm text-white'
            >
              up load
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
