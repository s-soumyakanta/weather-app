import React from 'react'

const Forcast = () => {
  return (
    <>
     <div className='m-2  flex flex-col  '>
      <div>
        <h3>5 day forecast</h3>
      </div>
      <div className='flex overflow-x-auto'>

      <div className='w-36 rounded-2xl h-44 bg-emerald-400'>
        div1
      </div>
      <div className='w-36 rounded-2xl h-44 bg-emerald-400'>
        div2
      </div>
      <div className='w-36 rounded-2xl h-44 bg-emerald-400'>
        div3
      </div>
      <div className='w-36 rounded-2xl h-44 bg-emerald-400'>
        div4
      </div>
      <div className='w-36 rounded-2xl h-44 bg-emerald-400'>
        div5
      </div>
    
     </div>
      </div>
   
    </>
  )
}

export default Forcast