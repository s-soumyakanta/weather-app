import React from 'react';
import humidity from "../resources/humidity.png"
import cloud from "../resources/cloud.png"
import wind from "../resources/wind_speed.png"


const WeatherInfo = ({data}) => {
  console.log('Weather info rendered')
  return (
    <>
    
      <div className='px-6  h-[36rem] items-center flex flex-col justify-between font-poppins font-thin md:mx-32'>
        

        <div className='flex relative items-center justify-center flex-col w-full h-5/6 '>
          <h2 className='text-4xl text-gray-50 text-center font-lato font-bold '>{data.name}</h2>
         <p className='text-2xl mt-4 z-20 text-gray-200 font-bold font-ubuntu'>{data.weather[0].description}</p>
          <p className='text-[9rem] z-10 -mt-6 text-yellow-500 font-lato'>{Math.round(data.main.temp)}° </p>
          {/* <p className='text-2xl  z-10'>C/F</p>  */}
          <div className='absolute w-full h-full flex items-center justify-center  '>
          <img
          alt="weather"
          className=" w-full h-full mt-20 z-0 md:mx-72 "
          src={` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        />
          </div>
        </div>
        
       
        <div className='h-2/6 w-full  p-3 bg-white bg-opacity-10    drop-shadow-lg rounded-3xl mt-1 flex justify-between font-ubuntu md:justify-around'>
          <div className='rounded-lg w-20  bg-white bg-opacity-30    drop-shadow-lg text-gray-100 flex flex-col justify-between items-center font-bold '><p className='text-center text-base my-2'>Wind</p>
            <img src={wind} alt="wind speed " />
            <div className='flex items-baseline'>

            <p className='text-xl  '>{data.wind.speed}</p>
            <p className='text-xs'> km/h</p>
            </div>
          
          </div>
          <div className='rounded-lg w-20   bg-white bg-opacity-30    drop-shadow-lg text-gray-100 flex flex-col justify-between items-center font-bold '><p className='text-center text-base my-2'>Humidity</p>
            <img src={humidity} alt="humidity " />
            <div className='flex items-baseline'>

            <p className='text-xl'>{data.main.humidity}</p>
            <p className='text-xs'>%</p>
            
            </div>
            </div>
          <div className='rounded-lg w-20  bg-white bg-opacity-30    drop-shadow-lg text-gray-100 flex flex-col justify-between items-center font-bold'><p className='text-center text-base my-2'>Cloud</p>
            <img src={cloud} alt="cloud count " />

            <div className='flex items-baseline'>

            <p className='text-xl'>{data.clouds.all}</p>
            <p className='text-xs'>th</p>
            
            </div>
            </div>
        </div>
        </div>  
   
    </>
  )
}

export default WeatherInfo