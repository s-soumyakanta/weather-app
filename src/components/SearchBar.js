import { React, useCallback, useState } from "react";
import { geoDbOptions, GEODB_API_URL } from "../api";
import searchIcon from "./../resources/search.png";
import arrowBack from "./../resources/arrow_back.png";
import clear from "./../resources/close.png";

const SearchBar = ({ searchData }) => {
  const [searhHistory, setSearchHistoy] = useState(true);
  const [search, setSearch] = useState([]);
  const allSearches = JSON.parse(localStorage.getItem("recentSearches"))


  const handleChange = (event) => {
    const { value } = event.target;
    
    
    fetch(
      `${GEODB_API_URL}/cities?minPopulation=10&namePrefix=${value}`,
      geoDbOptions
    )
      .then((response) => response.json())

      .then((jsonData) => setSearch(jsonData.data))

      .catch((err) => console.error(err));
    
  };
  
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        timer = null;
        // setSearch(args);
        func.apply(context, args);
      }, 500);
    };
  };

  // const optimizedData = debounce(handleChange)
  const optimizedData = useCallback(debounce(handleChange), []);


  function geoLocation(){
    let userLocation = navigator.geolocation
    if(userLocation) {
      userLocation.getCurrentPosition(success);
   } else {
      console.warn(" Access Denied by user")
   }
  }

  function success(data) {
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    console.log(data)
    let elem = {latitude:lat,longitude:lon}
    searchData(elem)
    setSearchHistoy(true)
 }
  return (
    <>
      <div className="p-6 flex justify-center relative font-ubuntu   md:mx-32   ">

        <div className="flex items-center w-full rounded-full h-12 bg-gray-200 drop-shadow-2xl  text-black " >
          <div className={searhHistory ===false ? "w-0.5/6 rounded-l-full ml-1":"w-0.5/6 rounded-l-full ml-1 hidden"} onClick={() => setSearchHistoy(true)}>
            <img src={arrowBack} alt="back icon" className="w-8 h-8 cursor-pointer " />
          </div>
          <div className="w-5/6 h-full  " onClick={() => setSearchHistoy(false)}>
            <form className="h-full w-full  " >
              <input
                placeholder="Search a location"
                type="text" 
                onChange={optimizedData}
                className="w-full h-full text-center focus:outline-none bg-gray-200 text-black  text-lg rounded-l-full"
                
              />
            </form>
          </div>
          <div className="w-0.5/6 flex justify-end rounded-r-full mr-2 " onClick={() => setSearchHistoy(false)}>
            {
              searhHistory === false ? null:
              // <img src={clear} alt="clear icon" className="w-8 h-8 cursor-pointer" />:
              <img src={searchIcon} alt="search icon" className="w-8 h-8 cursor-pointer" />
            }
          </div>
        </div>


        {/* 
    <header className=' flex h-12 items-center rounded-full w-full   justify-between '>
        <form className='h-full   w-full ' >
          <input placeholder='Search a location...' type="text" onChange={optimizedData}   className= 'rounded-l-full px-3 text-lg w-full h-full  bg-gray-200 text-black'/>
        </form>
        <div className=' h-full py-3 flex items-center justify-center rounded-r-full bg-gray-200 px-2 cursor-pointer ' >{searhHistory === true ? <img src={searchIcon} alt="Search Icon" className='w-10 h-10'   />:<img src={clear} alt="Input feild clear icon" className='w-10 h-10' />}</div>

    </header> */}

    

        {/* <div className='px-2 pb-3 z-10 bg-slate-300 drop-shadow-lg bg-opacity-100 absolute mt-16 rounded-lg w-full '>
      {
        search.length > 0 &&
        <div className='autoComplete'>
          {search.map((elem) =>
          <div key={elem.id} className='text-lg bg-slate-100 rounded-full px-2 mx-1 my-2'>
            <span>{elem.name}</span>

          </div>)}
        </div>
      }
      </div> */}
        {searhHistory === false ? (
          <div className="px-2 pb-3 z-30 bg-slate-300 drop-shadow-lg bg-opacity-100 absolute mt-16 rounded-lg w-full ">
            {
        search?.length > 0 &&
        <div className='autoComplete' onClick={()=> setSearchHistoy(true)}>
          {search?.map((elem) =>
          <div key={elem.id} className='text-lg cursor-pointer bg-slate-100 rounded-full px-2 mx-1 my-2' onClick={() =>searchData(elem)}>
            <span>{elem.name}</span>

          </div>)}
        </div>
      }
            <div className="flex mt-6  ">
              <div className=" text-lg cursor-pointer bg-slate-100 rounded-full px-2" onClick={geoLocation}>
               My Location
              </div>
             
            </div>
            <div>
              <div className="text-lg text-purple-600 my-2   ">
                Recent Searches
              </div>
              <div onClick={()=> setSearchHistoy(true)}>
                {
                
                allSearches.map((elem)=>{
                  return(

                <div className=" text-lg bg-slate-100 rounded-full px-2 mx-1 my-2 inline-block" key={elem.id} onClick={() =>searchData(elem)}>
                  {elem.name}
                </div>
                  )
                })}
               
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default SearchBar;
