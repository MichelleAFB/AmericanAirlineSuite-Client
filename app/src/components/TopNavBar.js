import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import{visibleNavbar,hideNavbar} from '../features/navbar/navbarSlice'
import { useSelector, useDispatch} from "react-redux"
import {useState} from 'react'

function TopNavBar() {
  //retrieve navbar state from store
  const showNavbar = useSelector((state) => state.showNavbar.showNavbar)
  const dispatch = useDispatch()

  //const [show,setShow]=useState(showNavbar)
  const location = useLocation()
  const navigate=useNavigate()

 

  const pathMatchRoute = (route) => {
    if(route == location.pathname){
      return true
    }
  }
  /*
    store a variable in the app store that stores if topbar show be visible

  */
 const logout =() => {
  dispatch(hideNavbar())
  console.log("inside logout: " + showNavbar)
  setTimeout(function(){
    window.location="http://localhost:3002/auth/logout"
  },1000)
 }

  if(showNavbar==true){
  return (
    <div className="top_navbar">
     <nav className="top_navbarNav">
    <ul className="top_navbarListItems">
      <li className="top_navbarListItem" onClick={() => navigate('/')}>
        
        <p className={pathMatchRoute('/home'? 'top_navbarListItemNameActive':'top_navbarListItemName')}>Reserve</p>
      </li>
      <li className="top_navbarListItem" onClick={() => navigate('/offers')}>
        
        <p className={pathMatchRoute('/user-events'? 'top_navbarListItemNameActive':'top_navbarListItemName')}><a  href="/userData/userEvents">Your Events</a></p>
      </li>
      <li className="top_navbarListItem" onClick={() => navigate('/profile')}>
        
        <p className={pathMatchRoute('/auth/logout'? 'top_navbarListItemNameActive':'top_navbarListItemName')} onClick={()=> {
         
        }}><a  onClick={logout}>Sign Out</a></p>
      </li>

    </ul>
  </nav>
  </div>
  )
  }
}

export default TopNavBar