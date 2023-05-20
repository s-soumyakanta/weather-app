import {React, useState,useEffect,useCallback } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useSelector,useDispatch } from 'react-redux';
import { fetchLocations } from '../store/Slices/locationSlice';
import { fetchWeather } from '../store/Slices/weatherSlice';
import { fetchForcast } from '../store/Slices/forecastSlice';
import { getLocationDetail } from '../store/Slices/locationSlice';
import {locateAreaOnMap} from "../store/Slices/mapSlice";
import { geoDbPlaceName } from '../store/Slices/placeNameSlice';

const Navbar = () => {
  const [isSearchOn,setIsSearchOn] = useState(false);
  const [toggleDarkMode,setToggleDarkMode] = useState(false)
  const root = document.documentElement.classList
  const {data:locationsList} = useSelector(state => state.location)
  const {locationDetail:location} = useSelector((state)=> state.location)

  const dispatch = useDispatch();
  

  useEffect(()=>{
    toggleDarkMode === true ? 
                       root.add('dark')
                      : root.remove("dark")
  },[toggleDarkMode])
  

  
  function specificLocation(area){
    const lat = area.latitude;
    const lon = area.longitude;
    const country = area.country;
    const name = area.name;
    dispatch(fetchWeather({lat,lon}))
    dispatch(fetchForcast({lat,lon}))
    dispatch(locateAreaOnMap({lat:lat,lon:lon}))
    dispatch(geoDbPlaceName({name:name,country:country}))
    
    
    
    const allAreaName = location.map(elem => elem.name)
    
    if(allAreaName.includes(name)){ 
    }
    else{
      dispatch(getLocationDetail({name:name,country:country,latitude:lat,longitude:lon}))
    }
  }

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        timer = null;
        // setSearch(args);
        func.apply(context, args);
      }, 500);
    };
  };
  
  const doApiCall= (event)=>{
    const {value} = event.target; 
    dispatch(fetchLocations(value))
  }
  const getRelatedLocations = useCallback(debounce(doApiCall),[])

  return(
  <>
    <nav id='nav' className='flex w-full h-12 justify-between 
                    items-center  rounded-2xl
                    bg-white bg-opacity-90 
                    shadow-sm dark:bg-gray-700'>

      <div className='w-1/6 flex md:w-3/12
                     justify-center items-center'>

        <p className='text-xs  text-blue-700 hidden
                      font-ubuntu font-bold md:block md:text-lg'>
                      WeatherSnap
        </p>
        <p className=' text-blue-700 md:hidden
                      font-ubuntu font-bold md:text-lg'>
                      ws
        </p>

      </div>

      
      <div className='w-4/6 flex justify-start relative items-center bg-slate-100 dark:bg-slate-800 rounded-full' onClick={()=>setIsSearchOn(!isSearchOn)}>
        <div className='h-full w-full flex items-center  justify-between px-2'>
        <div className=' w-[8%] flex justify-center items-center' onClick={(e)=>{e.stopPropagation();setIsSearchOn(!isSearchOn)}} >
        <div>
          {
            isSearchOn ? <KeyboardBackspaceIcon />:
            <SearchOutlinedIcon />
          }
        </div>
        </div>
          <div className='w-[92%] '>

          <input type="text" className=' w-full pl-2 h-7 bg-slate-100 rounded-r-full
                      outline-none 
                      darK:text-white dark:bg-slate-800' 
           placeholder='Search a location...'
           onChange={getRelatedLocations} />
          </div>
          </div>
          <div  className='absolute w-full '>
          {
            isSearchOn ?
              <div className='w-full p-2 bg-white
                              absolute top-0 mt-12 
                              rounded-2xl space-y-1
                               dark:bg-gray-800 '>

            <div className="searchResults space-y-1">
              {
                locationsList?.map((AllLocation) =>{
                  return(
                     <p className='bg-slate-200 rounded-2xl
                                   pl-2 text-md dark:bg-gray-600
                                   dark:text-white cursor-pointer' 
                                   onClick={()=> specificLocation(AllLocation)} 
                                   key={AllLocation.id}>
                                  {AllLocation.name}
                        </p>
                )
                })
              }
              </div>
            <div className="pb-2">
              <div>
                 <p className='text-blue-900 dark:text-blue-200'>
                    Recent Serches
                 </p>
              </div>
              <div className='flex   flex-wrap'>
                {
                  location?.map((searches)=>{
                    return(
                      <div onClick={()=> specificLocation(searches)} 
                      className='relative'>

                        <p className='bg-slate-200 px-2 m-2 w-fit  rounded-2xl dark:bg-gray-600 cursor-pointer'>{searches.name}</p>
                        </div>

                    )
                  })
                }
                 </div>
            </div>
          </div> :''
          }

      
        </div>
      </div>

      <div className=" w-1/6 md:w-1/12 
                     flex justify-center items-center">
         <div className='w-12 h-6 
                         flex justify-center items-center
                         rounded-full '
               >
          
<label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" />
  <div onClick={()=>{setToggleDarkMode(!toggleDarkMode)}} className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
</div>
      </div>
    </nav>
  </>
  )
}



export default Navbar