import React from 'react';
import { LikeIcon } from '@/icons';

export default function CommentPage() {
  return (
    <div className=' bg-base_dark'>
      <div className='flex justify-center p-4'>
        {/* =============== < ShowGameOnline > =============== */}
        <div className='flex w-[40%] gap-2 bg-primary p-2'>
          <img
            className='flex h-[3rem] w-[3rem] object-cover hover:scale-110'
            src='https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=600'
          />
          <h1 className=' font-bold text-neutral '> Frodo </h1>
        </div>
        <div className='flex'>
          <img
            className='h-[4rem] w-[10rem] object-cover hover:scale-110'
            src='https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_G1_1920x1080_19_0911-1920x1080-1d69e15f00cb5ab57249f208f1f8f45d52cbbc59.jpg'
          />
        </div>
      </div>
      <br />

      {/* =============== < เส้นแบ่ง > =============== */}
      <div className='ml-[25%] flex flex-col gap-2'>
        <p className='flex w-[7%] items-center gap-2 text-neutral font-bold'>
          <LikeIcon /> 999
        </p>
        <button className='flex h-[2rem] w-[2rem] items-center rounded-md p-1 hover:text-success text-primary hover:scale-105'>
          <LikeIcon />
        </button>
        <br />
        <hr className='w-[43rem] border-2 border-primary' />
      </div>

      {/* =============== < UserComment > =============== */}
      <div className='flex justify-center p-2'>
        <div className='flex w-[52%] gap-6  p-2'>
          <img
            className='flex h-[3rem] w-[3rem] object-cover hover:scale-110'
            src='https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=600'
          />
          <div>
            <input 
            className='p-3 rounded-md bg-neutral text-black w-[300%]'
            type='string'
            />
          </div>
        </div>
      </div>

      {/* =============== < FriendComment 1 > =============== */}
      <div className='flex justify-center p-2'>
        <div className='flex w-[52%] gap-2  p-2'>
          <img
            className='flex h-[3rem] w-[3rem] object-fill hover:scale-110'
            src='https://hips.hearstapps.com/hmg-prod/images/neva-masquerade-royalty-free-image-1674509896.jpg?crop=0.611xw:1.00xh;0.196xw,0&resize=640:*'
          />
          <div>
            <button className=' font-bold text-neutral hover:text-primary'> Piza </button>
            <p className='mt-1 text-white'> Meow ♥ </p>
          </div>
        </div>
      </div>

      {/* =============== < FriendComment 2 > =============== */}
      <div className='flex justify-center p-2'>
        <div className='flex w-[52%] gap-2  p-2'>
          <img
            className='flex h-[3rem] w-[3rem] object-cover hover:scale-110'
            src='https://th-thumbnailer.cdn-si-edu.com/3RQHyIdF6cCdAPoVL1NOZzyMCxY=/1000x750/filters:no_upscale():focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg'
          />
          <div>
            <button className=' font-bold text-neutral hover:text-primary'> Papoy </button>
            <p className='mt-1 text-white'> Nice </p>
          </div>
        </div>
      </div>

      {/* =============== < FriendComment 3 > =============== */}
      <div className='flex justify-center p-2'>
        <div className='flex w-[52%] gap-2  p-2'>
          <img
            className='flex h-[3rem] w-[3rem] object-cover hover:scale-110'
            src='https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo='
          />
          <div>
            <button className=' font-bold text-neutral hover:text-primary'> Bubi </button>
            <p className='mt-1 text-white'> Rito App Good! </p>
          </div>
        </div>
      </div>

      {/* =============== < Button > =============== */}
      <div className=' flex items-center justify-center '>
        <button className=' text-neutral font-bold bg-primary w-[50%] p-2 m-3 hover:text-secondary_mute'> View 72 comments & details </button>
      </div>

      {/* =============== < Tags > =============== */}
      <div className='flex gap-2 pb-4'>
        <p className=' text-neutral ml-[21.5rem]'> Tags: </p>
        <button className=' text-neutral hover:text-primary'> Funny </button>
      </div>
    </div>
  );
}
