import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#1c2131] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                    About
                </p>
            </div>

            <div></div>

        </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, nice to meet you , please take a look around</p>
                </div>
                    <div>
                        <p>I am passionate about building an excellent website and web application that improves
                          the lives of those around me. I specialize in creating website and web application
                          for clients ranging from individuals and small-businesses all the
                          way to large enterprise corporations. What would you do if you had
                          a frontend expert available at your fingertips?
                        </p>
                    </div>
            </div>
            
      
      </div>
    </div>
  )
}

export default About

