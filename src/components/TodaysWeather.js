import {React,useEffect, useState} from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useSelector,useDispatch } from 'react-redux';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${date} ${month} ${year} ${day}`;
};



const TodaysWeather = () => {
  const [temp,setTemp] = useState(false)
  const {data:weatherData} = useSelector((state) => state.weather)
 const locationName = useSelector((state) => state.placeName)

 const tempretureInCelcious = Math.round(weatherData.main.temp)
 const tempretureInFahrenheit = Math.round(((Math.round(weatherData.main.temp))*9/5) +32)

  return (
    <>
     <div className='h-96 mt-3  rounded-2xl bg-white bg-opacity-90  shadow-sm dark:bg-gray-700  '>
    
      <div className="top flex flex-col items-center rounded-t-2xl h-3/4 pb-4">
        <div className='h-2/6  rounded-t-2xl w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-lato text-center pt-8'>{locationName.length === 0 ? weatherData.name: locationName[0].name}</p>
          <p className='text-lg font-mono '>{locationName.length === 0 ?  weatherData.sys.country:locationName[0].country }</p>
        </div>
        <div className='h-4/6 w-full  flex flex-col items-center justify-between  z-10'>
          <div className='h-4/6  w-full relative flex justify-center items-center '>

          <p className=' font-lato   text-7xl flex justify-center items-center text-blue-800  dark:text-blue-600'>
           {temp ? tempretureInFahrenheit:tempretureInCelcious}&deg;
            </p>
           <img src={images[weatherData.weather[0].icon.concat(".png")]} alt="Today weather img" className=' -z-10 w-1/4' />
          </div>
          <div className='h-1/6'>

            <p className=' text-xl font-ubuntu'>
             {weatherData.weather[0].description}
            </p>
          </div>
          <div className='h-1/6 flex font-ubuntu text-base  items-end  w-12 space-x-1 justify-center' onClick={()=> setTemp(!temp)}>

            <p className= {temp ? "text-sm font-semibold": 'font-bold text-lg'}>
            &deg;C 
            </p>
            <p>|</p>
            <p className={temp ? 'font-bold text-lg':"text-sm font-semibold"}>
             &deg;F
            </p>
          </div>

          
        </div>

      </div>
      <div className="bottom h-1/4 border-t-2  dark:border-gray-600 border-gray-300">
        <div className='flex w-full h-1/2  justify-start space-x-4 items-center'>
          <div className='flex justify-center items-center pl-2'>
            <AccessTimeIcon />
          </div>
          <div className='text-md font-semibold'>
            <p>{new Date().toLocaleTimeString()}</p>
          </div>
        </div>
        <div className='flex w-full h-1/2 justify-start space-x-4 items-center'>
          <div className='flex justify-center items-center pl-2'>
            <CalendarTodayIcon />
          </div>
          <div className='text-md font-semibold' >
            <p>{dateBuilder(new Date())}</p>
          </div>
        </div>
      </div>

     </div>
   
   </>
  )
}

export default TodaysWeather