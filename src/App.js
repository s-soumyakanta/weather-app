import {React,useState, useEffect} from "react";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";
import Greetings from "./components/Greetings";
import Footer from "./components/Footer";
import { OPEN_WEATHER_API_KEY,OPEN_WEATHER_API_URL } from "./api";
// import Intro from "./components/Intro";


export default function App() {
  const [liveWeatherData,setLiveWeatherData] = useState(null)
  const [areaHistory,setAreaHistory] = useState([])
 


const geoDBData = (areaPositions) =>{

  const areaId = areaPositions.id
  const allAreaId = areaHistory.map(elem => elem.id)
  


  
  if(allAreaId.includes(areaId)){
      
  }else if(areaPositions.city === undefined){

  }
  else{

    setAreaHistory([...areaHistory,areaPositions])
  }

  
    const lat = areaPositions.latitude
    const lon = areaPositions.longitude

    console.log(lat,lon)
   const liveWeatherApiFetch = fetch(
      `${OPEN_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
      
    )

     
    const promise = Promise.resolve(liveWeatherApiFetch)
    promise.then(async(response)=>{
      const weatherResponseData = await response.json()
      setLiveWeatherData({...weatherResponseData})
    })
    .catch(console.log("ERROR while fetching open weather api"))
  }


  

  useEffect(()=>{
    
    const reveseArray = areaHistory.reverse()
     localStorage.setItem("recentSearches", JSON.stringify(reveseArray))
     
    
    },[areaHistory])


  return(

    <>

    <div className=" h-[100vh]  flex flex-col justify-between  bg-gradient-to-b via-slate-900 from-slate-700 to-slate-900  ">

<SearchBar searchData={geoDBData} />
<Greetings  />
{ liveWeatherData && <  WeatherInfo data = {liveWeatherData} />}
<Footer />
    </div>
    </>
    
  )
}
