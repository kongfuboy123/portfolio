import React from 'react';


function Product({img,link}) {
 
  return (
    <div className='rounded-lg overflow-hidden drop-shadow-lg h-[30vh] md:h-[35vh] lg:h-[40vh]'>
      <div className='h-5 bg-gray-400 flex items-center sticky z-20'>
        <div className='h-[6px] w-[6px] rounded-full bg-white mr-[3px] ml-3'></div>
        <div className='h-[6px] w-[6px] rounded-full bg-white mr-[3px]'></div>
        <div className='h-[6px] w-[6px] rounded-full bg-white mr-[3px]'></div>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} className='transition ease-in-out duration-10000 hover:-translate-y-full' alt=''/>
      </a>
    </div>
  );
}

export default Product;