import React from 'react';
import {skills} from '../../data'
import styles from './About.module.css';
function About(props) {
  console.log(skills)
  return (
    
    <div id='about' className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>My <span>Skills</span></h1>
        <div className={styles.list}>
          {skills.map(skill =>(
            <a key={skill.id} link={skill.link} className={styles.skill}>
              <img src={skill.img} alt="" />
            </a>
          ))}
        </div>
        
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>About <span>Me</span></h1>
        <p className={styles.desc}>
        I am a big fan of Dragon Ball and like front-end programming and the latest front-end technology. I can proficiently use front-end frameworks such as react and next.js, and back-end frameworks such as express and koa.
        </p>
        
     
      </div>
    </div>
  );
}

export default About;