import React from 'react'
import MainP from './container/MainP.jsx';
import './App.css'
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Login from './container/Login.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<MainP/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App