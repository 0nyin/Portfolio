import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from "react-scroll"


function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#1c2131] '>

      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:-7xl font-bold text-[#ccd6f6]'>Onyinye Anyalewechi</h1>
        <h2 className='text-4xl sm:-7xl font-bold text-[#8892b0]'>I'am a Frontend Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[1700px]'>I am a frontend developer specializing in crafting exceptional user interfaces (UI) and user experiences (UX) for websites and web applications. 
          My primary focus is on the presentation layer, which encompasses everything users see and interact with directly in their web browsers.
          I leverage my expertise in HTML, CSS, Tailwind, JavaScript Reactjs,PHP, Wordpress and NodeJs to create visually appealing, responsive, and intuitive designs that enhance user engagement. By prioritizing usability and accessibility, I ensure that my projects provide seamless navigation and a positive overall experience for users. My goal is to bridge the gap between aesthetics and functionality, delivering solutions that not only look great but also perform efficiently.
        </p>
        
        <div>
          <Link  to="work" smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View work 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
            </span>
           </button>
           </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Home





