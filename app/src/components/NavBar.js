
import {useNavigate, useLocation} from 'react-router-dom'
import React from 'react'

function NavBar() {

  const navigate= useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if(route == location.pathname){
      return true
    }
  }
  return (
    <footer className="navbar">
    <nav className="navbarNav">
      <ul className="navbarListItems">
        <li className="navbarListItem" onClick={() => navigate('/')}>
          
          <p className={pathMatchRoute('/'? 'navbarListItemNameActive':'navbarListItemName')}>Reserve</p>
        </li>
        <li className="navbarListItem" onClick={() => navigate('/offers')}>
          
          <p className={pathMatchRoute('/offers'? 'navbarListItemNameActive':'navbarListItemName')}>Offers</p>
        </li>
        <li className="navbarListItem" onClick={() => navigate('/profile')}>
          
          <p className={pathMatchRoute('/profile'? 'navbarListItemNameActive':'navbarListItemName')}>Profile</p>
        </li>

      </ul>
    </nav>
  </footer>
  )
}

export default NavBar