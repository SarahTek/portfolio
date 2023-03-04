import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-10'>Hi 👋, My name is Sarah Teklemariam and I am a Frontend developer. I have a diverse background, having worked as a nurse assistant and in customer service for over 10 years. I also have a Bachelors in Business Management. Despite my non-technical background, I discovered a passion for coding when I first learned HTML and CSS in 2021. Since then, I have dedicated myself to improving my skills and have even joined Code Fellows to further my education. </p>
        <br />

        <p className='text-xl'>
          In addition to my technical skills, I also have experience working with people and am proficient in English as a second language. I am seeking a job as a Frontend Developer and believe that my diverse background, dedication to learning, and problem-solving abilities make me a strong candidate for any team.
        </p>
      </div>
    </div>
  )
}

export default About
