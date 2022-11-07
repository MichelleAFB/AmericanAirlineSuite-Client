import axios from 'axios'
import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import {showNavbar} from '../features/navbar/navbarSlice'

function HomeFullSuite({allEvents}) {
  
  useEffect(() => {
    
  },[])
  

  
  return (
    <div>
      <ul>
        {allEvents.map((e) => {
          return( <li>e.act</li>)
        })}
      </ul>
    </div>
  )
}

export default HomeFullSuite