import React from 'react'

const Footer = () => {
  return (
    <>
 <div className='flex felx-col justify-between px-2  space-x-10 md:text-base text-sm  mt-2 
                    shadow-sm  rounded-md'>
  <div>Developed by <span className='dark:text-blue-500 text-blue-800'><a href="https://s-soumyakanta.com" target='_blank' > S Soumyakanta </a></span></div>
  <div><a href="https://github.com/s-soumyakanta/weather-app"  target='_blank'> Source Code</a></div>
 </div>
    </>
  )
}

export default Footer