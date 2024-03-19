
import { googleLogin } from '@/redux/slice/auth-slice'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function GGLoginSuccess() {
    const dispatch = useDispatch();
    const { authUser, loading } = useSelector((state) => state.auth);
    useEffect(()=>{
        dispatch(googleLogin())
    console.log('aaa')
    },[])
  return (
    <>
      <Link to={"/user"}>
      <div
        className='flex w-full h-content justify-center items-center bg-blue-400'
      >
        LoginSuccess
        Go to profile page
      </div>
      </Link>
    
    </>
      
  )
}

export default GGLoginSuccess