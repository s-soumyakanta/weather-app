import React from 'react'
import CompressOutlinedIcon from '@mui/icons-material/CompressOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useSelector } from 'react-redux';


Chart.register(ChartDataLabels);


const TodaysHighlight = () => {

  const {data:weatherData} = useSelector((state) => state.weather)
  const locationName = useSelector((state) => state.placeName)

  const sunrise = new Date(weatherData.sys.sunrise).getHours()% 12 || 12
  const sunset = (new Date(weatherData.sys.sunset).getHours()% 12 || 12)
  const sunriseMin = new Date(weatherData.sys.sunrise).getMinutes()
  const sunsetMin = new Date(weatherData.sys.sunset).getMinutes()
  const tempData = {
    labels:['min','max'],
    datasets: [
      {
        label: 'Tempreture',
        data: [ weatherData.main.temp_min, weatherData.main.temp_max],
        backgroundColor:[
          "#1d4ed8","#1d4ed8"], 
      }
    ],
   
  }

  const sunData ={
    labels:['sunrise','sunset'],
    datasets: [
      {
        label: 'Tempreture',
        data: [new Date(weatherData.sys.sunrise).getHours()% 12 || 12, new Date(weatherData.sys.sunset).getHours()% 12 || 12],
        backgroundColor:[
          "#1d4ed8","#1d4ed8"], 
      }
    ],
   
  }
 
  const speedData = {
    labels:['speed'],
    datasets: [
      {
        label: 'speed',
        data: [weatherData.wind.speed],
        backgroundColor:[
          "#1d4ed8"], 
      }
    ],
   
  }
  const directionData = {
    labels:['direction'],
    datasets: [
      {
        label: 'direction',
        data: [weatherData.wind.deg],
        backgroundColor:[
          "#1d4ed8"], 
      }
    ],
   
  }

  const options = {
    
    plugins: {
      datalabels: {
        display: true,
        color: "white",
        formatter: Math.round,
        anchor: "end",
      
        align: "start"
      }, 
      legend: {
        display: false
      }
    },
   
    
  }
  
  const windOptions = {
    
    plugins: {
      datalabels: {
        display: true,
        color: "white",
    
        anchor: "end",
      
        align: "start"
      }, 
      legend: {
        display: false
      }
    },
   
    
  }
  

  
  return (
  
    <>
   <div className="mt-3 rounded-2xl bg-white 
                   bg-opacity-60  shadow-sm
                   md:h-96  md:w-full
                   dark:bg-gray-800">

    <div className="md:h-[6%] p-2 pl-4">
      <h2 className='text-base'>Today's Highlight</h2>
    </div>
    <div className="space-y-8 p-4 md:space-y-3
                    md:h-[94%] md:flex md:flex-col
                    md:justify-between">
      <div className="space-y-3  md:flex 
                      md:space-y-0 md:space-x-3
                      md:h-4/6">
        <div className="h-64 rounded-2xl
                       md:w-[32%] md:h-auto
                       bg-white bg-opacity-80 
                        shadow-sm dark:bg-gray-700 ">

          <div className='h-full'>
            <div className='h-1/6  flex items-center pl-4'>
              <p className='text-lg font-lato '>Tempreture</p>
            </div>
            <div className=" h-3/6 w-full flex
                            justify-center items-center">
            <Bar data={tempData} options={options} />
            </div>
            <div className='h-2/6 flex items-center mx-4  justify-between '>
              
              <div className='w-3/6 flex font-semibold items-start flex-col  justify-center'>
                <p className=' text-base '>Feels like</p>
                <p className=' text-md '>{weatherData.main.feels_like}&deg;</p>
              </div>
              <div className='w-3/6 text-sm font-semibold flex items-end flex-col  h-full justify-evenly'>
                <p>min - {weatherData.main.temp_min}&deg;</p>
                <p>max - {weatherData.main.temp_max}&deg;</p>
                </div>
             
            </div>


          </div>
        </div>
        <div className=" h-64  rounded-2xl md:w-[32%]
                         md:h-auto  bg-white bg-opacity-80 
                         shadow-sm dark:bg-gray-700 ">
        <div className='h-full'>
            <div className='h-1/6  flex items-center pl-4 w-full'>
              <p className='text-lg  font-lato  '>Sunrise & Sunset</p>
            </div>
            <div className="body h-3/6 justify-center items-end  flex  mx-4">
            <Bar data={sunData} options={options} /> 
            </div>
            <div className='h-2/6 flex items-center  justify-between mx-4 '>
              
             
                <div className='font-semibold flex flex-col justify-center items-center'>
                  <p className='text-base'>Sunrise</p>
                  <p className='text-base'>{`${sunrise}:${sunriseMin}AM`}</p>
                </div>
                <div className='font-semibold flex flex-col justify-center items-center'>
                  <p className='text-base'>Sunset</p>
                  <p className='text-base'>{`${sunset}:${sunsetMin}PM`}</p>
                </div>
            </div>


          </div>
        </div>
        <div className="rounded-2xl bg-white
                        bg-opacity-80  shadow-sm
                        md:w-[32%] md:h-auto  dark:bg-gray-700 ">
        <div className='h-full'>
            <div className='h-1/6  flex items-center pl-4'>
              <p className='text-lg font-lato   '>Wind Status</p>
            </div>
            <div className="body h-3/6 flex justify-betwewn w-full items-center ">
            <div className='w-2/4 h-full flex items-end'>
              
            <Bar data={speedData} options={windOptions} />
              </div>
            <div className='w-2/4 h-full flex items-end '>
            <Bar data={directionData} options={options} />

            </div>
            </div>
            <div className='h-2/6 flex items-center  justify-between mx-4 py-4 space-x-2 '>
              
                <div className='font-semibold flex justify-center items-center flex-col'>
                  <p className='text-base'>Speed</p>
                  <p className='text-xs'>{weatherData.wind.speed}<span className='text-xs'>km/h</span></p>
                </div>
                <div className='font-semibold flex flex-col justify-center items-center'>
                  <p className='text-base'>Direction</p>
                  <p className='text-xs'>{weatherData.wind.deg}&deg;</p>
                </div>
            </div>


          </div>
        </div>

      </div>
      <div className="smallDivs space-y-3 
                      md:space-y-0 md:space-x-3 
                      md:h-2/6 md:flex md:w-full  ">
        <div className="h-28  rounded-2xl md:w-[32%]
                       bg-white bg-opacity-80  
                       shadow-sm dark:bg-gray-700 
                       md:h-auto ">
          <div className='h-full flex mx-4 md:mx-2'>
            <div className='w-3/6 flex flex-col justify-between  my-2 '>
              <p className="text-lg font-semibold font-ubuntu ">Pressure</p>
              <p className='text-2xl font-bold font-mono text-blue-800  dark:text-blue-600'>{weatherData.main.pressure}<span className='text-xs'>hPa</span></p>
            </div>
            <div className='w-3/6 flex flex-col-reverse mb-4 md:mb-1 space-y-2 md:pl-1 '>
              <p className='mt-2 text-xs'>Today {weatherData.main.pressure} hectopascal pressure at {locationName.length === 0 ? weatherData.name: locationName[0].name}</p>
              <CompressOutlinedIcon fontSize='small' />
            </div>
          </div>
        </div>
        <div className="h-28 rounded-2xl md:w-[32%]
                       bg-white bg-opacity-80  
                       shadow-sm dark:bg-gray-700 
                       md:h-auto ">
        <div className='h-full flex mx-4 md:mx-2 md:w-full'>
            <div className='w-3/6 flex flex-col justify-between my-2  '>
              <p className="text-lg font-semibold font-ubuntu  ">Humidity</p>
              <p className='text-2xl font-bold font-mono text-blue-800  dark:text-blue-600'>{weatherData.main.humidity}<span className='text-xs'>%</span></p>
            </div>
            <div className='w-3/6 flex flex-col-reverse mb-4 md:mb-1 space-y-2 md:pl-1 md:pr-2'>
              <p className='mt-2 text-xs'>Today {weatherData.main.humidity}% humidity at {locationName.length === 0 ? weatherData.name: locationName[0].name}</p>
              <WaterDropOutlinedIcon fontSize='small' />
            </div>

          </div>
        </div>
        <div className="h-28 rounded-2xl md:w-[32%]
                       bg-white bg-opacity-80  
                       shadow-sm dark:bg-gray-700 
                       md:h-auto ">
        <div className='h-full flex mx-4 md:mx-2'>
            <div className='w-3/6 flex flex-col justify-between my-2 '>
              <p className="text-lg font-semibold font-ubuntu  ">Visibility</p>
              <p className='text-2xl font-bold font-mono text-blue-800  dark:text-blue-600'>{weatherData.visibility}<span className='text-xs'>m</span></p>
            </div>
            <div className='w-3/6 flex flex-col-reverse mb-4 space-y-2 md:mb-1 md:pl-1   '>
              <p className='mt-2 text-xs'>Visibility upto {weatherData.visibility} meters at {locationName.length === 0 ? weatherData.name: locationName[0].name}</p>
              <VisibilityOutlinedIcon fontSize='small' />
            </div>

          </div>
        </div>

      </div>
    </div>
   </div>
    </>
  )
}

export default TodaysHighlight