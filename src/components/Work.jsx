import React from 'react'
import wallet from '../assets/wallet.png'
import galitech from '../assets/galitech.png'
import pay from '../assets/pay.png'
import van from '../assets/van.png'
import color from '../assets/cap.png'
import airbnb from '../assets/air.png'

function Work() {
  return (
    <div name='work' className='w-full  md:h-[100%]   text-gray-300 bg-[#1c2131]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'> Work </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* container */}
        <div className='grid sm:grid-cols-2  md:grid-cols-3 gap-6'>

          {/* grid items */}
          <div style={{backgroundImage: `url(${wallet})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  React js Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://fascinating-pudding-5bb4c0.netlify.app/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/0nyin/wallet-web/tree/main/src' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${galitech})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  React js Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://galitech-web.vercel.app' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/0nyin/Galitech-web' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${pay})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  Wordpress Website
              </span>
              <div className='pt-8 text-center'>
                <a href='https://notalone.believersconnect.org/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  {/* <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button> */}
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${van})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  React js Application
              </span>
              <div className='pt-8 text-center'>
                <a href='#'>
                  
                </a>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                <a href='https://github.com/0nyin/Router-project' target="_blank">
                  
                </a>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
              </div>
            </div>
          </div>

          
          <div style={{backgroundImage: `url(${color})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  React js Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/#'>
                </a>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                <a href='/#'>
                </a>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${airbnb})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  React js Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/#'>
                  
                </a>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                <a href='/#'>
          
                </a>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Work
