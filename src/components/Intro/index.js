import styles from './Intro.module.css'

import React from 'react';
import Me from '../../img/me.png';
function Intro(props) {
  return (
    <div id="intro" className={styles.container}>
       <div className={styles.left}>
        <div className={styles.meBg}></div>
        <img src={Me} alt="" className={styles.me}/>
      </div>
      <div className={styles.right} >
        <h2 className={styles.greeting}>Hello, My name is</h2> 
        <h1 className={styles.name}>Jack Wang</h1>
        <div className={styles.myTitle}>
          <div className={styles.titleWrapper}>
            <div className={styles.titleItem}><h3>Web Developer</h3></div> 
            <div className={styles.titleItem}><h3>JavaScript Developer</h3></div> 
            <div className={styles.titleItem}><h3>Frontend Engineer</h3></div> 
            <div className={styles.titleItem}><h3>Newwork Engineer</h3></div> 
          </div>
        </div>
        <p className={styles.desc}>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
        </p> 
      </div>
     
    </div>
  );
} 

export default Intro;