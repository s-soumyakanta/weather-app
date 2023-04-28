import React from 'react'

const Maps = () => {
  return (
    <>
    <div className='w-full h-full flex justify-center items-center  rounded-2xl bg-slate-600'>

    
    <div className="w-full h-full shadow-2xl   bg-slate-400 rounded-2xl overflow-hidden  flex items-center justify-center  relative">
    <iframe width="100%" height="100%" title="map" className="absolute inset-0" frameborder="0" marginHeight="0"
            marginWidth="0" scrolling="no" 
            src="https://maps.google.com/maps?q=28.7041,77.1025&hl=es&z=14&amp;output=embed">
          </iframe>
    </div>
    </div>
    </>
  )
}

export default Maps