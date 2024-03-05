import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function Container() {
  return (
    <div
    className=''
    >
      <Header />
      <div className='max-w-[100vw] pt-12'>
        <Outlet />
      </div>
    </div>
  );
}

export default Container;
