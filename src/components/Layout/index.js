import React from 'react';
import Navbar from '../Navbar';
import Toggle from '../Toggle';

function Layout({children}) {
  return (
    <div>
      <Navbar />
      <Toggle />
      {children}
    </div>
  );
}

export default Layout;