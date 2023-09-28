import React from 'react';

const Home = () => {
  return (
    <div className=' md:flex-row md:gap-0 gap-14 flex-col flex justify-between md:px-20 px-4 py-10'>
      <div className=' md:w-1/2 w-full flex flex-col items-center justify-center'>
        <div>
        <h1 className='md:text-7xl text-5xl font-semibold'>I'M JAISHREE,</h1>
        <h1 className='md:text-5xl text-3xl md:text-left text-center'>a web developer</h1>
        </div>
      </div>
      <div className=' md:w-1/2 w-full flex md:justify-end justify-center'>
        <div><img className='md:w-96 w-60 md:h-96 h-60 rounded-full border-2 border-black/30 shadow-md shadow-gray-400' src="/images/jaishree.png" alt="not valid" /></div>
        </div>
    </div>
  )
}

export default Home;
