import React from 'react'
import whereTo from '../assets/Portfolio/whereTo.png'
import mentorConnect from '../assets/Portfolio/mentorConnect.png'
import goTrek from '../assets/Portfolio/goTrek.png'
import pexels from '../assets/Portfolio/pexels.png'
import pexels2 from '../assets/Portfolio/pexels2.png'
import pexels3 from '../assets/Portfolio/pexels3.png'



const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: whereTo
    },
    {
      id: 2,
      src: mentorConnect
    },
    {
      id: 3,
      src: goTrek
    },
    {
      id: 4,
      src: pexels
    },
    {
      id: 5,
      src: pexels2
    },
    {
      id: 6,
      src: pexels3
    },
  ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>checkout some of my work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {
            portfolios.map(({ id, src }) => (

              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt=""
                  className='rounded-md duration-200 hover:scale-105'
                />
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
              </div>
            ))
          }
        </div>


      </div>
    </div>
  )
}

export default Portfolio
