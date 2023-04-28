import {React, useState,useEffect } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Navbar = () => {
  const [isSearchOn,setIsSearchOn] = useState(false);
  const [toggleDarkMode,setToggleDarkMode] = useState(false)
  const root = document.documentElement.classList

  useEffect(()=>{
    toggleDarkMode === true? root.add('dark'): root.remove("dark")

  },[toggleDarkMode])
  
  
  return(
  <>
    <nav className='flex w-full h-12 justify-between items-center  rounded-full  bg-white bg-opacity-90  shadow-sm dark:bg-gray-700 '>
      <div className='w-1/6 md:w-3/12 flex justify-between items-center'>
        <div className='md:hidden pl-2 '>
        <MenuRoundedIcon  fontSize='large' />
        </div>
        <div className=' hidden md:flex md:justify-center md:items-center md:space-x-12'>
          <div>
            <p className='ml-14 text-lg font-ubuntu' >ClimaCast</p>
            </div>
            <div className='flex space-x-3'>

            <LocationOnOutlinedIcon/>
          <p className='flex'>
            Delhi
            </p>
            <KeyboardArrowDownOutlinedIcon/>
            </div>
        </div>
      </div>
      <div className="search md:flex md:justify-center md:items-center w-4/6 md:w-8/12 relative " onClick={()=>setIsSearchOn(!isSearchOn)}>
        <div  className='md:w-[50%] '>

        <input type="text" className=' bg-neutral-300 h-8 w-full rounded-full flex justify-center items-center text-lg font-mono pl-7 outline-slate-600 ' />
        </div>
        <div className='absolute top-0 pl-1 h-8 flex justify-center items-center md:w-[50%] md:justify-start text-gray-900' >
          {
            isSearchOn ? <KeyboardBackspaceIcon />:
            <SearchOutlinedIcon />
          }
        </div>
      </div>
      <div className="darkmode w-1/6 md:w-1/12 flex justify-center items-center">
         <div className='w-12 h-6  flex justify-center items-center rounded-full ' >
            
<label class="relative inline-flex items-center cursor-pointer" >
  <input type="checkbox" value="" class="sr-only peer" />
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" onClick={()=>{setToggleDarkMode(!toggleDarkMode)}}></div>
</label>

         </div>
      </div>
    </nav>
  </>
  )
}



export default Navbar