import React  from 'react'
import Navbar from "./components/Navbar"
import TodaysWeather from "./components/TodaysWeather"
import TodaysHighlight from "./components/TodaysHighlight"
import Forecast from "./components/Forcast"
import Footer from "./components/Footer"
import Maps from './components/Maps'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchWeather } from './store/Slices/weatherSlice'
import { STATUSES } from './store/Slices/locationSlice'
import SkeletonUI from './components/SkeletonUI'
import { fetchForcast } from './store/Slices/forecastSlice'
import { locateAreaOnMap } from './store/Slices/mapSlice'
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import {makePlaceNameEmpty} from "./store/Slices/placeNameSlice"

const App = () => {
  const {data:weatherData,status} = useSelector(state => state.weather)

  const dispatch = useDispatch()
 
  function WeatherBody(){
    return(
      <>
          <div className='w-full flex flex-col h-auto  md:h-[88%] space-y-2 '>
        <div className="top flex w-full flex-col md:flex-row md:h-4/6  md:space-x-4">
         <div className="left md:w-2/6">
           <TodaysWeather />
         </div>
         <div className="right md:w-4/6">
           <TodaysHighlight />
        </div>
        </div>
        <div className="bottom w-full md:h-2/6 md:space-x-4 flex h-auto md:flex-row flex-col   ">
          <div className='md:w-2/6 h-52 rounded-2xl md:h-auto  flex justify-center items-center '>
            <Maps />
          </div>
          <div className='md:w-4/6  rounded-2xl overflow-x-scroll  hide-scroll-bar '>
            <Forecast />
          </div>
        </div>
      </div>
              
      </>
    )
  }
  function WelCome(){
    if(status === STATUSES.LOADING){
      return(
        
<SkeletonUI />
     
        

      )
    }
    return(
      <>
        <div className='w-full flex   md:h-[88%] h-[80vh]  justify-center items-center  '>
          <div className='flex flex-col space-y-5 justify-center items-center bg-white bg-opacity-30 dark:bg-slate-800 text-center p-4 rounded-2xl max-w-md'>
            <h1 className='font-bold text-lg dark:text-gray-100'>Welcome to <span className='text-blue-700'>Climacast !</span> <br />Stay updated with the latest weather forecasts and conditions.</h1>
            <p className='text-base font-semibold dark:text-gray-200 '>Stay one step ahead of the weather - find out what's coming your way! Use our search option or let us track your current location to get accurate and up-to-date weather information.</p>
            <button className='text-lg p-2 rounded-full bg-blue-700 text-white' onClick={geoLocation}>Use my current location</button>
          </div>
        </div>
      </>
    )
  }

  function AppBody(){
    return(
      <>
      {
        weatherData.length === 0 ? <WelCome />:<WeatherBody />
      }
      </>
    )
  }

  function geoLocation(){
    let userLocation = navigator.geolocation
    if(userLocation) {
      userLocation.getCurrentPosition(success);
   } else {
      console.warn(" Access Denied by user")
   }
  }

  function success(data) {
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    dispatch(fetchWeather({lat,lon}))
    dispatch(fetchForcast({lat,lon}))
    dispatch(locateAreaOnMap({lat:lat,lon:lon}))
    dispatch(makePlaceNameEmpty())
 }

  return (
    <>
      <div className='h-[100vh]   p-4 space-y-1 relative bg-slate-400 dark:bg-gray-900 dark:text-gray-50 overflow-y-scroll'>
          <div className='md:h-[7%]   bg-opacity-30     flex rounded-lg items-center sticky top-0 z-20'>
          <Navbar />
          </div>
    
           {
            status === STATUSES.LOADING ? <SkeletonUI />:<AppBody/>
           
          }
          
          
          <div className='md:h-[5%] md:absolute relative bottom-0'>
            <Footer />
          </div>
          <div className='w-16 h-16 bg-blue-700
                    shadow-sm  rounded-full  md:bottom-6 md:right-0 sticky  bottom-1 left-[100%]    z-20  flex justify-center  items-center text-white cursor-pointer' onClick={geoLocation}>
                      <MyLocationOutlinedIcon fontSize='large'  />
                    </div>
        </div>
      
    </>
  )
}

export default App