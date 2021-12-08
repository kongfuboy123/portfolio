import React from 'react';
import styles from './Product.module.css'

function Product({img,link}) {
 
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} className={styles.img} alt=''/>
      </a>
    </div>
  );
}

export default Product;