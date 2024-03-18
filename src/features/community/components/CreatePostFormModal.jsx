import { useEffect } from 'react';

export default function CreatePostFormModal() {
  return (
    <div className='z-20 flex w-full flex-col justify-center gap-4 rounded-lg bg-base_dark bg-opacity-10 p-12'>
      <input type='text' className='border px-4 py-2' />
      <input type='text' className='border px-4 py-2' />
      <input type='text' className='border px-4 py-2' />
      <input type='text' className='border px-4 py-2' />
    </div>
  );
}
