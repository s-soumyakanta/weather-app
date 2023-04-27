import React from 'react'
import CompressOutlinedIcon from '@mui/icons-material/CompressOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2';
Chart.register(ChartDataLabels);
const TodaysHighlight = () => {
  const tempData = {
    labels:['min','max'],
    datasets: [
      {
        label: 'Tempreture',
        data: [ 17, 40],
        backgroundColor:[
          'rgba(255,206,86,0.2)','rgba(255,99,132,0.2)'
        ],
        
      }
    ],
   
  }
  
  const tempOptions = {
    plugins: {
      datalabels: {
        display: true,
        color: "black",
        formatter: Math.round,
        anchor: "end",
        offset: -20,
        align: "start"
      }
    },
    legend: {
      display: false
    }
  }

  const sunData = {
    labels:["time"],
    datasets: [
      {
        label: 'Tempreture',
        data: [ 4,8],
        backgroundColor:[
          'rgba(255,206,86,0.2)','rgba(255,99,132,0.2)'
        ],
        
        borderWidth:1,
        borderColor:['rgba(0,0,0,0.2)']
       
      }
    ],
   
  }
  const sunOptions ={
    rotation: -90,
    circumference: 180,
  }
  const speedData = {
    labels:["speed",'sdf'],
    datasets: [
      {
        label: 'Tempreture',
        data: [4,5 ],
      }
    ],
    backgroundColor:[
      'rgba(255,206,86,0.2)','rgba(255,99,132,0.2)'
    ],
    
    borderWidth:1,
    borderColor:['rgba(0,0,0,0.2)']
   
    
  
   

   
  }
  const speedOptions ={
    rotation: -90,
    circumference: 180,
    
  }
  return (
    <>
   <div className="mainDiv  mt-6 md:h-96 bg-blue-700 bg-opacity-10  rounded-2xl  drop-shadow-lg md:w-full  ">
    <div className="topHeading md:h-[6%] p-2 pl-4 ">
      <h2 className='text-base'>Today's Highlight</h2>
    </div>
    <div className="bottomMainDiv space-y-8 p-4 md:space-y-3 md:h-[94%] md:flex md:flex-col md:justify-between">
      <div className="bigDivs space-y-3  md:flex md:space-y-0 md:space-x-3 md:h-4/6 ">
        <div className="div1 h-64 bg-slate-300 rounded-2xl md:w-1/3 md:h-auto">

          <div className='h-full'>
            <div className='h-1/6  flex items-center pl-4'>
              <p className='text-lg font-lato'>Tempreture</p>
            </div>
            <div className="body h-3/6 w-full flex justify-center items-center">
            <Bar data={tempData} options={tempOptions} />
            </div>
            <div className='h-2/6 flex items-center  justify-between '>
              
              <div className='w-2/6 flex items-center flex-col justify-center'>
                <p className='  font-ubuntu text-sm'>Feels like</p>
                <p className=' text-2xl '>45&deg;</p>
              </div>
              <div className='w-4/6 text-sm font-semibold flex  flex-col items-end pr-8'>
                <p>min - 25</p>
                <p>max -36</p>
                </div>
             
            </div>


          </div>
        </div>
        <div className="div2 h-64 bg-slate-300 rounded-2xl md:w-1/3 md:h-auto">
        <div className='h-full'>
            <div className='h-1/6  flex items-center pl-4 w-full'>
              <p className='text-lg  font-lato'>Sunrise & Sunset</p>
            </div>
            <div className="body h-3/6  flex  mx-4">
              <div className='w-2/4'>

              <Doughnut data={sunData} options={sunOptions}/>
              </div>
              <div className='w-2/4 flex justify-end'>

              <Doughnut data={sunData} options={sunOptions}/>
              </div>
            </div>
            <div className='h-2/6 flex items-center  justify-between mx-4 '>
              
             
                <div className='font-semibold'>
                  <p className='text-base'>Sunrise</p>
                  <p className='text-lg'>06:44 AM</p>
                </div>
                <div className='font-semibold'>
                  <p className='text-base'>Sunset</p>
                  <p className='text-lg'>05:44 PM</p>
                </div>
            </div>


          </div>
        </div>
        <div className="div1 h-64 bg-slate-300 rounded-2xl md:w-1/3 md:h-auto">
        <div className='h-full'>
            <div className='h-1/6  flex items-center pl-4'>
              <p className='text-lg font-lato'>Wind Status</p>
            </div>
            <div className="body h-3/6 flex justify-center w-full items-center">
            <Doughnut data={speedData} options={speedOptions}/>
            </div>
            <div className='h-2/6 flex items-center  justify-between mx-4 '>
              
             
                <div className='font-semibold'>
                  <p className='text-base'>Speed</p>
                  <p className='text-lg'>54<span className='text-lg'>km/h</span></p>
                </div>
                <div className='font-semibold'>
                  <p className='text-base'>Direction</p>
                  <p className='text-lg'>140&deg;</p>
                </div>
            </div>


          </div>
        </div>

      </div>
      <div className="smallDivs space-y-3 md:space-y-0 md:space-x-3 md:h-2/6 md:flex md:w-full  ">
        <div className="div1 h-28 md:h-auto bg-fuchsia-300 rounded-2xl md:w-1/3  ">
          <div className='h-full flex mx-4 md:mx-2'>
            <div className='w-3/6 flex flex-col justify-between  my-2 '>
              <p className="text-lg font-semibold font-ubuntu">Pressure</p>
              <p className='text-4xl font-bold font-mono'>54</p>
            </div>
            <div className='w-3/6 flex flex-col-reverse mb-4 md:mb-1 space-y-2 md:pl-1 '>
              <p className='mt-2 text-xs'>this kind of pressuer is suitable</p>
              <CompressOutlinedIcon fontSize='small' />
            </div>

          </div>
        </div>
        <div className="div1 h-28 md:h-auto bg-fuchsia-400 rounded-2xl md:w-1/3">
        <div className='h-full flex mx-4 md:mx-2 md:w-full'>
            <div className='w-3/6 flex flex-col justify-between my-2  '>
              <p className="text-lg font-semibold font-ubuntu">Humidity</p>
              <p className='text-4xl font-bold font-mono'>54</p>
            </div>
            <div className='w-3/6 flex flex-col-reverse mb-4 md:mb-1 space-y-2 md:pl-1'>
              <p className='mt-2 text-xs'>this kind of pressuer is suitable</p>
              <WaterDropOutlinedIcon fontSize='small' />
            </div>

          </div>
        </div>
        <div className="div1 h-28 bg-fuchsia-500 rounded-2xl md:w-1/3 md:h-auto">
        <div className='h-full flex mx-4 md:mx-2'>
            <div className='w-3/6 flex flex-col justify-between my-2 '>
              <p className="text-lg font-semibold font-ubuntu">Visibility</p>
              <p className='text-4xl font-bold font-mono'>54</p>
            </div>
            <div className='w-3/6 flex flex-col-reverse mb-4 space-y-2 md:mb-1 md:pl-1 '>
              <p className='mt-2 text-xs'>this kind of pressuer is suitable</p>
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