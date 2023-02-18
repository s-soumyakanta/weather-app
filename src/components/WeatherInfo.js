import React from 'react'

import LittleFoggyPng from "../resources/LittleFoggy.png"

const WeatherInfo = () => {
  return (
    <>
    
      <div className='  h-[33rem] items-center flex flex-col justify-between '>
        

        <div className='flex relative items-center  flex-col w-full h-5/6 '>
          <h2 className='text-5xl text-gray-100'>New Delhi</h2>
         <p className='text-xl mt-2 text-gray-200'>Partially foggy</p>
          <p className='text-[9rem] z-0 -mt-6 text-gray-100 '>33° </p>
          {/* <p className='text-2xl  z-10'>C/F</p>  */}
          <div className='absolute bottom-0 selection:z-10 right-5 flex items-center justify-center w-52 h-52  border-none'>

          <img src={LittleFoggyPng} alt="Weather status" className='w-full h-full  '  />
          </div>
        </div>
        
       
        <div className='h-2/6 w-full p-3 bg-white bg-opacity-10    drop-shadow-lg rounded-3xl mt-4 flex justify-between'>
          <div className='rounded-lg w-20  bg-white bg-opacity-30    drop-shadow-lg text-gray-100 '>wind speed</div>
          <div className='rounded-lg w-20   bg-white bg-opacity-30    drop-shadow-lg text-gray-100'>humidity</div>
          <div className='rounded-lg w-20  bg-white bg-opacity-30    drop-shadow-lg text-gray-100'>rain</div>
        </div>
        </div>  
   
    </>
  )
}

export default WeatherInfo