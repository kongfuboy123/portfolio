import React,{useContext} from 'react';
import styles from './Toggle.module.css'
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import {MyContext} from '../../context-manager'
function Toggle() {
  
  
  const theme = useContext(MyContext)
  console.log(theme)
  return (
    <div className={styles.container}> 
      <img src={Sun} alt="" className={styles.icon} name='light' onClick={()=>theme.dispatch({type:'light'})} />
      <img src={Moon} alt="" className={styles.icon} name='dark' onClick={()=>theme.dispatch({type:'dark'})} />
      <div className={styles.btn} style={theme.state.type==='light'?{left:0}:{left:'25px'}} ></div>
    </div>
  );
}

export default Toggle;