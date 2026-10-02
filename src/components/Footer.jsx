import React from 'react'
import youtube_icon from '../assets/youtube_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import instagram_icon from '../assets/instagram_icon.png'
import facebook_icon from '../assets/facebook_icon.png'





function Footer() { 



  return (

    <div className='footer py-[30px] px-[4%] max-w-[1000px] mx-auto'>

        <div className='footer-icons flex gap-[20px] my-[40px]'>
            <img src={facebook_icon}  alt=''  className='cursor-pointer w-[30px]'/>
            <img src={instagram_icon} alt=''  className='cursor-pointer w-[30px]'/>
            <img src={twitter_icon}   alt=''  className='cursor-pointer w-[30px]'/>
            <img src={youtube_icon}   alt=''  className='cursor-pointer w-[30px]'/>
        </div>

        <ul className='grid grid-cols-4 list-none gap-[15px]'>
            <li>Audio Description</li>
            <li>Help Center</li>
            <li>Gift Cards</li>
            <li>Media Centre</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
        </ul>
        
        <p className='text-gray-400 text-[14px] mt-[15px]'>@ 1997-2026 Netflix, Inc.</p>

    </div>

  )
}

export default Footer