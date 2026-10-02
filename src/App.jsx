import React from 'react'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Player from './pages/Player'




function App() {



  return (

    <div className='min-h-screen bg-black text-white'>

      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>

      </BrowserRouter>
      
      
    </div>
    
  )
}

export default App