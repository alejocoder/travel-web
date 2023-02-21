import './NavbarStyles.css'
import React, { useState } from 'react'
import { MenuItems } from './MenuItem'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  return (
    <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Travely</h1>

        <div 
          onClick={() => setToggle(!toggle)}
          className='menu-icons'>
          <i 
          className={!toggle ? 'fas fa-times' : 'fas fa-bars' }></i>
        </div>

        <ul className={toggle ? 'nav-menu' : 'nav-menu active'}>
          {MenuItems.map((item, index) => {
            return(
              <li key={index}>
                  <NavLink className={item.cName} to={item.url}>
                    <i className={item.icon}></i> {item.title}
                  </NavLink>
             </li> 
            )
          })}
          <button>Sign Up</button>
        </ul>
    </nav>
  )
}
