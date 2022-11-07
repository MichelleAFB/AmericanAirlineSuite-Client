import { createSlice,createAsyncThunk, current } from '@reduxjs/toolkit'
import axios from 'axios'

import { createPoolCluster } from 'mysql'
import {useState} from 'react'
import { resolve } from 'url'






 /*

  async function fetchEvents(){
    const res= await fetch('http://localhost:3002/sendEventstoFront')
    const data = await res.json();
    console.log(data)
    return data
  }

  //const even=fetchEvents()
  //console.log(even)

  
  const newEvent=[]
  even.then(function(result){
    console.log(result)
    return result
  })

  
  setTimeout(() => {
    console.log("new event")
    console.log(even)
  },3000)
*/









const initialState={
  selectEvent:{ 
    act: "Roxy Music - 50th Anniversary Tour",
    date: "Sep 23, 2022",
    id: 952,
    time: "8PM"
    },
    allEvents:[],
    occupied:[],
    selectSeats:[],
    currentOccupied:[]
}
 


export const selectedEventSlice=createSlice({
  name:'selectedEvent',
  initialState,
  reducers:{
    updateSelectedEvent:(state,action) => {
      state.selectEvent= action.payload
      console.log("*****updating NEW EVENT for " + state.selectEvent.act  )
      
      
     
      switch(state){
        case (state.length>2) :
          state.occupied.map(m => {
            if(m.actID==state.selectEvent.id && !state.occupied.includes(m.seat)){
              state.occupied.push(m.seat)
              console.log(state.occupied)
              console.log("from slice: " + state.occupied)
            }
            if(!state){
              return state
            }
          })
        default:
          return state
      }
      
    },
    updateSelectedEventOccupied:(state,action) => {
     
      console.log("*****updating occupied for " + state.selectEvent.act + " with new seat" )
      console.log(action.payload)
      state.occupied=action.payload
      return state
    
    },
    resetSelectedEventOccupied:(state,action) => {
      state.occupied=[]
    },
    updateSelectedSeats:(state,action) => {
      state.selectSeats=action.payload
    },
    resetSelectedSeats:(state,action) => {

      state.selectedSeats=[]
      console.log("********RESETING SELECTED SEATS IN SLICE ")
      console.log(state.selectedSeats)
    },
    populateEvents:(state,action) => {
      console.log("FROM SLICE")
      console.log(action.payload)
      state.allEvents=action.payload
    },
    populateCurrentOccupied:(state,action) => {
      const data=action.payload
      data.map((a) => {
        current.occupied.push(a)
      })
    }
  }
})

console.log(selectedEventSlice)

export const {updateSelectedEvent, updateSelectedEventOccupied,updateSelectedSeats,resetSelectedEventOccupied,resetSelectedSeats,populateEvents,populateCurrentOccupied} = selectedEventSlice.actions

export default selectedEventSlice.reducer

/*
   switch(action.payload){
        case(action.payload.length>0):{
          console.log("\n\n\n\n")
      console.log("FROM SLICE OCCUPIED")
      console.log(action)

      const eve= new Promise((resolve,reject) => {

        const arr=[]
      var i=0
      const data=action.payload
      while(i<action.payload.length){
        data.map((m) => {
          if(!arr.includes(m)){
            arr.push(m)
          }
        })
        console.log(arr)
        i++
      }
      console.log("AARRR OUTSIDE SLICE")
      console.log(arr)
      state.occupied=arr

      resolve()
      })

      eve.then(() => {
        console.log("EVENT SUCCESS")
        console.log(state.occupied)
      return state

      }).catch(
        console.log('EVENT SLICE FAIL')
      )
    }default:
    return state
  }




*/