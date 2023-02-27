import React from 'react';
import HeroImage from "../assets/heroImage.png"
import { MdOutlineArrowRightAlt } from "react-icons/md"
const Home = () => {
  return (
    <div name="home"
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'> I'm a Frontend Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Hi everyone, my name is Sarah Teklemariam and I am a software developer. I have a diverse background, having worked as a nurse assistant and in customer service for over 7 years. I also have a business degree. Despite my non-technical background, I discovered a passion for coding when I first learned HTML and CSS in 2021. Since then, I have dedicated myself to improving my skills and have even joined Code Fellows to further my education. In addition to my technical skills, I also have experience working with people and am proficient in English as a second language. I am seeking a job as a software developer and believe that my diverse background, dedication to learning, and problem-solving abilities make me a strong candidate for any team.

          </p>
          <div>
            <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <MdOutlineArrowRightAlt />
            </button>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my profile pic "
            className='rounded-2xl mx-auto w-2/3 ' />
        </div>
      </div>
    </div>
  )
}

export default Home
