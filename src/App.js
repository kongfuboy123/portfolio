
import Home from './pages/home'
import Layout from './components/Layout'
import {useContext} from 'react'
import {MyContext} from './context-manager'

function App() {
  const theme = useContext(MyContext)

  return (
    <Layout>
      <div className="App" style={theme.state.style}>
        <Home />
      </div>
    </Layout>
  );
}

export default App;
