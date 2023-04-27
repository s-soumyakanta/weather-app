import {React, useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Navbar = () => {
  const [isSearchOn,setIsSearchOn] = useState(false)

  return(
  <>
    <nav className='flex w-full h-12 justify-between items-center bg-blue-600 rounded-2xl shadow-xl'>
      <div className='w-1/6 md:w-3/12 flex justify-between items-center'>
        <div className='md:hidden pl-2 '>
        <MenuRoundedIcon  fontSize='large' />
        </div>
        <div className=' hidden md:flex md:justify-center md:items-center md:space-x-12'>
          <div>
            <p className='ml-14 text-lg' >ClimaCast</p>
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

        <input type="text" className='bg-slate-300 h-8 w-full rounded-full flex justify-center items-center text-lg font-mono pl-7 outline-slate-600 ' />
        </div>
        <div className='absolute top-0 pl-1 h-8 flex justify-center items-center md:w-[50%] md:justify-start' >
          {
            isSearchOn ? <KeyboardBackspaceIcon />:
            <SearchOutlinedIcon />
          }
        </div>
      </div>
      <div className="darkmode w-1/6 md:w-1/12 flex justify-center items-center">
         <div className='w-12 h-6 bg-blue-200 flex justify-center items-center rounded-full '>
          dm
         </div>
      </div>
    </nav>
  </>
  )
}



export default Navbar