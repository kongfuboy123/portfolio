import React from 'react';
import Typed from 'react-typed';
import Me from '../img/me.png';
function Intro(props) {
  return (
    <div id="intro" className='pt-4 h-[calc(50vh-3.5rem)] sm:pt-0  sm:grid md:grid-cols-3 sm:gap-4 lg:h-[calc(100vh-3.5rem)] lg:grid lg:grid-cols-2 dark:bg-gray-700 dark:text-white'>
      {/* left */}
      <div className='hidden md:block  md:relative '>
        <div className='md:clip-bg-style'></div>
        <img src={Me} alt="" className='sm:w-full h-full absolute z-10'/>
      </div>
      {/* right */}
      <div className='flex flex-col items-center justify-center md：h-1/2 col-span-2 lg:col-span-1' >
        <h2 className='pt-2 text-l sm:text-xl md:2xl'>Hello, My name is</h2> 
        <h1 className='p-3 text-3xl font-bold'>Jack Wang</h1>
        {/* <div className='h-[50px] overflow-hidden'>
          <div className='ease-in-out duration-500 infinite '>
            <div className='h-[50px] text-3xl font-bold text-orange-500 flex items-center'> <h3>Web Developer</h3></div> 
            <div className='h-[50px] text-3xl font-bold text-orange-500 flex items-center'><h3>JavaScript Developer</h3></div> 
            <div className='h-[50px] text-3xl font-bold text-orange-500 flex items-center'><h3>Frontend Engineer</h3></div> 
            <div className='h-[50px] text-3xl font-bold text-orange-500 flex items-center'><h3>Newwork Engineer</h3></div> 
          </div>
        </div> */}
        <Typed className='pl-2 text-l font-bold text-orange-500 sm:text-2xl ' strings={['Web Developer','JavaScript Developer','Network Engineer']} typeSpeed={120} backSpeed={100} loop/> 
        <p className='text-xl sm:w-1/2 sm:text-l p-5'>
            I provide design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
        </p> 
      </div>
     
    </div>
  );
} 

export default Intro;