
import logo from '../assets/logo.png'
import search_icon from '../assets/search_icon.svg'
import bell_icon from '../assets/bell_icon.svg'
import profile_img from '../assets/profile_img.png'
import caret_icon from '../assets/caret_icon.svg'
import {useRef, useEffect} from 'react'





function Navbar() {
  const navRef = useRef()


  useEffect(()=>{
   window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 80){
      navRef.current.classList.add('bg-[#141414]')
    }else{
      navRef.current.classList.remove('bg-[#141414]')
    }
   })
  },[])

  


  return (

    <div  ref={navRef} className='Navbar w-full py-[20px] px-[6%] flex justify-between fixed text-[15px] 
                   text-[#e5e5e5] bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_10%,transparent)] 
                   z-[1] font-[Josefin Sans]'>

      <div className='navbar-left flex items-center gap-[50px] '>
        <img src={logo} alt='' className='w-[90px]'></img>
        <ul className='flex gap-[20px] list-none'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Tv Shows</li>
          <li className='cursor-pointer'>Movies</li>
          <li className='cursor-pointer'>New & Popular</li>
          <li className='cursor-pointer'>My List</li>
          <li className='cursor-pointer'>Browse by Languages</li>
        </ul>
      </div>


      <div className='navbar-right flex items-center gap-[20px] ml-[410px]'>
        <img src={search_icon} alt='' className='icons w-[20px] cursor-pointer'></img>
        <h1>Children</h1>
        <img src={bell_icon} alt='' className='icons w-[20px] cursor-pointer'></img>
      </div>


      <div className='Navbar-profile group flex items-center gap-[10px] cursor-pointer relative'>
        <img src={profile_img} alt='' className='profile w-[35px] rounded-[4px]'></img>
        <img src={caret_icon} alt='' className='icons'></img>
        <div className='dropdown absolute top-full right-0 w-max bg-[#191919] py-[18px] px-[22px] 
                        rounded-[2px] underline z-[1] hidden group-hover:block'>
          <p className='text-[13px] cursor-pointer'>Sign Out of Netflix</p>
        </div>
      </div>

    </div>

  )
}

export default Navbar



