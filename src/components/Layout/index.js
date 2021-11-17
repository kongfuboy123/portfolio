import React from 'react';
import Navbar from '../Navbar';
function Layout({children}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;