import {useState} from 'react'
import Nav from "./components/Nav";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
function App() {
  const [dark,setDark]=useState(false);
  return (
    <div className={dark?"dark":''}>
      <Nav props={{dark,setDark}}/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
