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
  //使用useReducer，state 初始值为lightMode，并把[state,dispatch]传给所有被包括的组件
  const [state,dispatch] = useReducer(reducer,lightMode)
  return (
    <MyContext.Provider value={{state,dispatch}}>
      {children}
    </MyContext.Provider>
  );
}

export default Theme;