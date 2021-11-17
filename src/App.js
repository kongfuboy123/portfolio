import Intro from './components/Intro'
import About from './components/About'
import ProductList from './components/ProductList'
import Contact from './components/Contact'
import Toggle from './components/Toggle'
import {useContext} from 'react'
import {MyContext} from './context-manager'

function App() {
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
