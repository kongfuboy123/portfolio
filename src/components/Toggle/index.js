import React from 'react';
import styles from './Toggle.module.css'
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
function Toggle({type,setMode}) {
  
  const lightMode = {type:'light',style:{background:'white',color:'black'}}
  const darkMode = {type:'dark',style:{background:'black',color:'white'}}
  const switchMode = (e) => {
    
    switch (e.target.name) {
      case 'light' :
        return setMode(lightMode)
      case 'dark' :
        return setMode(darkMode)
      default :
        return
    }
    
    
  }
  

  return (
    <div className={styles.container}> 
      <img src={Sun} alt="" className={styles.icon} name='light' onClick={e=>switchMode(e)}/>
      <img src={Moon} alt="" className={styles.icon} name='dark'onClick={e=>switchMode(e)}/>
      <div className={styles.btn} style={type==='light'?{left:0}:{left:'25px'}} ></div>
    </div>
  );
}

export default Toggle;