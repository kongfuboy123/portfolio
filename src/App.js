
import Home from './pages/home'
import Layout from './components/Layout'
import {useContext} from 'react'
import {MyContext} from './context-manager'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const theme = useContext(MyContext)

  return (
    <BrowserRouter>
      <Layout>
        <div className="App" style={theme.state.style}>
      
          <Routes>
            <Route path="/" element={<Home/>} />
 
          </Routes>
      
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
