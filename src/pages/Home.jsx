import React from 'react'
import Navbar from '../components/Navbar'
import hero_banner from '../assets/hero_banner.jpg'
import hero_title from '../assets/hero_title.png'
import play_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'
import TitleCards from '../components/TitleCards'
import Footer from '../components/Footer'






function Home() {
  return (
    <div className='home'>
        <Navbar/>


        <div className='hero relative'>
          <img src={hero_banner} alt='' className='banner-img w-full [mask-image:linear-gradient(to_right,transparent,black_75%)]'/>

          <div className='hero-caption w-full absolute pl-[6%] pb-[1%] bottom-0 left-0'>
            <img src={hero_title} alt='' className='caption-img w-[90%] max-w-[420px] mb-[30px]'/>
            <p className='max-w-[700px] text-[17px] mb-[20px]'>Discovering his ties to a secret ancient order, a young 
              man livving in modern Istanbul embarks on a quest to save 
              the city from an immortal enemy.</p>

              <div className='hero-btns flex gap-[10px] mb-[50px]'>
                <button className='btn py-[10px] px-[20px] items-center gap-[10px] inline-flex
                                   font-semibold outline-0 border-0 bg-white rounded-[4px] cursor-pointer text-black hover:bg-[#ffffffbf]'>
                                  <img src={play_icon} alt='' className='w-[25px]'/>Play</button>

                <button className='btn-dark-btn  py-[10px] px-[20px] items-center gap-[10px] inline-flex
                                  font-semibold outline-0 border-0 rounded-[4px] cursor-pointer text-white 
                                   bg-[#6d6d6eb3] hover:bg-[#6d6d6e66]'>
                                  <img src={info_icon} alt='' className='w-[25px]'/>More Info</button>
              </div>
              
              <TitleCards/>

          </div>
        </div>

        <div className='more-cards pl-[6%]'>
              <TitleCards title={"Blockbuster Movies"} category={'top_rated'}/>
              <TitleCards title={"Only on Netflix"} category={'popular'}/>
              <TitleCards title={"Upcoming"} category={'upcoming'}/>
              <TitleCards title={"Top Pics for You"} category={'now_playing'}/>
        </div>

        <Footer/>
        
    </div>
  )
}

export default Home


 