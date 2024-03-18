import { DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import { DialogContent } from '@radix-ui/react-dialog';

export default function CreatePostForm() {
  const inputClass =
    'py-2 px-4 col-span-3 border text-sm focus:border-base_dark focus:outline-none';
  return (
    <>
      <DialogContent className='sm:max-w-[70vw]'>
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className='grid gap-4 py-4'>
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
            <button className='h-8 w-48 bg-base_dark text-sm text-white'>
              upload images
            </button>
          </div>
        </div>
        <DialogFooter>
          <button
            type='submit'
            className='h-10 w-[150px] bg-primary text-sm text-white duration-300 hover:bg-secondary'
          >
            Post
          </button>
        </DialogFooter>
      </DialogContent>
    </>
  );
}
