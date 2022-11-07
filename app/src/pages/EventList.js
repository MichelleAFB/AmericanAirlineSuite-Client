import {useEffect,useState} from 'react'
import axios from 'axios'





function EventList() {

    const[images,setImages]=useState([])
  useEffect(()=>{

    axios.get("http://localhost:3002/getEvents").then(response => {
      const data=response.data
    Object.keys(data).forEach(key => {
      axios.get(data[key].image, (err,result2) => {
        if(!err){
          console.log(result2)
        }
      })
    })
      
    })
  },[])


  return (
    <div>EventList</div>
  )
}

export default EventList


