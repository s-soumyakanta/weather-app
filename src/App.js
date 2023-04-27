import React from 'react'
import Navbar from "./components/Navbar"
import TodaysWeather from "./components/TodaysWeather"
import TodaysHighlight from "./components/TodaysHighlight"
import Forecast from "./components/Forcast"
import Footer from "./components/Footer"
import Maps from './components/Maps'


const App = () => {
  return (
    <>
      <div className='h-auto       drop-shadow-lg md:h-[100vh]  p-4 space-y-1'>
          <div className='md:h-[7%]   bg-opacity-30    drop-shadow-lg flex rounded-lg items-center'>
          <Navbar />
          </div>
          <div className='w-full flex flex-col h-auto  md:h-[88%] space-y-4 '>
            <div className="top flex w-full flex-col md:flex-row md:h-4/6  md:space-x-4">
             <div className="left md:w-2/6">
               <TodaysWeather />
             </div>
             <div className="right md:w-4/6">
               <TodaysHighlight />
            </div>
            </div>
            <div className="bottom w-full md:h-2/6 md:space-x-4 flex h-auto   ">
              <div className='md:w-2/6 rounded-2xl h-auto  flex justify-center items-center '>
                <Maps />

              </div>
              <div className='md:w-4/6 bg-red-500 rounded-2xl overflow-x-scroll  hide-scroll-bar'>

          <Forecast />
              </div>
            </div>
          </div>
          <div className='md:h-[5%]'>
            <Footer />
          </div>
        </div>
      
    </>
  )
}

export default App