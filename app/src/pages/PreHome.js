import React from 'react'
import Home3 from './Home3'
import{useState,useEffect,useContext} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {resetSelectedEventOccupied, resetSelectedSeats, updateSelectedEvent, updateSelectedEventOccupied, populateEvents} from '../features/events/selectedEventSlice'
import {visibleNavbar,hideNavbar} from '../features/navbar/navbarSlice'
import axios from 'axios'
import HomeFullSuite from './HomeFullSuite'
import AlertContext from '../Context/alertContext'
import Alert from '../Context/Alert'




function PreHome() {

  const dispatch=useDispatch()
  const showNavbar = useSelector((state) => state.showNavbar.showNavbar)
  const [events,setEvents] =useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [isLoading2,setIsLoading2]=useState(true)
  console.log(showNavbar)
  dispatch(visibleNavbar())

  
  

  useEffect(() => {
    axios.get('http://localhost:3002/sendEventstoFront').then(r => {
     const events=r.data
      const ev=events[0]
   
      
      dispatch(updateSelectedEvent(ev))
      dispatch(populateEvents({payload:events}))
      setIsLoading(false)
      
    })

    axios.get("http://localhost:3002/sendOccupiedtoFront").then((res) => {
      const occ=res.data
      dispatch(updateSelectedEventOccupied(occ))
      setEvents(occ)
      setIsLoading2(false)
    })
  },[])
 

  if(!isLoading && !isLoading2){
  return (
    
    <div className="w-3/4  items-center justify-center mt-40 justify-self-center ml-20">
     <div class="flex-col-2">
     <div className=" m-5 h-100 width-100 bg-blue-400 items-center p-10 rounded-md shadow-xl" onClick={()=>{ return <Home3 allEvents={events}/>}}>
        <a href="/home">Reserve Individual Seats</a>
      </div>
      <div className="m-5 h-50 w-50 bg-blue-400 items-center p-10 rounded-md shadow-xl " onClick={()=> { return <HomeFullSuite allEvents={events}/>}}>
        <a href="/homefullsuite">Reserve Entire Suite</a>
      </div>
      <div>
        <Alert/>
      </div>
     </div>
    </div>
  )
  }
}

export default PreHome