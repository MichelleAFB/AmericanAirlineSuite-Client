import axios from 'axios'
import {updateSelectedEvent, updateSelectedEventOccupied,updateSelectedSeats} from '../features/events/selectedEventSlice'
import {useSelector,useDispatch} from 'react-redux'

import {useState,useEffect} from 'react'

import clsx from 'clsx';
import { setOccupiedSeats } from '../redux/events/events-actions';

function Arena3({occupied,event,onSelectedSeatsChange }) {
  
/******************** */
  const dispatch = useDispatch()

  

  const reduxSelectedSeats = useSelector((state) => state.storeEvent.selectSeats)
  

  

  
  

  
 /************************/

 /*
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
      
    } else {
      onSelectedSeatsChange([...selectedSeats,seat]);
    }
  }
  */

  
  
  const [allOcc,setAllOcc]=useState([])
  const [actExist,setActExist] =useState(false)
  const [seats,setSeats]=useState([])
  const [selectedSeats,setSelectedSeats] =useState([])
  const [ourEvent,setOurEvent]=useState({})
  
  console.log("\n\n\n\n")

  setOurEvent(event)

  const occ=[]

    const prom = new Promise((resolve,reject,occ) => {
      console.log("*****INSIDE PROMISE*****")
      //console.log(occupied)
      setOurEvent(event.event)
      console.log("ourEvent")
      console.log(ourEvent)
      
      occupied.map((o) => {
        console.log(o.actID)
        console.log(ourEvent.id)
        if(o.actID==ourEvent.id){
          console.log(o.actID)
          console.log(ourEvent.id)
          
          if(!occ.includes(o.seat)){
            console.log("MATCH\n\n\n")
            occ.push(o.seat)
            console.log("adding "+o.seat)

          }
          console.log("OCUPPIED****************")
          console.log(occ)
        }
      })
      setAllOcc(occ)
      resolve(occ)
    })

    prom.then(() => {
      console.log("success")
      //setAllOcc(occ)
      console.log(allOcc)
    }).catch(
      console.log("fail")
    )




   useEffect(()=>{
    console.log("*********RERENDER ARENA*****CURENNT EVENT**")
    console.log(event.event)
    const occ=[]

    //setOurEvent(event)

    const prom = new Promise((resolve,reject,occ) => {
      console.log("*****INSIDE PROMISE*****")
      //console.log(occupied)
      setOurEvent(event.event)
      console.log("ourEvent")
      console.log(ourEvent)
      
      occupied.map((o) => {
        console.log(o.actID)
        console.log(ourEvent.id)
        if(o.actID==ourEvent.id){
          console.log(o.actID)
          console.log(ourEvent.id)
          
          if(!occ.includes(o.seat)){
            console.log("MATCH\n\n\n")
            occ.push(o.seat)
            console.log("adding "+o.seat)

          }
          console.log("OCUPPIED****************")
          console.log(occ)
        }
      })
      setAllOcc(occ)
      resolve(occ)
    })

    prom.then(() => {
      console.log("success")
      //setAllOcc(occ)
      console.log(allOcc)
    }).catch(
      console.log("fail")
    )

    },[])
    
  return (
    
            
            <div>
              Arena
            </div>
  );
}


export default Arena3