import React from 'react';
import Product from '../Product'
import {products} from '../../data'
import styles from './ProductList.module.css'

function ProductList(props) {
  console.log('url')
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>Create & inspire</h1>
        <p className={styles.desc}>
        Lama is a creative portfolio that your work has been waiting for.
        Beautiful homes, stunning portfolio styles & a whole lot more awaits
        inside.
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