import Intro from './components/Intro'
import About from './components/About'
import ProductList from './components/ProductList'
import Contact from './components/Contact'
import Toggle from './components/Toggle'
import {useState} from 'react'
function App() {
  const initMode = {type:'light',style:{background:'white',color:'black'}}
  
  const [mode,setMode] = useState(initMode);
  console.log('mode',mode)
  return (
    <div className="App" style={mode.style}>
      <Toggle type={mode.type} setMode={setMode}/>
      <Intro />
      <About />
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
