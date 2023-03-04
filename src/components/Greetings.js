import {React} from 'react'
// import close from "../../src/resources/close.png"

const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};

const messageBuild = (hour)=>{
  let welcomeLine = ""
  if (hour < 12){
    welcomeLine = "Good Morning !"
  }
    
else if (hour < 18) {
  welcomeLine = "Good Afternoon !"}
else{
  welcomeLine = "Good Evening !"
} 
 return welcomeLine 

}


const Greetings = () => {
  // const [changeName,setChangeName] = useState(false)
  // const [personNameInput,setPersonNameInput] = useState("")
  // const [userData,setUserData] = useState(JSON.parse(localStorage.getItem("user")) || [])
  // // const name = userData[0].name
  // const [shouldShowUpdate,setShouldShowUpdate]  = useState(false)



  // if(userData.length === 0){
  //   setShouldShowUpdate(true)
  // }



  // const updateName =()=>{
  //   if(!personNameInput){
  
  //   }else{
  //     setUserData([{name:personNameInput}])
  //     setPersonNameInput("")
  //     setShouldShowUpdate(!shouldShowUpdate)
     
  
  //   }
  // }
  

  // function reLoad(){
  //   localStorage.setItem("user", JSON.stringify([]))
  
  // }
  // useEffect(()=>{
  // localStorage.setItem("user", JSON.stringify(userData))
  
  // },[shouldShowUpdate])


console.log("Greetings component rendered")

  return (
    <>
{/* {
 shouldShowUpdate === true ? <div className="absolute  w-full h-full flex justify-center z-50 items-center backdrop-blur-lg  md:mx-32
  " ><div className="w-5/6 h-2/6 relative bg-slate-300 flex flex-col items-center justify-center rounded-lg  ">
    
    <input type="text" value={personNameInput} onChange={(e) => setPersonNameInput(e.target.value)} placeholder="Enter your name" className="h-10 w-5/6 text-lg text-center rounded-md bg-slate-100" />
    <button className="bg-green-500 mt-12 w-32 h-10 text-2xl font-ubuntu text-slate-50  rounded-full font-bold" onClick={updateName}>Update</button>
    <img src={close} alt="close" className=" cursor-pointer absolute top-0 right-0  " onClick={ () =>setShouldShowUpdate(!shouldShowUpdate)}   />
    </div></div>:<div className='mt-6 px-6 md:mx-32'>
{
userData.map((elem)=>{
  return(


<div className=' flex items-baseline'>
    <h2 className=' text-xl text-yellow-50 font-poppins font-normal'key={123} >{messageBuild(new Date().getHours())}, <span className='text-3xl font-ubuntu font-bold' onClick={()=> setShouldShowUpdate(!shouldShowUpdate)}>{elem.name} !</span></h2>
    <img src={edit} alt="edit name" className='  w-4 h-4 border-solid border-slate-500 m-1  rounded-full border-2' />
   </div >
    )
  })
  
}
  <p className='text-lg mt-2 text-yellow-200 font-poppins font-light '>{dateBuilder(new Date())}</p>
  </div>
} */}

<div className='mt-12 px-6 md:mx-32'>




    <h2 className='text-4xl text-yellow-50 font-lato font-normal'key={123} >{messageBuild(new Date().getHours())}</h2>
   
  <p className='text-lg mt-2 text-yellow-200 font-poppins font-light '>{dateBuilder(new Date())}</p>
  </div>

    </>
  )
}

export default Greetings