import React from 'react'
import mclarion from '../assets/mcla.jpg'
import msoft from '../assets/msoft.jpg'
import pay from '../assets/pay.png'
import gali from '../assets/galitech.jpg'
import bridgetstore from '../assets/bridgetstore.png'
import aac from '../assets/aac.jpg'
import paymejo from '../assets/paymejo.jpg'
import dazzlingboss from '../assets/dazzling.png'
import mla from '../assets/mla.jpg'



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
          <div style={{backgroundImage: `url(${mclarion})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              Under Construction
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  
              </span>
              <div className='pt-8 text-center'>
                <a href='https://cla-six.vercel.app/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                {/* <a href='https://github.com/0nyin/wallet-web/tree/main/src' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a> */}
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${msoft})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                
              </span>
              <div className='pt-8 text-center'>
                <a href='https://msoft.mitiget.com.ng/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                {/* <a href='https://github.com/0nyin/Galitech-web' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a> */}
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${pay})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                
              </span>
              <div className='pt-8 text-center'>
                <a href='https://notalone.believersconnect.org/' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                <a href='/'>
                  {/* <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button> */}
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${gali})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  
              </span>
              <div className='pt-8 text-center'>
                <a href='https://galitechit.com/' target="_blank">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                
                <a href='https://github.com/0nyin/Router-project' target="_blank">
                  
                </a>
                {/* <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button> */}
              </div>
            </div>
          </div>

          
          <div style={{backgroundImage: `url(${bridgetstore})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  {/* React js Application */}
              </span>
              <div className='pt-8 text-center'>
                <a href='https://bridgetstore.com/' target="_blank">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                
                <a href='/#'>
                </a>
                {/* <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button> */}
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${aac})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  {/* React js Application */}
              </span>
              <div className='pt-8 text-center'>
                <a href='https://aacprofessionals.com/' target="_blank">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                
                <a href='/#'>
          
                </a>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
              </div>
            </div>
            
          </div>

          <div style={{backgroundImage: `url(${paymejo})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  {/* React js Application */}
              </span>
              <div className='pt-8 text-center'>
                <a href='https://app.paymejor.com.ng/' target="_blank">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                
                <a href='/#'>
                </a>
                {/* <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button> */}
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${dazzlingboss})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  {/* React js Application */}
              </span>
              <div className='pt-8 text-center'>
                <a href='https://dazzlingboss.com/' target="_blank">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                
                <a href='/#'>
                </a>
                {/* <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button> */}
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${mla})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  {/* React js Application */}
              </span>
              <div className='pt-8 text-center'>
                <a href='https://mla.mitiget.com/' target="_blank">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                
                <a href='/#'>
                </a>
                {/* <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Work
