//import React from 'react'
import Nav from './Components/Navbar'
import photo from './images/logo.svg'
import {Home} from './Components/Home'
import {a,port} from './Components/asset'
import './App.css'
import Carouselle from './Components/Carouselle'
function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Carouselle></Carouselle>
      {`I have a ${a} and im in port ${port}`}
    </div>
    
  );
}

export default App;
