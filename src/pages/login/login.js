import React from 'react';
import Google from '../../img/google.png'
import Facebook from '../../img/facebook.png'
import Github from '../../img/github.png'

import styles from './login.module.css'
function Login() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choose a Login Method</h1>
      
      <div className={styles.wrapper}>
        <div className={styles.left}>

          <div className={`${styles.loginBtn} ${styles.google}`}>
            <img src={Google} alt="" className={styles.icon} />
            <h1>Google</h1>
          </div>

          <div className={`${styles.loginBtn} ${styles.facebook}`}>
            <img src={Facebook} alt="" className={styles.icon} />
            <h1>Facebook</h1>
          </div>

          <div className={`${styles.loginBtn} ${styles.github}`}>
            <img src={Github} alt="" className={styles.icon} />
            <h1>Github</h1>
          </div>

        </div>
        <div className={styles.center}>
          <div className={styles.line} />
          <div className={styles.or}>OR</div>
        </div>
        <div className={styles.right}>
          <form className={styles.form}>
            <input type="text"  placeholder='username'/>
            <input type="password"  placeholder='password'/>
            <button className={styles.btn}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;