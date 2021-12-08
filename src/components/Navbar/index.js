import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom'
import {navList} from '../../data'
import {MyContext} from '../../context-manager'
import Toggle from '../Toggle';
import styles from './Navbar.module.css'

function Navbar() {
  const [open, setOpen] = useState(false);
 
  return (
    <div className={styles.container}>
      
      <Link to='/' className={`${styles.title} ${styles.link}`}>myPortfolio</Link> 
      {/* <div className={styles.iconWrapper}>
          <ul className={styles.iconList}>
            <li className={styles.icon} onClick={()=>setWidth('100vw')}><svg t="1637905559746" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9255" width="32" height="32"><path d="M928 832 544 832l0 64 144 0c19.2 0 32 12.8 32 32s-12.8 32-32 32L320 960c-19.2 0-32-12.8-32-32s12.8-32 32-32l160 0 0-64L96 832c-35.2 0-64-28.8-64-64L32 128c0-35.2 28.8-64 64-64l832 0c35.2 0 64 28.8 64 64l0 640C992 803.2 963.2 832 928 832zM928 128 96 128l0 640 384 0 64 0 384 0L928 128z" p-id="9256" fill="#ffffff"></path></svg></li>
            <li className={styles.icon} onClick={()=>setWidth('960px')}><svg t="1637905806528" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10016" width="32" height="32"><path d="M783.959995 947.106726 240.068657 947.106726c-30.03813 0-54.390771-24.340361-54.390771-54.386678L185.677886 131.268696c0-30.03506 24.353664-54.375421 54.390771-54.375421l543.891338 0c30.033014 0 54.362118 24.340361 54.362118 54.375421l0 761.451352C838.31802 922.766364 813.993009 947.106726 783.959995 947.106726L783.959995 947.106726 783.959995 947.106726zM512.01228 919.91134c15.019065 0 27.195386-12.164041 27.195386-27.191292 0-15.019065-12.180414-27.195386-27.195386-27.195386-15.019065 0-27.195386 12.17632-27.195386 27.195386C484.816894 907.747299 496.993215 919.91134 512.01228 919.91134L512.01228 919.91134 512.01228 919.91134zM756.76461 158.464081 267.25995 158.464081l0 679.865195 489.50466 0L756.76461 158.464081 756.76461 158.464081 756.76461 158.464081zM756.76461 158.464081" p-id="10017" fill="#ffffff"></path></svg></li>
            <li className={styles.icon} onClick={()=>setWidth('480px')}><svg t="1637905200749" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3781" width="32" height="32"><path d="M735.968 800L288 800.256V672h447.968v128zM288 223.744L288.032 224 736 223.744 735.968 608H288V223.744zM735.968 160H288.032A63.968 63.968 0 0 0 224 223.744v576.512C224 835.392 252.704 864 288.032 864h447.936A63.968 63.968 0 0 0 800 800.256V223.744A63.968 63.968 0 0 0 735.968 160z" p-id="3782" fill="#ffffff"></path><path d="M480 768h64a32 32 0 0 0 0-64h-64a32 32 0 0 0 0 64" p-id="3783" fill="#ffffff"></path></svg></li>
          </ul>
      </div> */}
      <div className={styles.navWrapper}>
        <ul className={styles.navList}>
          {navList.map(item =>(
            <li key={item.id} >
              <a className={`${styles.navItem} ${styles.link}`} href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={styles.menu} style={{ right: open ? "0px" : "-50vw" }}>
     
          {navList.map(item =>(
            <li key={item.id} >
              <a className={`${styles.menuItem} ${styles.link}`} href={item.href}>{item.title}</a>
            </li>
          ))}
      </ul>
      <Toggle />
    </div>
  );
}

export default Navbar;