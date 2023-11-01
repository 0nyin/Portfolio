import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-[100%] bg-[#1c2131] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/2fb2c1fa-ca97-42ce-a3d7-bbff5fc9b95c' className='flex flex-col max-w[600px] w-full'>
        <div className='pb-2 md:pl-20'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-6'>//Submit the form below or send an email - onyinnacho1234@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type='text'  placeholder='Name' name='name'/>
        <input className=' my-4 p-2 bg-[#ccd6f6] ' type='text'  placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message' />
        <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate</button>
      </form>
    </div>
  )
}

export default Contact
