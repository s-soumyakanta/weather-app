import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'




function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));


const Forcast = () => {
  const {data:forecastData} = useSelector(state => state.forecast)
  const forecastIndex = [8,16,24,32,39]
  const forecastList = forecastData.list
  const [newForecastData,setNewForecastData] = useState(null)
  
  function getNewListOfForecast(){
    
    const newForecastList =[]
    forecastList?.map(item => {
      if(forecastIndex.includes(forecastList.indexOf(item))){
      newForecastList.push(item)
     }else{
  
     }
     return setNewForecastData(newForecastList)
   
    })
  }
  useEffect(()=>{
    setTimeout(()=>{

      getNewListOfForecast()
    },[1000])
  },[forecastData])

 
 const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]



  return (
    <>


    <div className='w-full h-full rounded-2xl 
                    flex flex-row overflow-x-scroll 
                    hide-scroll-bar  
                    bg-white bg-opacity-60  shadow-sm
                    dark:bg-gray-800 overflow-y-hidden '>
      <div className='w-2/6 md:w-1/6  flex justify-center 
                      items-center font-ubuntu font-bold 
                      text-2xl md:text-xl pl-2  rounded-l-2xl
                         bg-white bg-opacity-70  
                      shadow-sm dark:bg-gray-700 '>
        {newForecastData?.length} day forecast
      </div>
      <div className='flex w-4/6 md:w-5/6  '>
        <div className='flex overflow-x-scroll  hide-scroll-bar   '>

        
        <div className='flex flex-nowrap space-x-3   '>

    {
      newForecastData?.map(item =>{
        return(
          
<div className='inline-block' key={item.dt}>

    <div className='w-32 overflow-hidden  m-3 rounded-2xl
                    h-48 flex   flex-col items-center  
                    bg-white bg-opacity-80  shadow-sm 
                     dark:bg-gray-700 md:h-48 '>
        <p className='h-1/6 text-xl  border-b-2 
                     border-slate-500 w-4/5 pb-1 
                     my-2 flex justify-center items-center'>
                    {days[new Date(item.dt_txt).getUTCDay()]}
                   </p>
                   
        <img src={images[item.weather[0].icon.concat(".png")]} alt="Weather Forecast" className='h-3/6 object-contain' />
        <p className='h-2/6 text-4xl flex w-full items-center justify-center text-blue-800  dark:text-blue-600'>{Math.round(item.main.temp)}&deg;</p>
        
         </div>
</div>
        )
      })
    }

  
      </div>
      </div>
      </div>

    </div>
    
     {/* <div className='  mt-8 flex flex-col  justify-center md:mt-0  md:pt-4 md:flex-row md:w-full md:justify-evenly  md:h-full bg-slate-400 rounded-2xl  '>
      <div className='flex justify-center items-center  md:w-1/6'>
        <h3 className='text-xl mb-4 md:mb-0'> <span className='text-5xl text-white font-bold font-ubuntu'>5</span> day <span className='font-lato text-2xl'>forecast</span> </h3>
      </div>
      <div className='flex   flex-row overflow-x-scroll   md:overscroll-x-hidden p-4 justify-between bg-lime-500   md:justify-evenly md:h-full md:w-5/6    '>

<div className='inline-block md:flex'>
      
         <div className='w-36   m-3 rounded-2xl h-52 flex   flex-col items-center  md:h-4/5  bg-emerald-400'>
        <p className='h-1/6 text-2xl  border-b-2 border-slate-500 w-4/5 pb-1 my-2 flex justify-center items-center'>Tue</p>
        <img src={img1} alt="img 1" className='h-3/6' />
        <p className='h-2/6 text-4xl flex w-full items-center justify-center'>45&deg;</p>
        
         </div>
</div>   
<div className='inline-block md:flex'>


         <div className='w-36 m-3 rounded-2xl h-52 flex   flex-col items-center  md:h-4/5  bg-emerald-400'>
        <p className='h-1/6 text-2xl  border-b-2 border-slate-500 w-4/5 pb-1 my-2 flex justify-center items-center'>Tue</p>
        <img src={img1} alt="img 1" className='h-3/6' />
        <p className='h-2/6 text-4xl flex w-full items-center justify-center'>45&deg;</p>
        
         </div>
</div>
<div className='inline-block md:flex'>


         <div className='w-36 m-3 rounded-2xl h-52 flex   flex-col items-center  md:h-4/5 bg-emerald-400'>
        <p className='h-1/6 text-2xl  border-b-2 border-slate-500 w-4/5 pb-1 my-2 flex justify-center items-center'>Tue</p>
        <img src={img1} alt="img 1" className='h-3/6' />
        <p className='h-2/6 text-4xl flex w-full items-center justify-center'>45&deg;</p>
        
         </div>
</div>
<div className='inline-block md:flex'>


         <div className='w-36 m-3 rounded-2xl h-52 flex   flex-col items-center md:h-4/5 bg-emerald-400'>
        <p className='h-1/6 text-2xl  border-b-2 border-slate-500 w-4/5 pb-1 my-2 flex justify-center items-center'>Tue</p>
        <img src={img1} alt="img 1" className='h-3/6' />
        <p className='h-2/6 text-4xl flex w-full items-center justify-center'>45&deg;</p>
        
         </div>
</div>
<div className='inline-block md:flex'>


         <div className='w-36 m-3 rounded-2xl h-52  flex   flex-col items-center md:h-4/5 bg-emerald-400'>
        <p className='h-1/6 text-2xl  border-b-2 border-slate-500 w-4/5 pb-1 my-2 flex justify-center items-center'>Tue</p>
        <img src={img1} alt="img 1" className='h-3/6' />
        <p className='h-2/6 text-4xl flex w-full items-center justify-center'>45&deg;</p>
        
         </div>
    
</div>
     </div>
      </div> */}
     
    </>
  )
}

export default Forcast