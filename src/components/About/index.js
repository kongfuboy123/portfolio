import React from 'react';
import Award from '../../img/award.png';
import styles from './About.module.css';
function About(props) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.card,styles.bg}></div>
        <div className={styles.card}>
          <img 
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            alt=""  
            className={styles.img}/>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.subtitle}>
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className={styles.award}>
          <img src={Award} alt="" className={styles.awardImg} />
          <div className={styles.awardTexts}>
            <h4 className={styles.awardTitle}>International Design Awards 2021</h4>
            <p className={styles.awardDesc}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
     
      </div>
    </div>
  );
}

export default About;