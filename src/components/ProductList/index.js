import React from 'react';
import Product from '../Product'
import {products} from '../../data'
import styles from './ProductList.module.css'

function ProductList(props) {
  
  return (
    <div id='project' className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>My <span> Projects </span></h1>
        <p className={styles.desc}>
        Here are some projects I've worked on recently.
        </p>
      </div>
      <div className={styles.list}>
        {products.map(product =>(
          <Product key={product.id} img={product.img} link={product.link} />
        ))}
     
      </div>
    </div>
  );
}

export default ProductList;