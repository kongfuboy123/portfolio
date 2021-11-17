# 使用useReducer+useContext ，实现darkMode功能

## 1 创建context-manager.js 文件

```javascript
import React from 'react';

export const MyContext = React.createContext(null);
```

## 2 创建Theme.js 文件 

```
import React, { useReducer } from "react";
import {MyContext} from './context-manager'
// 设置lightMode，darkMode
const lightMode = {type:'light',style:{background:'white',color:'black'}}
const darkMode = {type:'dark',style:{background:'black',color:'white'}}

const reducer = (state,action) => {
  switch (action.type) {
    case 'light':
      return lightMode;
    case 'dark':
      return darkMode;
    default:
      return state;
  }
}

function Theme({children}) {
  //使用useReducer，state 初始值为lightMode，并把{state,dispatch}zu传给所有被包括的组件
  const [state,dispatch] = useReducer(reducer,lightMode)
  return (
    <MyContext.Provider value={{state,dispatch}}>
      {children}
    </MyContext.Provider>
  );
}

export default Theme;
```

## 3 在index.js 文件中，使用Theme 包裹 App

```
import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './Theme'
import './index.css';
import App from './App';

ReactDOM.render(
  <Theme >
    <App />
  </Theme>,
  document.getElementById('root')
);
```

## 4 在App.js 中使用传入的theme.state ，用来设置darkMode或lightMode



```
import Intro from './components/Intro'
import About from './components/About'
import ProductList from './components/ProductList'
import Contact from './components/Contact'
import Toggle from './components/Toggle'
import {useContext} from 'react'
import {MyContext} from './context-manager'

function App() {
  //读取传入的theme的初始值，并把style赋值给App，通过style来设置背景色与字体色
  const theme = useContext(MyContext)
  console.log('theme',theme)
  return (
    <div className="App" style={theme.state.style}>
      <Toggle />
      <Intro />
      <About />
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
```

## 4 在Toggle.js 中使用传入的theme.dispatch，用来实现mode的切换

```
import React,{useContext} from 'react';
import styles from './Toggle.module.css'
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import {MyContext} from '../../context-manager'

function Toggle() {
  const theme = useContext(MyContext)
  
  return (
    <div className={styles.container}> 
      <img src={Sun} alt="" className={styles.icon} name='light' onClick={()=>theme.dispatch({type:'light'})} />
      <img src={Moon} alt="" className={styles.icon} name='dark' onClick={()=>theme.dispatch({type:'dark'})} />
      <div className={styles.btn} style={theme.state.type==='light'?{left:0}:{left:'25px'}} ></div>
    </div>
  );
}

export default Toggle;
```

