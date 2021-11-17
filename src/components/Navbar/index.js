import React from 'react';
import styles from './Navbar.module.css'
import Avatar from '../../img/ultra.png';
function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>myPortfolio</h1> 
      </div>
      <div >
        <ul className={styles.logBox}>
          <li className={styles.item}>
            <img src={Avatar} alt="" className={styles.avatar}/>
          </li>
          <li className={styles.item}>kongfuboy</li>
          <li className={styles.item}>Logout</li>
          
        </ul>
      </div>
    </div>
  );
}

export default Navbar;