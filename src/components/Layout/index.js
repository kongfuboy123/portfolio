import React from 'react';
import Navbar from '../Navbar';
import Toggle from '../Toggle';

function Layout({children,user}) {
  
  return (
    <div>
      <Navbar user={user} />
      <Toggle />
      {children}
    </div>
  );
}

export default Layout;