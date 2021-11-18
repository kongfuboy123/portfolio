import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import Avatar from '../../img/ultra.png';
function Navbar({user}) {
  return (
    <div className={styles.container}>
      
      <Link to='/' className={`${styles.title} ${styles.link}`}>myPortfolio</Link> 
      
      <div >
        {user?(
           <ul className={styles.logBox}>
           <li className={styles.item}>
             <img src={Avatar} alt="" className={styles.avatar}/>
           </li>
           <li className={styles.item}>kongfuboy</li>
           <li className={styles.item}>Logout</li>
           
         </ul>
        ):(<Link to='login' className={`${styles.item} ${styles.link}`} >Login</Link>)
        }
       
      </div>
    </div>
  );
}

export default Navbar;