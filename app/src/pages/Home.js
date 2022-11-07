import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {useNavigate,Link} from 'react-dom'
import ClearSeat from './ClearSeat'
import React, { useState } from "react";
import clsx from "clsx";
import axios from 'axios'





  


const movies = [
  {
    name: "Vadivasal",
    price: 120,
    occupied: [1]
  },
  {
    name: "Valimai",
    price: 150,
    occupied: [9, 41, 35, 11, 65, 26]
  },
  {
    name: "Beast",
    price: 200,
    occupied: [37, 25, 44, 13, 2, 3]
  },
  {
    name: "Doctor",
    price: 100,
    occupied: [10, 12, 50, 33, 28, 47]
  },
  {
    name: "Ponniyin Selvan-The Beginning",
    price: 200,
    occupied: [7, 25, 4, 13, 20, 31]
  },
  {
    name: "Vikram",
    price: 180,
    occupied: [3, 5, 40, 3, 20, 21]
  }
];

const seats = Array.from({ length: 10 * 10 }, (_, i) => i);

function shoot() {
  alert(PaymentRequest);
}

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const[movieOccupied,setMovieOccupied]= useState(selectedMovie.occupied)

  let config={
    headers:{
      header1:'Access-Control-Allow-Origin',
      header2:'Content-Type: application/json'
    }
  }
 
  axios.get('http://localhost/apiPHP/api/post/read.php',{headers:{ 'Content-Type':'application/json','Access-Control-Allow-Origin':true}}).then(res=>{
    const result=res.data
    console.log(res)
    console.log(result)
  })
  console.log('selected movie')
  console.log(selectedMovie)

  console.log('movie' + selectedMovie + 'has occupied ' + selectedMovie.occupied.value)
  
  const onSubmit=()=>{
    console.log(selectedSeats)
    console.log(selectedMovie)

    movies.map((movie)=>{
      if(movie.name === selectedMovie.name){
        console.log(movie.occupied)
        for(var i=0;i<selectedSeats.length;i++){
            movie.occupied.push(selectedSeats[i])
        }
        
        console.log("movie occupation adjusted")
        console.log(movie.occupied)
        setMovieOccupied(movie.occupied)
      }
    })
  }
  ///////////////////////////////////////

  const onUnbook=()=>{
    
  window.location('/cancel-seat')
  }
  return (
    <div className="App">
     
      <Movies
        movie={selectedMovie}
        onChange={(movie) => {
          setSelectedSeats([]);
          setSelectedMovie(movie);
        }}
      />
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={(selectedSeats) =>
          setSelectedSeats(selectedSeats)
        }
      />

      <p className="info">
        Total seats alloted for you is{" "}
        <span className="count">{selectedSeats.length}</span> at a price of{" "}
        <span className="total">
          {"Rs." + selectedSeats.length * selectedMovie.price}
        </span>
        <p>
          <button className="bg" onClick={shoot}>
            <b onClick={onSubmit}>Book Now</b>
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
  );
}

function Movies({ movie, onChange }) {
  return (
    <div className="Movies">
      <h1>
        {" "}
        Bin<span className="gold">{"g"}</span>eBoy{" "}
      </h1>
      <h4> Its Movie time! </h4>

      <img
        className="motion poster"
        src="https://s3.amazonaws.com/pbblogassets/uploads/2017/07/oz-wicked-witch-poster.gif"
        alt="Girl in a jacket"
      />

      <p>
        {" "}
        <label htmlFor="movie">Select your Binge!</label>
      </p>
      <select
        id="movie"
        value={movie.name}
        onChange={(e) => {
          onChange(movies.find((movie) => movie.name === e.target.value));
        }}
      >
        {movies.map((movie) => (
          <option key={movie.name} value={movie.name}>
            {movie.name} ({movie.price})
          </option>
        ))}
      </select>
    </div>
  );
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>Not Now</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Vacant</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  );
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
      console.log(selectedSeats)
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat);
          const isOccupied = movie.occupied.includes(seat);
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                "seat",
                isSelected && "selected",
                isOccupied && "occupied"
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : (e) => {
                      if (e.key === "Enter") {
                        handleSelectedState(seat);
                      }
                    }
              }
            />
          );
        })}
      </div>
    </div>
  );
}