import {React} from "react";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";
import Greetings from "./components/Greetings";
import Footer from "./components/Footer";

export default function App() {
  const geoDBData = (areaPositions) =>{
 
    const lat = areaPositions.latitude
    const lon = areaPositions.longitude
    console.log(lat,lon)
  }
  return(
    
    <div className="p-5 pb-2  h-[100vh]  flex flex-col justify-between bg-gradient-to-b via-purple-700 from-purple-500 to-purple-900">


<SearchBar searchData={geoDBData} />
<Greetings />
<WeatherInfo />
<Footer />
    </div>
    
  )
}
