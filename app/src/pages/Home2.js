import React from 'react'
import ShowCase from "../components/ShowCase"
import Movies from '../components/Movies'
import Cinema from '../components/Cinema'

import {useState,useEffect} from 'react'
import axios from 'axios'




const seats=[]
let i=0
while(i<40){
  seats[i]=i
  i++
}

function Home2() {

  const movies=[{name:"hannahmontant",occupied:[]},{name:"the climb",occupied:[]},{name:"the joker",occupied:[],},{name:"havanah nights",occupied:[]}]
  
  const [isLoading,setIsLoading]=useState(true)
  const [events,setEvents]=useState([])
  const [selectedEvent,setSelectedEvent] = useState({
    act:'',
    date:'',
    time:'',
    occupied:[]
  })
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [movieOccupied,setMovieOccupied]= useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3002/sendEventstoFront').then(r => {
      setEvents(r.data)
      const ev=events[0]
      setSelectedEvent({act:ev.act, date:ev.date, time:ev.time, occupied:ev.occupied})
      setIsLoading(false)
      console.log(events)
      console.log(selectedEvent)
    })
  },[])

  if(!isLoading){
    
    
    console.log(selectedEvent)
    const onUnbook=()=>{
      window.location('/cancel-seat')
      }
  
       
      ///////////////////////
      
  
      function newSeat(){
        const occupied=[]
        movies.map((movie)=>{
          if(movie.name === selectedMovie.name){
            
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
        axios.post("http://localhost:3002/setOccupied",{response:response}).then(resp => {
          console.log(resp.data)
        }) 
    }
  
      //////////////////////////////
      const shoot=()=>{
        alert("BOOKED")
      }
  
    ///////////////////////////////////////////////////////////////////////
  
    
    return (
      <div>
        <ShowCase/>
        <Movies movie={selectedMovie}
        movies={movies}
          onChange={(movie) => {
            setSelectedSeats([]);
            setSelectedMovie(movie);
            console.log("NEWLY SELECTED MOVIE: line 28 "+ selectedMovie.name)
            console.log("FOR SELECTED MOVIE: " + selectedMovie)
          }}/>
          <Cinema
          movie={selectedMovie}
          seats={seats}
          selectedSeats={selectedSeats}
          onSelectedSeatsChange={(selectedSeats) =>{
            setSelectedSeats(selectedSeats)
            console.log("FROM HOME SELECTED SEATS ARE")
            console.log(selectedSeats)
            console.log(selectedMovie.name)
          }}
        />
        <p className="info">
          Total seats alloted for you is  {" "}
          
          
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
export default Home2