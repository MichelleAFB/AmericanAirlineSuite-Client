import React from 'react'
import ShowCase from "../components/ShowCase"
import Events from '../components/Events'
import Arena from '../components/Arena'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate,useLocation } from 'react-router-dom'
import {useState,useEffect} from 'react'
import {visibleNavbar,hideNavbar} from '../features/navbar/navbarSlice'
import axios from 'axios'
import {resetSelectedEventOccupied, resetSelectedSeats, updateSelectedEvent, updateSelectedEventOccupied} from '../features/events/selectedEventSlice'
import Arena2 from './Arena2'
import Events2 from '../components/Events2'

import { populateEvents,loadSelectEvent,setOccupiedSeats } from '../redux/events/events-actions'
import {connect} from 'react-redux'





const seats=[]
let i=0
while(i<40){
  seats[i]=i
  i++
}

function Home4() {

  /****RedUX*****/
  
  //const showNavbar = useSelector((state) => state.showNavbar.showNavbar)
  const dispatch = useDispatch()
 
 

  /************ */
  //const reduxEvent=useSelector((state)=> 
 // state.selectedEventRedux.selectEvent
//)

  
  const [allOccupied,setAllOccupied]=([])
  const [isLoading,setIsLoading]=useState(true)
  const [isLoading2,setIsLoading2]=useState(true)
  const [events,setEvents]=useState([])
  const [selectedEvent,setSelectedEvent] = useState({
    id:-1,
    act:"act",
    date:"date",
    time:"time",
    httpId:-1,
    image:"image"
  })

  const [occInstantiated,setOccInstantiated]=useState(false)
  
  const [eventOccupied,setEventOccupied] = useState([])
  const [selectedSeats, setSelectedSeats] = useState([])
  





  async function getOcc(chosenEvent){
    await axios.get('http://localhost:3002/sendOccupiedtoFront').then(response => {
      const occ =  response.data
      console.log("********FROM HOME*******")
      console.log(occ)
      console.log(chosenEvent.act)
      console.log(chosenEvent.id)
      const finalEventOcc=[]
      const eventOcc=[]
      const item = new Promise((resolve,reject) => {
        occ.map((o) => {
          if(o.actID==chosenEvent.id && !eventOcc.includes(o.seat)){
              eventOcc.push(o.seat)
          }
        })
        resolve()
      })

      item.then((eventOcc) => {
        setEventOccupied(eventOcc)

        
        console.log("*****ATTEMPTING")
        console.log(eventOccupied)
       
        console.log("\n\n\n")
        if(eventOccupied.length>0){
          setIsLoading(false)
        }
      }).catch(
        setIsLoading(false)
      )
      
      return eventOcc
    })
  }
  
  

  useEffect(() => {
    axios.get('http://localhost:3002/sendEventstoFront').then(r => {
     const allevents=r.data
     console.log("*********************")
     console.log(typeof(allevents))
     console.log(allevents)
      const ev=allevents[0]
   
      
      dispatch(updateSelectedEvent(ev))
      dispatch(populateEvents(allevents))
      dispatch(loadSelectEvent(allevents[0]))
      setIsLoading(false)
      
    })

    axios.get("http://localhost:3002/sendOccupiedtoFront").then((res) => {
      const occ=res.data
     // dispatch(updateSelectedEventOccupied(occ))
      dispatch(setOccupiedSeats(occ))
      setEvents(occ)
      setIsLoading2(false)
    })
  },[])









  console.log("FROM EVENTS")

  if(!isLoading && !isLoading2){
    console.log("all occ")
    console.log(allOccupied)
    console.log(selectedEvent)
    const onUnbook=()=>{
      window.location('/cancel-seat')
      }
  
       
      function newSeat(){
        const occupied=[]
        
        events.map((event)=>{
          if(event.act === selectedEvent.act){
            
            let i=0
           
            selectedSeats.map((seat) => {
              occupied.push({seat:seat})
              console.log(occupied)
            })
          }    
      })
      console.log("final occupied")
      console.log(occupied)
      return occupied
      }
     
      
  
      ///////////////////////////////
      const submit=async()=>{
        
        const response=await newSeat()
        console.log("inside submit response is")
        console.log(response)
        console.log(selectedEvent)
        axios.post("http://localhost:3002/setOccupied",{response:response, event:selectedEvent}).then(resp => {
          console.log(resp.data)
        })
        setEventOccupied([]) 
        setSelectedSeats([])
        console.log("set event occupied back to null")
        console.log(eventOccupied)
        
        console.log("blank selectedseats")
        console.log(selectedSeats)
       // dispatch(resetSelectedSeats())
        console.log("attempting to reset select seats in slice")
       
    }
  
      //////////////////////////////
     
      
    ///////////////////////////////////////////////////////////////////////
  
    
    return (
      <div>
        <ShowCase/>
       
         <Events2 
          id={selectedEvent.id}
          act={selectedEvent.act}
          date={selectedEvent.date}
          selectedSeats={selectedSeats}
          seats={seats}
          occupied={selectedEvent.occupied}
          onSelectedSeatsChange={(selectedSeats) =>{
            setSelectedSeats(selectedSeats)
            console.log("FROM HOME SELECTED SEATS ARE")
            console.log(selectedSeats)
            console.log(selectedEvent.ect)
          }}
         
          onChange={(event) => {
            console.log("******STATE CHANGE IN HOME CHANGING EVENT TO" + event.act)
            
            dispatch(updateSelectedEvent(event))
            
           // dispatch(resetSelectedEventOccupied())
            //setSelectedEvent(event);
            //setSelectedSeats([]);
            //reset redux
            

            console.log("NEWLY SELECTED MOVIE: ")
              console.log(event.act)
      
            
          }}/>
          
        

         
        <p className="info">
          Total seats alloted for you is  {" "}
          <span className="count">{selectedSeats.length}</span> at a price of   {" "}
            <span className="total">
              {"Rs." + selectedSeats.length }
            </span>
          <p>
            <button className="bg" onClick={submit}>
              <b>Book Now</b>
            </button>
          </p>
          <h4>
            HAPPY BIN<span className="gold">G</span>E !
          </h4>
          <h3>
            {" "}
            A <span className="red">{"book My Show"}</span> Group{" "}
          </h3>
          <button className='bg unbook'><b onCLick={onUnbook}>Cancel a Seat Reservation</b></button>
        </p>
        
      </div>
    )


  }  
  ///////////////////////////////////////////////////////////////////////
  
}

/*
<span className="count">{selectedSeats.length}</span> at a price of{" "}
<span className="total">
          {"Rs." + selectedSeats.length * selectedMovie.price}
        </span>
*/
const mapDispatchToProps=(dispatch)=> {
  return{
    populateEvents:((eventArray) => dispatch(populateEvents(eventArray)))
    
  }
}



export default connect(null,mapDispatchToProps)(Home4)