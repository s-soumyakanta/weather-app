import {React,useState} from 'react'
import SearchIcon from "./../resources/search.png"

const Navbar = () => {
  const [searhHistory,setSearchHistoy] = useState(false)
  return (
    <>
    <div className='flex justify-center relative font-ubuntu ' onClick={()=> setSearchHistoy(!searhHistory) }>


    <header className=' flex h-12 items-center rounded-full w-full   justify-between '>
        <form className='h-full rounded-l-full  w-full ' >
          <input placeholder='Search a location...' type="text"   className= 'rounded-l-full px-3 text-lg w-full h-full  bg-gray-200 text-black'/>
        </form>
        <div className=' h-full py-3 flex items-center rounded-r-full bg-gray-200 px-2 cursor-pointer ' ><img src={SearchIcon} alt="Search Icon"   /></div>

    </header>
    {
      searhHistory ===false?

    <div className='px-2 pb-3 z-10 bg-slate-300 drop-shadow-lg bg-opacity-100 absolute mt-16 rounded-lg w-full '>
      <div className='flex mt-4  '>
        <div className=' text-lg bg-slate-100 rounded-full px-2'>My Location</div>
        <div className=' text-lg bg-slate-100 rounded-full px-2 ml-8  '> Remove My Location</div>
      </div>
      <div>
        <div className='text-lg text-purple-600 my-2 '>Recent Searches</div>
        <div >

        <div className=' text-lg bg-slate-100 rounded-full px-2 mx-1 my-2 inline-block'>Delhi</div>
        <div className=' text-lg bg-slate-100 rounded-full px-2 mx-1 my-2 inline-block'>Bhubaneswar</div>
        <div className=' text-lg bg-slate-100 rounded-full px-2 mx-1 my-2 inline-block'>Pune</div>
        <div className=' text-lg bg-slate-100 rounded-full px-2 mx-1 my-2 inline-block'>Punjab</div>
        <div className=' text-lg bg-slate-100 rounded-full px-2 mx-1 my-2 inline-block'>Kerala</div>
        <div className=' text-lg bg-slate-100 rounded-full px-2 mx-1 my-2 inline-block'>Tamilnadu</div>
        <div className=' text-lg bg-slate-100 rounded-full px-2 mx-1 my-2 inline-block'>Assam</div>
        <div className=' text-lg bg-slate-100 rounded-full px-2 mx-1 my-2 inline-block'>Madhyapradesh</div>
        <div className=' text-lg bg-slate-100 rounded-full px-2 mx-1 my-2 inline-block'>Bihar</div>
        </div>
      </div>
    </div>:''
    }
    </div>
    
        </>
  )
}

export default Navbar