import {React} from "react";
import Navbar from "./components/Navbar";
import WeatherInfo from "./components/WeatherInfo";
import Greetings from "./components/Greetings";
import Footer from "./components/Footer";

export default function App() {
  return(
    
    <div className="p-5 pb-2  h-[100vh]  flex flex-col justify-between bg-gradient-to-b via-purple-700 from-purple-500 to-purple-900">


<Navbar />
<Greetings />
<WeatherInfo />
<Footer />
    </div>
    
  )
}
