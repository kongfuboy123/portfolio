
import Home from './pages/home'
import {useContext} from 'react'
import {MyContext} from './context-manager'

function App() {
  const theme = useContext(MyContext)

  return (
    <div className="App" style={theme.state.style}>
     <Home />
    </div>
  );
}

export default App;
