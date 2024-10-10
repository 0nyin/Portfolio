import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javacript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import wordpress from '../assets/wordpress.png'
import php from '../assets/php.svg'
import github from '../assets/github.png'


function Skills() {
  return (
    <div name='skills' className='w-full h-[100%] bg-[#1c2131] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>these are the technologies i have worked with</p>
            </div>

            <div className='w-full  grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#240c16] hover:scale-110 duration 500'>
                    <img className='w-20 mx-auto' src={html} alt='HTML icon' />
                    <p className='my-4'>HTML</p>
                </div>
                {/* <div className='shadow-md shadow-[#240c16] hover:scale-110 duration 500'>
                    <img className='w-20 mx-auto' src={css} alt=' CSS icon' />
                    <p className='my-4'> CSS</p>
                </div> */}
                <div className='shadow-md shadow-[#240c16] hover:scale-110 duration 500'>
                    <img className='w-20 mx-auto' src={javacript} alt='Javascript icon' />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#240c16] hover:scale-110 duration 500'>
                    <img className='w-20 mx-auto' src={react} alt='Reactjs icon' />
                    <p className='my-4'>REACTJS</p>
                </div>
                <div className='shadow-md shadow-[#240c16] hover:scale-110 duration 500'>
                    <img className='w-20 mx-auto' src={tailwind} alt='Tailwind icon' />
                    <p className='my-4'>TAILWIND CSS</p>
                </div>
                <div className='shadow-md shadow-[#240c16] hover:scale-110 duration 500'>
                    <img className='w-20 mx-auto' src={node} alt='Node icon' />
                    <p className='my-4'>NODEJS</p>
                </div>
                <div className='shadow-md shadow-[#240c16] hover:scale-110 duration 500'>
                    <img className='w-20 mx-auto' src={wordpress} alt='Wordpress icon' />
                    <p className='my-4'>WORDPRESS</p>
                </div>
                <div className='shadow-md shadow-[#240c16] hover:scale-110 duration 500 '>
                    <img className='w-20 mx-auto mt-7' src={php} alt='PHP icon' />
                    <p className='my-4'>PHP</p>
                </div>
                <div className='shadow-md shadow-[#240c16] hover:scale-110 duration 500'>
                    <img className='w-20 mx-auto' src={github} alt='github icon' />
                    <p className='my-1'>GITHUB</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
