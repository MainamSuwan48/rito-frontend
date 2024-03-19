
import { googleLogin } from '@/redux/slice/auth-slice'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

function GGLoginSuccess() {
    const dispatch = useDispatch();
    const { authUser, loading } = useSelector((state) => state.auth);
    useEffect(()=>{
        dispatch(googleLogin())
    console.log('aaa')
    },[])
  return (
    <div className=' relative flex h-content items-center justify-center'>
    <video
      className='inset-0 -z-50'
      autoPlay
      loop
      muted
      style={{
        opacity: '0.6',
        position: 'fixed',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    >
      <source src='https://res.cloudinary.com/dhm6pitfd/video/upload/v1710171222/Moving_Gradient_Background_rnv9iv.mp4' />
    </video>
      <Link to={"/user"}>
      <button
        className='w-[300px] h-[50px] inset-0 justify-center items-center bg-primary'
      >
        Login Success. Click here!!
      </button>
      </Link>
    </div>
      
  )
}

export default GGLoginSuccess