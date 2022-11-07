import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'
import { useSelector, useDispatch} from "react-redux"

//components
import EventBox from '../components/EventBox'


const AdminAllEvents = () => {
   const [events,setEvents] = useState([])
   const [occupiedEvents,setOccupiedEvents]=useState([])
   const [isLoading,setIsLoading]= useState(true)
   const [isOccupiedLoading,setIsOccupiedLoading] = useState(true)

   const allEvents = useSelector((state) => state.events.events)
  
   


  useEffect(()=>{

    
    axios.get("http://localhost:3002/sendEventstoFront").then((response) => {
      //console.log(response.data)
      setEvents(response.data)
      if(events.length!=0){
        setIsLoading(false)
        console.log(events)
      }
    })
    //console.log(new Date())


    axios.get("http://localhost:3002/sendOccupiedtoFront").then((response) => {
      setOccupiedEvents(response.data)
      if(occupiedEvents.length>0){
        setIsOccupiedLoading(false)
        console.log(occupiedEvents)
      }
    })

  },[])


if(!isLoading && !isOccupiedLoading){
  return (
    <div className="container_box">

      {events.map((ev) => (
         <EventBox id={ev.id} act={ev.act} date={ev.date} time={ev.time}/>
      ))}
      
    </div>
  )
}
}

export default AdminAllEvents