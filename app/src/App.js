import React from 'react'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import ForgotPassword from './pages/ForgotPassword'
import EventList from './pages/EventList'
import Home2 from './pages/Home2'
import Home3 from './pages/Home3'
import Home4 from './pages/Home4'
import PreHome from './pages/PreHome'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'

import TopNavBar from './components/TopNavBar'
import Counter from './features/counter/Counter'
import AdminAllEvents from './adminPages/AdminAllEvents'

import ClearSeat from './pages/ClearSeat'
/****outside */
import GoogleLogin from 'react-google-login'

import {useState,useEffect} from 'react'
import axios from 'axios'
import {updateSelectedEvent, updateSelectedEventOccupied,resetSelectedSeats,resetSelectedEventOccupied} from './features/events/selectedEventSlice'
import {useSelector,useDispatch} from 'react-redux'
import HomeFullSuite from './pages/HomeFullSuite'
import {AlertProvider} from './Context/alertContext'
import Events2 from './components/Events2'
import {populateEvents} from './redux/events/events-actions'





function App() {

  const [user,setUser] = useState(null)

  /*
  async function getUser() {
    try{
      const url="http://localhost:3002/auth/login/success"
      const {data} =await axios.get(url,{withCredentials:true})
      console.log(data.user)
      setUser(data.user._json)
    }catch(err){
      console.log(err.stack)
    }
  }
  
  getUser()
  */

  



  return (
    <div>
      

      <Router>
        <TopNavBar/>
      <NavBar/>
        <Routes>
          
          <Route path ='/counter' element={<Counter/>}/>
          <Route path='/prehome' element={<PreHome/>}/>
          <Route path='/homefullsuite' element={<HomeFullSuite/>}/>
          <Route path='/admin' element={<AdminAllEvents/>}/>
          <Route path="/home" element={<Home4/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/event-list' element={<EventList/>}/>
          <Route path='/home2' element={<Home2/>}/>
          
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
