import React from 'react';
import Navbar from '../Navbar';
import styles from './Layout.module.css'

function Layout({children}) {

  
  return (
    <div className={styles.container} >
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;