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

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { updateProfileImage } from '@/redux/slice/auth-slice';
import { useRef } from 'react';
import { useState } from 'react';

export function EditProfilePicture({ user }) {
  const fileEl = useRef(null);
  const dispatch = useDispatch();
  const { id, profileImageUrl } = user;
  const [file, setFile] = useState(null);

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append('profileImageUrl', file);
    console.log({ file, formData }, 'id, formData')
    dispatch(updateProfileImage({ id, formData }))
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Dialog>
      <DialogTrigger
        asChild
        className='h-fit gap-2.5 rounded-none px-5  py-2 text-center text-base font-semibold text-pink-500 hover:text-blue-500'
      >
        <Button variant='outline'>Edit Profile Picture</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[525px]'>
        <DialogHeader>
          <DialogTitle className='text-center text-2xl'>
            Edit Profile Picture
          </DialogTitle>
        </DialogHeader>
        <form className='flex items-center justify-start gap-4'>
          <div className='mt-4 inline-flex w-[550px] flex-col items-center justify-start gap-6'>
            <input
              type='file'
              className='hidden'
              accept='image/*'
              ref={fileEl}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
            />
            <img
              className='h-64 w-64'
              src={
                file
                  ? URL.createObjectURL(file)
                  : profileImageUrl || 'https://via.placeholder.com/256x256'
              }
            />
            <DialogFooter className='flex w-full items-center justify-center '>
              {file ? (
                <div className='flex gap-2'>
                  <Button
                    className='bg-pink-500'
                    type='button'
                    onClick={onSubmit}
                  >
                    Submit
                  </Button>
                  <Button
                    className='bg-pink-500'
                    type='button'
                    onClick={() => {
                      setFile(null);
                      fileEl.current.value = '';
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <Button
                  className='bg-pink-500'
                  type='button'
                  onClick={() => fileEl.current.click()}
                >
                  Choose File
                </Button>
              )}
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
