import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function Container() {
  return (
    <div
    className=''
    >
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Container;
