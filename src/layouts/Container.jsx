import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Container() {
  return (
    <div className=''>
      <Header />
      <div className='max-w-[100vw] pt-12'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Container;
