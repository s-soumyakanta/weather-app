import {React} from 'react'
import { MapContainer ,TileLayer, Marker } from 'react-leaflet'
import {OPEN_WEATHER_API_KEY} from "../api"
import { Icon } from 'leaflet'
import { useSelector } from 'react-redux'


const Maps = () => {

  const locationData = useSelector((state)=> state.map)
 const position = [locationData[0].lat, locationData[0].lon]

const url = `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${OPEN_WEATHER_API_KEY}`

const icon = new Icon({
  iconUrl:require("../assets/placeholder.png"),
  iconSize:[24,24]
})
 return (
    <>
    <div className='w-full h-full z-0 relative'>
  
  

     <MapContainer center={position} zoom={11}>
       <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      <TileLayer
      attribution='POK & Aksai Chin is integral part of India. Correct <a href="https://surveyofindia.gov.in/documents/polmap-eng-11012021.jpg">map</a> of India.'
        url={url}
      
      />
      <Marker position={position}  icon={icon}>

        </Marker>
     </MapContainer>
 
    

    </div>
    </>
  )
}

export default Maps















































































// import {React, useState} from 'react'
// import { useSelector } from 'react-redux'
// import useEffect from 'react'

// const Maps = () => {
//   const {locationDetail:locationData} = useSelector((state) => state.location)
//   const [data,setData] = useState({})
//   useEffect(()=>{
//          const lat = locationData[0]?.latitude
//          const lon = locationData[0]?.longitude 
//          setData({lat:lat,lon:lon})
//   },[locationData])
//   return (
//     <>
//     <div className='w-full h-full flex justify-center items-center  rounded-2xl bg-slate-600'>

    
//     <div className="w-full h-full shadow-2xl   bg-slate-400 rounded-2xl overflow-hidden  flex items-center justify-center  relative">
//     <iframe width="100%" height="100%" title="map" className="absolute inset-0" frameBorder="0" marginHeight="0"
//             marginWidth="0" scrolling="no" 
//             src={`https://maps.google.com/maps?q=${data?.lat},${data?.lon}&hl=es&z=14&amp;output=embed`}>
//           </iframe>
//     </div>
//     </div>
//     </>
//   )
// }

// export default Maps