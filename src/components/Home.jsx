import React from 'react';
import HeroImage from "../assets/heroImage.png"
import { MdOutlineArrowRight } from "react-icons/md"
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div name="home"
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'> I'm a Frontend Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Hi everyone, my name is Sarah Teklemariam and I am a software developer. I have a diverse background, having worked as a nurse assistant and in customer service for over 7 years. I also have a business degree. Despite my non-technical background, I discovered a passion for coding when I first learned HTML and CSS in 2021. Since then, I have dedicated myself to improving my skills and have even joined Code Fellows to further my education.

          </p>
          <div>
            <Link to='portfolio' smooth duration={500} className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='hover:rotate-90 duration-300 '>
                <MdOutlineArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my profile pic "
            className='rounded-2xl mx-auto w-2/3 md:w-200 ' />
        </div>
      </div>
    </div>
  )
}

export default Home
