import { joiResolver } from "@hookform/resolvers/joi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { updateUser } from "@/redux/slice/user-slice";
import { editUserSchema } from "@/features/auth/validations/validate-editUser";


export default function UserProfileContainer({user}) {
  const dispatch = useDispatch()
  const {description,username,displayName,id,
    profileImageUrl,firstName,lastName,email} = user

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
    
  const { users, loading } = useSelector((state) => state.users)

  // const [editInput,setEditInput] = useState({
  //   description,
  //   displayName,
  //   firstName,
  //   lastName
  // })
  const [toggleEdit,setToggleEdit] = useState(false)

  const onSubmit = async(data) =>{
    console.log(data,"data")
    // console.log(users,"users")
    dispatch(updateUser(id,data))
    .then()
    .catch((err)=>{
      console.log(err);
    })
    setToggleEdit(false)
  }
  
  return (
    <>
      <div className='inline-flex h-fit w-full items-end justify-between gap-36'>
        <div className='flex items-center justify-center gap-6'>
          <img
            className='h-64 w-64'
            src={profileImageUrl || 'https://via.placeholder.com/256x256'}
          />
          {toggleEdit?
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
                <button type="submit" className=" border-2 p-2">
                  Save Edit
                </button>
              </div>
            </div>
          </form>
          :
          <div className='flex items-center justify-start gap-4'>
            <div className='inline-flex flex-col items-start justify-start gap-6'>
              <div className='flex flex-col items-start justify-center gap-4'>
                <div className='inline-flex items-start justify-center gap-6'>
                  <div className='text-center  text-2xl font-bold text-zinc-100'>
                    {displayName}
                  </div>
                </div>
                <div className='inline-flex items-center justify-start gap-2'>
                  <div className='flex items-center justify-center gap-2.5'>
                    <div className='text-center   font-normal  text-zinc-100'>
                      {description || "description"}
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-start justify-start gap-4'>
                <div className='inline-flex items-center justify-center gap-2.5'>
                  <div className='text-center   font-medium  text-zinc-100'>
                    USERID: {id}
                  </div>
                </div>
                <div className='inline-flex items-center justify-center gap-2.5'>
                  <div className='text-center   font-medium  text-zinc-100'>
                    {username}
                  </div>
                </div>
                <div className='inline-flex items-center justify-center gap-2.5'>
                  <div className='text-center   font-medium  text-zinc-100'>
                    {firstName}
                  </div>
                </div>
                <div className='inline-flex items-center justify-center gap-2.5'>
                  <div className='text-center   font-medium  text-zinc-100'>
                    {lastName}
                  </div>
                </div>
                <div className='inline-flex items-center justify-center gap-2.5'>
                  <div className='text-center   font-medium  text-zinc-100'>
                    {email}
                  </div>
                </div>
              </div>
            </div>
          </div>
          }
        </div>
        <div className='grid grid-flow-row items-center justify-center gap-2.5'>
          <div className='hit-fit flex flex-col items-center justify-center gap-2.5 bg-pink-500 px-20 py-4'>
            <div className='text-center   font-semibold text-white'>
              Save Profile
            </div>
          </div>
          <div className='flex h-fit flex-col items-center justify-center gap-2.5 bg-zinc-300 px-20 py-4'>
            <div className='text-center   font-semibold  text-white'>
              Pending Request
            </div>
          </div>
          <div className='hit-fit flex flex-col items-center justify-center gap-2.5 bg-teal-500 px-20 py-4'>
            <div className='text-center   font-semibold  text-white'>
              Add friend
            </div>
          </div>
          <div className='hit-fit flex flex-col items-center justify-center gap-2.5 bg-pink-500 px-20 py-4'>
            <button 
              className='text-center   font-semibold  text-white hover:'
              onClick={()=>setToggleEdit(true)}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
