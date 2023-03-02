import React from 'react'
import javascript from '../assets/javascript.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import reactImage from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import node from '../assets/node.png';
import github from '../assets/github.png';


const Experience = () => {
  return (
    <div name='experience' className='bg-gradient-to-b  to-gray-800 from-black w-full h-screen'>
      <div className='max-w-screen-lg p4 mx-auto flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold p-2 inline border-b-4 border-gray-500'>Experience</p>
          <p className='py-6'>Technologies I have worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
            <img src={html} alt="" className='w-20 mx-auto' />
            <p className='mt-4'>HTML</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
