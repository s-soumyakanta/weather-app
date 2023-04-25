import React from 'react'
import Navbar from "./components/Navbar"
import TodaysWeather from "./components/TodaysWeather"
import TodaysHighlight from "./components/TodaysHighlight"
import Forecast from "./components/Forcast"
import Footer from "./components/Footer"


const App = () => {
  return (
    <>
      <div className='h-auto  bg-slate-700 md:h-[100vh]  p-4 space-y-2'>
          <div className='md:h-[7%] bg-slate-400 flex rounded-lg items-center'>
          <Navbar />
          </div>
          <div className='w-full flex flex-col h-auto  md:h-[88%] space-y-2 '>
            <div className="top flex w-full flex-col md:flex-row md:h-4/6 bg-slate-600 md:space-x-2">
             <div className="left md:w-2/6 bg-teal-400">
               <TodaysWeather />
             </div>
             <div className="right md:w-4/6 bg-slate-200">
               <TodaysHighlight />
            </div>
            </div>
            <div className="bottom w-full md:h-2/6 bg-slate-400 ">
          <Forecast />
            </div>
          </div>
          <div className='md:h-[5%] bg-yellow-500'>
            <Footer />
          </div>
        </div>
      
    </>
  )
}

export default App