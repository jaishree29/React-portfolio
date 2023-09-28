import React from 'react';
import {ImHtmlFive} from 'react-icons/im';
import {FaCss3, FaReact} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiTailwindcss} from 'react-icons/si';


const Skills = () => {

  return (
    <div className=' flex md:flex-row flex-col gap-7 p-16 justify-center'>
      <div className='bg-green-500 md:w-1/6 w-full p-20 gap-5 flex flex-col items-center font-semibold rounded-3xl'>
      <ImHtmlFive className='fill-red-500 text-8xl'/>
      <h1 className='text-white text-3xl'>HTML</h1>
      </div>
      <div className='bg-yellow-500 md:w-1/6 w-full p-20 gap-5 flex flex-col items-center font-semibold rounded-3xl'>
      <FaCss3 className='fill-blue-500 text-8xl'/>
      <h1 className='text-white text-3xl'>CSS</h1>
      </div>
      <div className='bg-red-500 md:w-1/6 w-full p-20 gap-5 flex flex-col items-center font-semibold rounded-3xl'>
      <IoLogoJavascript className='fill-yellow-500 text-8xl'/>
      <h1 className='text-white text-3xl'>JAVASCRIPT</h1>
      </div>
      <div className='bg-gray-500 md:w-1/6 w-full p-20 gap-5 flex flex-col items-center font-semibold rounded-3xl'>
      <FaReact  className='fill-blue-300 text-8xl'/>
      <h1 className='text-white text-3xl'>REACT</h1>
      </div>
      <div className='bg-blue-900 md:w-1/6 w-full p-20 gap-5 flex flex-col items-center font-semibold rounded-3xl'>
      <SiTailwindcss  className='fill-teal-500 text-8xl'/>
      <h1 className='text-white text-3xl'>TAILWIND</h1>
      </div>
    </div>
  )
}

export default Skills;
