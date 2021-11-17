
import Home from './pages/home'
import Login from './pages/login/login.js'
import Layout from './components/Layout'
import {useContext} from 'react'
import {MyContext} from './context-manager'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const theme = useContext(MyContext)

  return (
    <Layout>
      <div className="App" style={theme.state.style}>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Layout>
  );
}

export default App;
