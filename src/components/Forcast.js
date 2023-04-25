import React from 'react'
import img1 from "../assets/img1.png"

const Forcast = () => {
  return (
    <>
     <div className='m-2  mt-8 flex flex-col  '>
      <div>
        <h3 className='text-xl mb-4'>5 day forecast</h3>
      </div>
      <div className='flex bg-red-300  flex-row flex-wrap justify-center '>

      <div className='w-36 m-3 rounded-2xl h-52 flex   flex-col items-center  bg-emerald-400'>
        <p className='h-1/6 text-2xl  border-b-2 border-slate-500 w-4/5 pb-1 my-2 flex justify-center items-center'>Tue</p>
        <img src={img1} alt="img 1" className='h-3/6' />
        <p className='h-2/6 text-4xl flex w-full items-center justify-center'>45&deg;</p>
        
      </div>
      <div className='w-36 m-3 rounded-2xl h-52 flex   flex-col items-center  bg-emerald-400'>
        <p className='h-1/6 text-2xl  border-b-2 border-slate-500 w-4/5 pb-1 my-2 flex justify-center items-center'>Tue</p>
        <img src={img1} alt="img 1" className='h-3/6' />
        <p className='h-2/6 text-4xl flex w-full items-center justify-center'>45&deg;</p>
        
      </div>
      <div className='w-36 m-3 rounded-2xl h-52 flex   flex-col items-center  bg-emerald-400'>
        <p className='h-1/6 text-2xl  border-b-2 border-slate-500 w-4/5 pb-1 my-2 flex justify-center items-center'>Tue</p>
        <img src={img1} alt="img 1" className='h-3/6' />
        <p className='h-2/6 text-4xl flex w-full items-center justify-center'>45&deg;</p>
        
      </div>
      <div className='w-36 m-3 rounded-2xl h-52 flex   flex-col items-center  bg-emerald-400'>
        <p className='h-1/6 text-2xl  border-b-2 border-slate-500 w-4/5 pb-1 my-2 flex justify-center items-center'>Tue</p>
        <img src={img1} alt="img 1" className='h-3/6' />
        <p className='h-2/6 text-4xl flex w-full items-center justify-center'>45&deg;</p>
        
      </div>
      <div className='w-36 m-3 rounded-2xl h-52 flex   flex-col items-center  bg-emerald-400'>
        <p className='h-1/6 text-2xl  border-b-2 border-slate-500 w-4/5 pb-1 my-2 flex justify-center items-center'>Tue</p>
        <img src={img1} alt="img 1" className='h-3/6' />
        <p className='h-2/6 text-4xl flex w-full items-center justify-center'>45&deg;</p>
        
      </div>
    
     </div>
      </div>
   
    </>
  )
}

export default Forcast