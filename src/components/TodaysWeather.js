import React from 'react'
import img1 from "../assets/img1.png"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const TodaysWeather = () => {
  return (
   <>
     <div className='h-96 mt-6 m-2 rounded-2xl bg-blue-100'>
    
      <div className="top flex flex-col items-center rounded-t-2xl h-3/4 pb-4">
        <div className='h-2/6  rounded-t-2xl w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-lato '>Bhubaneswar</p>
          <p className='text-lg font-mono '> India</p>
        </div>
        <div className='h-4/6 w-full  flex flex-col items-center justify-between relative z-10'>
          <p className='h-4/6 font-lato   text-9xl flex justify-center items-center'>
            22
            </p>
            <p className='1/6 font-ubuntu'>
              partically  hot
            </p>
            <p className='1/6 font-bold text-sm font-ubuntu'>
            &deg;C | &deg;F
            </p>
           <img src={img1} alt="imgone" className='absolute bottom-0 right-0 -z-10' />

          
        </div>

      </div>
      <div className="bottom h-1/4 border-t-2  border-gray-400">
        <div className='flex w-full h-1/2  justify-start space-x-4 items-center'>
          <div className='flex justify-center items-center pl-2'>
            <AccessTimeIcon />
          </div>
          <div>
            <p>4:40 pm <span>| IST</span></p>
          </div>
        </div>
        <div className='flex w-full h-1/2 justify-start space-x-4 items-center'>
          <div className='flex justify-center items-center pl-2'>
            <CalendarTodayIcon />
          </div>
          <div>
            <p>24 may 2023 <span>Monday</span></p>
          </div>
        </div>
      </div>

     </div>
   
   </>
  )
}

export default TodaysWeather