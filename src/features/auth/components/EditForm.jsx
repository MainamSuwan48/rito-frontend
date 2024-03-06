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
import { updateAuthUser } from "@/redux/slice/auth-slice";



export function EditForm({user}) {
    const dispatch = useDispatch()
    const {description,displayName,id,firstName,lastName} = user
    const {
        register,
        handleSubmit,
        formState:{errors}
      } = useForm({
        resolver: joiResolver(editUserSchema),
        mode: 'onSubmit',
        defaultValues:{
          displayName,
          description,
          firstName,
          lastName
        }
      })

    const onSubmit = async(data) =>{
        console.log(data,"data")
        dispatch(updateAuthUser({id,data}))
        .then()
        .catch((err)=>{
          console.log(err);
        })
        console.log(user)
      }
  return (
    <Dialog>
      <DialogTrigger 
        asChild
        className='h-fit text-center font-semibold  text-white gap-2.5 bg-pink-500 px-20 py-4 rounded-none'
      >
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form 
            onSubmit={handleSubmit(onSubmit)} 
            className='flex items-center justify-start gap-4'
          >
            <div className='inline-flex flex-col items-start justify-start gap-6'>
              <div className='flex flex-col items-start justify-center gap-4'>
                <div className='inline-flex items-start justify-center gap-2.5'>
                    <div className='mb-2 font-semibold text-base_dark'>Display Name :</div>
                    <input
                      type='text'
                      {...register('displayName')}
                      className='input-bordered rounded-md border-2 p-1.5 text-black'
                    />
                    {errors['displayName'] && (
                      <div className='mt-2 text-wrap text-xs font-semibold text-danger'>
                        {errors['displayName'].message}
                      </div>
                    )}
                </div>
                <div className='inline-flex items-center justify-start gap-2'>
                  <div className='flex items-center justify-center gap-2.5'>
                    <div className='mb-2 font-semibold text-base_dark'>Description :</div>
                    <input
                      type='text'
                      {...register('description')}
                      className='input-bordered  rounded-md border-2 p-1.5 text-black'
                    />
                    {errors['description'] && (
                      <div className='mt-2 text-wrap text-xs font-semibold text-danger'>
                        {errors['description'].message}
                      </div>
                    )}
                  </div>
                </div>
                
              </div>
              <div className='flex flex-col items-start justify-start gap-4'>
              
                <div className='inline-flex items-center justify-center gap-2.5'>
                    <div className='mb-2 font-semibold text-base_dark'>Firstname :</div>
                    <input
                      type='text'
                      {...register('firstName')}
                      className='input-bordered rounded-md border-2 p-1.5 text-black'
                    />
                    {errors['firstName'] && (
                      <div className='mt-2 text-wrap text-xs font-semibold text-danger'>
                        {errors['firstName'].message}
                      </div>
                    )}
                  
                </div>
                <div className='inline-flex items-center justify-center gap-2.5'>
                    <div className='mb-2 font-semibold text-base_dark'>Lastname :</div>
                    <input
                      type='text'
                      {...register('lastName')}
                      className='input-bordered rounded-md border-2 p-1.5 text-black'
                    />
                    {errors['lastName'] && (
                      <div className='mt-2 text-wrap text-xs font-semibold text-danger'>
                        {errors['lastName'].message}
                      </div>
                    )}
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
                {/* <button type="submit" className=" border-2 p-2">
                  Save Edit
                </button> */}
              </div>
            </div>
          </form>
      </DialogContent>
    </Dialog>
  )
}
