import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { editUserSchema } from "@/features/auth/validations/validate-editUser";
import { updateProfileImage } from "@/redux/slice/auth-slice";
import { useRef } from "react";
import { useState } from "react";



export function EditProfilePicture({user}) {
    const fileEl = useRef(null)
    const dispatch = useDispatch()
    const {authuser,loading} = useSelector((state)=>state.auth)
    const {id,profileImageUrl} = user
    const[file,setFile] = useState(null)

    const onSubmit = async() =>{
        const formData = new FormData()
        formData.append('profileImageUrl',file)
        dispatch(updateProfileImage({id,formData}))
        .then()
        .catch((err)=>{
          console.log(err);
        })
    }

    // console.log(fileEl)
  return (
    <Dialog>
      <DialogTrigger 
        asChild
        className='h-fit text-center text-base font-semibold  text-pink-500 gap-2.5 hover:text-blue-500 px-5 py-2 rounded-none'
      >
        <Button variant="outline">Edit Profile Picture</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Edit Profile Picture</DialogTitle>
        </DialogHeader>
        <form 
            // onSubmit={handleSubmit(onSubmit)} 
            className='flex items-center justify-start gap-4'
        >
            <div className='inline-flex flex-col items-center justify-start mt-4 gap-6 w-[550px]'>
                <input 
                    type="file" 
                    className="hidden"
                    // {...register('profileImageUrl')}
                    ref={fileEl}
                    onChange={e=>{
                        if (e.target.files[0]) {
                            setFile(e.target.files[0])
                        }
                    }}
                />
                <img
                className='h-64 w-64'
                src={file? URL.createObjectURL(file) : (profileImageUrl || 'https://via.placeholder.com/256x256')}
                />

                {/* <div className='relative w-full'>
                    <div className='mb-2 font-semibold text-base_dark'>Lastname :</div>
                    <input
                      type='text'
                      {...register('lastName')}
                      className='input-bordered rounded-md w-full border-2 p-1.5 text-black'
                    />
                    {errors['lastName'] && (
                      <div className=' text-wrap text-xs font-semibold text-danger'>
                        {errors['lastName'].message}
                      </div>
                    )}
                </div> */}

                <DialogFooter className="flex items-center justify-center w-full ">
                    {file?
                    <div className="flex gap-2">
                        <Button 
                            className="bg-pink-500" 
                            type="button"
                            onClick={onSubmit}
                        >
                        Submit
                        </Button>
                        <Button 
                            className="bg-pink-500" 
                            type="button"
                            onClick={()=>{
                                setFile(null)
                                fileEl.current.value = ''
                            }}
                        >
                        Cancel
                        </Button>
                    </div>
                    :
                    <Button 
                        className="bg-pink-500" 
                        type="button"
                        onClick={()=>fileEl.current.click()}
                    >
                    Choose File
                    </Button>
                    }
                </DialogFooter>
                {/* <button type="submit" className=" border-2 p-2">
                  Save Edit
                </button> */}
              </div>
            
          </form>
      </DialogContent>
    </Dialog>
  )
}
