import React from 'react';
import {skills} from '../data'

function About(props) {
  console.log(skills)
  return (
    
    <div id='about' className='h-[50vh] px-5 grid grid-cols-1  md:  md:grid-cols-2 md: gap-4 md:place-items-center lg:h-screen dark:bg-gray-700 dark:text-white'>
      {/* left */}
      <div className='md:col-span-1 '>
        <div className='flex flex-col justify-center  '>
          <h1 className='text-xl font-bold mb-3 md:text-2xl lg:text-3xl'>My <span className='text-orange-500'>Skills</span></h1>
          <div className='flex flex-wrap'>
            {skills.map(skill =>(
              <a key={skill.id} link={skill.link} className='w-[60px] h-[60px]'>
                <img src={skill.img} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* right */}
      <div className='md:col-span-1 '>
        <div className='flex flex-col justify-center md: col-span-1'>
          <h1 className='text-xl font-bold mb-3 md:text-2xl lg:text-3xl'>About <span className='text-orange-500'>Me</span></h1>
          <p className='w-4/5 font-normal text-l md:text-xl lg:text-2xl '>
            I am a big fan of Dragon Ball and like front-end programming and the latest front-end technology. I can proficiently use front-end frameworks such as react and next.js, and back-end frameworks such as express and koa.
          </p>
        
        </div>
      </div>
    </div>
  );
}

export default About;