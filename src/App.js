
import Home from './pages/home'
import Login from './pages/login/login.js'
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
  const user = false
  return (
    <BrowserRouter>
      <Layout user={user}>
        <div className="App" style={theme.state.style}>
      
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="login" element={user?<Navigate to='/' />:<Login/>} />
          </Routes>
      
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
