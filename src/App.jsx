import Home from './pages/Home'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Login from './pages/Login'
import Player from './pages/Player'
import { onAuthStateChanged } from 'firebase/auth'
import {useEffect} from 'react'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'




function App() {

  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log('Loggin In')
        navigate('/')
      }else{
        console.log('Logged Out')
        navigate('/login')
      }
    })

  },[])


  return (

    <div className='min-h-screen bg-black text-white'>

     <ToastContainer theme='dark' />
 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>

      
      
    </div>
    
  )
}

export default App


