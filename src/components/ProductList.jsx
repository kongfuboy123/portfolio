import React from 'react';
import Product from './Product'
import {products} from '../data'


function ProductList(props) {
  
  return (
    <div id='project' className='pt-[3.5rem] lg:h-screen dark:bg-gray-700 dark:text-white'>
      
      <h1 className='pl-4 text-xl font-bold mb-3 md:text-2xl lg:text-3xl'>My <span className='text-orange-500'> Projects </span></h1>
      
      
      <div className='grid grid-cols-1 gap-3 p-5 overflow-hidden md:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
        {products.map(product =>(
          <Product key={product.id} img={product.img} link={product.link} />
        ))}
     
      </div>
    </div>
  );
}

export default ProductList;